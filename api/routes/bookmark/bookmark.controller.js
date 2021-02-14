const scrape = require("metadata-parser");

const { urlRgx } = require("../../../constants/constants.js");

// Model imports
const Bookmark = require("./bookmark.model.js");
const Folder = require("../folder/folder.model.js");

// desc: Create new bookmark
// POST /bookmark/new
// payload: JSON body {url: "Boomark url", description: "Bookmark description", parentFolder: "Parent folder _id"}
exports.newBookmark = async (req, res, next) => {
  try {
    // Check if the folder with the same name already exists
    const query = { url: req.body.url };
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

    // Get bookmark metadata
    scrape(req.body.url).then(meta => {
      // Create a new bookmark
      Bookmark.create({
        url: req.body.url,
        user: req.userId,
        title: req.body.title,
        description: req.body.description,
        parentFolder: req.body.parentFolder,
        meta: meta.openGraph
      }).then(bookmark => {
        // Update the bookmark count of the parent folder
        if (bookmark.parentFolder)
          Bookmark.countDocuments({
            parentFolder: bookmark.parentFolder
          }).then(bookmarkCount =>
            Folder.updateOne(
              { _id: bookmark.parentFolder },
              { $set: { bookmarkCount } }
            ).then(res => res)
          );
      });
    });

    res.status(201).json({
      message: "New bookmark creation queued."
    });
  } catch (error) {
    console.warn("New bookmakr error: ", error.message);
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
    Bookmark.deleteOne({ _id: req.params.bookmarkId, user: req.userId }).then(
      res => res
    );

    res.json({
      message: "Bookmark delete queued."
    });
  } catch (error) {
    console.warn("Delete bookmark error: ", error.message);
    next(error);
  }
};
