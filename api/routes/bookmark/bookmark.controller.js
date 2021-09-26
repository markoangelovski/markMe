const { urlRgx } = require("../../../constants/constants.js");

// Model imports
const Bookmark = require("./bookmark.model.js");
const Folder = require("../folder/folder.model.js");

// Helper imports
const { getMeta } = require("./bookmark.helpers.js");

// desc: Create new bookmark
// POST /bookmark/new
// payload: JSON body {url: "Boomark url", description: "Bookmark description", parentFolder: "Parent folder _id"}
exports.newBookmark = async (req, res, next) => {
  try {
    // Check if the folder with the same name already exists in the selected.
    const query = { url: req.body.url, parentFolder: { $exists: false } };
    if (req.body.parentFolder) query.parentFolder = req.body.parentFolder;
    const bookmarkCount = await Bookmark.countDocuments(query);

    if (bookmarkCount) {
      res.status(422);
      return next({
        message: `Bookmark with the URL '${req.body.url}' already existis.`
      });
    }

    if (!urlRgx.test(req.body.url)) {
      res.status(422);
      return next({
        message: `Invalid URL format.`
      });
    }

    // Create a new bookmark
    const bookmark = await Bookmark.create({
      user: req.userId,
      ...req.body
    });

    // Update the bookmark count of the parent folder
    if (bookmark.parentFolder) {
      Bookmark.countDocuments({
        parentFolder: bookmark.parentFolder
      }).then(bookmarkCount =>
        Folder.updateOne(
          { _id: bookmark.parentFolder },
          { $set: { bookmarkCount } }
        ).then(res => res)
      );

      // Add Parent Folder path to Bookmark
      Folder.findById(bookmark._doc.parentFolder)
        .select("path")
        .then(folder =>
          Bookmark.updateOne(
            { _id: bookmark._id },
            { $set: { parentFolderPath: folder.path } }
          ).exec()
        )
        .catch(error =>
          console.warn(
            "Error occurred while adding Parent Folder path to bookmark ",
            bookmark.title,
            error.message
          )
        );
    }

    delete bookmark._doc.user;
    delete bookmark._doc.__v;

    res.status(201).json({
      message: "New bookmark creation queued.",
      bookmark: bookmark._doc
    });
  } catch (error) {
    console.warn("New bookmark error: ", error.message);
    next(error);
  }
};

// desc: Update bookmark
// PATCH /bookmark/update/:bookmarkId
// payload: JSON body [{"propKey":"url","propValue":"Bookmark url"},{"propKey":"description","propValue":"Folder description"},{"propKey":"parentFolder","propValue":"Parent folder _id"}]
exports.updateBookmark = (req, res, next) => {
  try {
    // Prepare folder data to update
    const payload = {};
    req.body.forEach(prop => {
      payload[prop.propKey] = prop.propValue;
    });

    if (payload.url && !urlRgx.test(payload.url)) {
      res.status(422);
      return next({
        message: `Invalid URL format.`
      });
    }

    // Update the bookmark data
    Bookmark.findByIdAndUpdate(req.params.bookmarkId, {
      $set: payload
    }).then(bookmark => {
      // If bookmark has been moved from one folder to the other, find the number of bookmarks for each folder and update the bookmark count for both
      if (payload.parentFolder !== bookmark.parentFolder) {
        Promise.all([
          Bookmark.countDocuments({ parentFolder: payload.parentFolder }),
          Bookmark.countDocuments({ parentFolder: bookmark.parentFolder })
        ]).then(res => {
          Promise.all([
            Folder.updateOne(
              { _id: payload.parentFolder },
              { $set: { bookmarkCount: res[0] } }
            ).then(res => res),
            Folder.updateOne(
              { _id: bookmark.parentFolder },
              { $set: { bookmarkCount: res[1] } }
            ).then(res => res)
          ]);
        });
      }
    });

    res.json({
      message: "Bookmark update queued."
    });
  } catch (error) {
    console.warn("Update folder error: ", error.message);
    next(error);
  }
};

// desc: Delete bookmark
// DELETE /boomark/delete/:bookmarkId
exports.deleteBookmark = (req, res, next) => {
  try {
    Bookmark.findOneAndDelete({
      _id: req.params.bookmarkId,
      user: req.userId
    }).then(bookmark => {
      // Update bookmark count of the parent folder
      if (bookmark?.parentFolder)
        Folder.updateOne(
          { _id: bookmark.parentFolder },
          { $inc: { bookmarkCount: -1 } }
        ).then(folder => folder);
    });

    res.json({
      message: "Bookmark delete queued."
    });
  } catch (error) {
    console.warn("Delete bookmark error: ", error.message);
    next(error);
  }
};
