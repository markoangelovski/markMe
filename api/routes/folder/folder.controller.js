// Model imports
const Folder = require("./folder.model.js");

// desc: Create new folder
// POST /folder/new
// payload: JSON body {title: "Folder title", description: "Folder description", parentFolderPath: "/parent-folder-path"}
exports.newFolder = async (req, res, next) => {
  let { title, description, parentFolderPath } = req.body;

  // Folder paths with special characters are automatically URL encoded on frontend, and need to be manually decoded on backend
  parentFolderPath = decodeURIComponent(parentFolderPath);

  try {
    const slug = title
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace("#", "")
      .replace("/", "");

    const path = parentFolderPath ? parentFolderPath + "/" + slug : "/" + slug;

    // Check if the folder with the same name already exists
    const query = {
      title,
      path,
      user: req.userId
    };

    const folderCount = await Folder.countDocuments(query);

    if (folderCount) {
      res.status(422);
      return next({
        message: `Folder with the title '${title}' already existis. Please select a different title.`
      });
    }

    const folderData = {
      title,
      description,
      slug,
      path
    };

    // Get Parent Folder's _id
    folderData.parentFolder =
      parentFolderPath &&
      (
        await Folder.findOne({
          path: parentFolderPath
        }).select("_id")
      )._id;

    // Create a new folder
    const folder = await Folder.create({
      user: req.userId,
      ...folderData
    });

    if (parentFolderPath) {
      // Update Parent Folder's folder count
      const folderCount = await Folder.countDocuments({
        parentFolder: folderData.parentFolder,
        user: req.userId
      });

      await Folder.updateOne(
        { _id: folderData.parentFolder },
        { $set: { folderCount } }
      );
    }

    // Removes user and __v fields before returning the response
    delete folder._doc.user;
    delete folder._doc.__v;

    res.status(201).json({
      message: "New folder created.",
      folder: folder._doc
    });
  } catch (error) {
    console.warn("New folder error: ", error.message);
    next(error);
  }
};

// desc: Update folder
// PATCH /folder/update/:folderId
// payload: JSON body [{"propKey":"title","propValue":"Folder title"},{"propKey":"description","propValue":"Folder description"},{"propKey":"parentFolder","propValue":"Parent folder _id"}]
exports.updateFolder = async (req, res, next) => {
  try {
    // Prepare folder data to update
    const payload = {};
    req.body.forEach(prop => {
      payload[prop.propKey] = prop.propValue;
    });

    // Update the folder data
    Folder.findByIdAndUpdate(req.params.folderId, {
      $set: payload
    }).then(folder => {
      // If folder has been moved from one folder to the other, find the number of subfolders for each and update the folder count for both
      if (payload.parentFolder !== folder.parentFolder) {
        Promise.all([
          Folder.countDocuments({ parentFolder: payload.parentFolder }),
          Folder.countDocuments({ parentFolder: folder.parentFolder })
        ]).then(res => {
          Promise.all([
            Folder.updateOne(
              { _id: payload.parentFolder },
              { $set: { folderCount: res[0] } }
            ).then(res => res),
            Folder.updateOne(
              { _id: folder.parentFolder },
              { $set: { folderCount: res[1] } }
            ).then(res => res)
          ]);
        });
      }
    });

    res.json({
      message: "Folder update queued."
    });
  } catch (error) {
    console.warn("Update folder error: ", error.message);
    next(error);
  }
};

// desc: Delete folder
// DELETE /folder/delete/:folderId
exports.deleteFolder = async (req, res, next) => {
  try {
    Folder.deleteOne({ _id: req.params.folderId, user: req.userId }).then(
      res => res
    );

    res.json({
      message: "Folder delete queued."
    });
  } catch (error) {
    console.warn("Delete folder error: ", error.message);
    next(error);
  }
};

// desc: Endpoint used to add the correct "path" property to folders. Left here just in case it is ever needed.
exports.pathify = async (req, res, next) => {
  try {
    // // Adds default path: "/{{slug}}" to root folders
    // const bulk = Folder.collection.initializeUnorderedBulkOp();
    // const rootFolders = await Folder.find({ parentFolder: { $exists: false } });

    // rootFolders.forEach(folder => {
    //   bulk
    //     .find({ _id: folder._id })
    //     .update({ $set: { path: "/" + folder.slug } });
    // });

    // const result = bulk.execute();
    // res.json(result);

    const rootFolders = await Folder.find({ parentFolder: { $exists: false } });

    const bulk = Folder.collection.initializeUnorderedBulkOp();
    console.log("Root Folders fetched: ", rootFolders.length);

    const result = [];

    const makePaths = async (parentFolderId, parentFolderPath) => {
      let pathPlaceholder = "";

      const subFolders = await Folder.find({ parentFolder: parentFolderId });

      // subFolders.forEach(async subFolder => {
      for (let i = 0; i < subFolders.length; i++) {
        const subFolder = subFolders[i];

        pathPlaceholder += parentFolderPath + "/" + subFolder.slug;

        bulk.find({ _id: subFolder._id }).update({
          $set: { path: pathPlaceholder }
        });

        result.push({
          title: subFolder.title,
          path: pathPlaceholder
        });

        if (subFolders.length) {
          await makePaths(subFolder._id, pathPlaceholder);
          pathPlaceholder = "";
        } else {
          return;
        }
      }
    };

    for (let i = 0; i < rootFolders.length; i++) {
      const rootFolder = rootFolders[i];
      bulk.find({ _id: rootFolder._id }).update({
        $set: { path: rootFolder.path }
      });
      result.push({
        title: rootFolder.title,
        path: rootFolder.path
      });
      await makePaths(rootFolder._id, rootFolder.path);
    }
    const bulres = await bulk.execute();
    res.json({ bulres, result });
    // // res.json({ result });
  } catch (error) {
    console.warn("Error in pathify: ", error.message);
    next(error);
  }
};
