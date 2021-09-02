// Model imports
const Folder = require("./folder.model.js");

// desc: Create new folder
// POST /folder/new
// payload: JSON body {title: "Folder title", description: "Folder description", parentFolder: "Parent folder _id"}
exports.newFolder = async (req, res, next) => {
  try {
    // Check if the folder with the same name already exists
    const query = { title: req.body.title, parentFolder: { $exists: false } };
    if (req.body.parentFolder) query.parentFolder = req.body.parentFolder;
    const folderCount = await Folder.countDocuments(query);

    if (folderCount) {
      res.status(422);
      return next({
        message: `Folder with the title '${req.body.title}' already existis. Please select a different title.`
      });
    }

    // Create a new folder
    Folder.create({
      user: req.userId,
      title: req.body.title,
      description: req.body.description,
      slug: req.body.title.split(" ").join("-").toLowerCase(),
      parentFolder: req.body.parentFolder,
      folderCount: 0,
      bookmarkCount: 0
    }).then(folder => {
      // Update the folder count of the parent folder
      if (folder.parentFolder)
        Folder.countDocuments({
          parentFolder: folder.parentFolder
        }).then(folderCount =>
          Folder.updateOne(
            { _id: folder.parentFolder },
            { $set: { folderCount } }
          ).then(res => res)
        );
    });

    res.status(201).json({
      message: "New folder creation queued."
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
