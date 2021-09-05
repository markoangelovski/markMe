// Model imports
const Folder = require("../folder/folder.model.js");
const Bookmark = require("../bookmark/bookmark.model.js");

// Helper imports
const { getMeta } = require("../bookmark/bookmark.helpers.js");
const { urlRgx } = require("../../../constants/constants.js");

// desc: Fetch all folders and bookmarks for Sidebar (folders and bookmarks without Parent Folder)
// GET /views/sidebar
exports.getSidebarFolders = async (req, res, next) => {
  try {
    // Find all folders and bookmarks without a parent folder property
    const [folders, bookmarks] = await Promise.all([
      Folder.find({
        user: req.userId,
        parentFolder: { $exists: false }
      }).select("-user -__v"),
      Bookmark.find({
        user: req.userId,
        parentFolder: { $exists: false }
      }).select("-user -__v")
    ]);

    res.json({
      message: "Folders successfully fetched.",
      folders,
      bookmarks
    });
  } catch (error) {
    console.warn("Get Sidebar folders error: ", error.message);
    next(error);
  }
};

// desc: Fetch all child folders and bookmars of a single folder by folderPath
// GET /views/contents?path=folderPath
exports.getFolderContentsByPath = async (req, res, next) => {
  try {
    // Fetch requested folder

    const folder = await Folder.findOne({
      path: decodeURIComponent(req.query.path),
      user: req.userId
    }).select("-user -__v");

    // Fetch chlidren folders and bookmarks of the requested folder
    const [folders, bookmarks] = await Promise.all([
      Folder.find({
        user: req.userId,
        parentFolder: folder._id
      }).select("-user -__v"),
      Bookmark.find({
        user: req.userId,
        parentFolder: folder._id
      }).select("-user -__v")
    ]);

    res.json({
      message: "Folder contents successfully fetched.",
      folder: {
        ...folder._doc,
        folders,
        bookmarks
      }
    });
  } catch (error) {
    console.warn("Get Folder contents error: ", error.message);
    next(error);
  }
};

// desc: Fetch all child folders and bookmars of a single folder
// GET /views/contents/:folderId
exports.getFolderContents = async (req, res, next) => {
  try {
    // Fetch requested folder and all chlidren folders and bookmarks
    const [folderRaw, folders, bookmarks] = await Promise.all([
      Folder.findOne({
        _id: req.params.folderId,
        user: req.userId
      }).select("-user -__v"),
      Folder.find({
        user: req.userId,
        parentFolder: req.params.folderId
      }).select("-user -__v"),
      Bookmark.find({
        user: req.userId,
        parentFolder: req.params.folderId
      }).select("-user -__v")
    ]);

    // Destructuring found folder returned extra junk from mongoose. Parse.stringify returns only the folder object.
    const folder = JSON.parse(JSON.stringify(folderRaw));

    res.json({
      message: "Folder contents successfully fetched.",
      folder: {
        ...folder,
        folders,
        bookmarks
      }
    });
  } catch (error) {
    console.warn("Get Folder contents error: ", error.message);
    next(error);
  }
};

// desc: Fetch all child folders of a single folder
// GET /views/contents/:folderId/sub-folders
exports.getFolderSubFolders = async (req, res, next) => {
  try {
    // Fetch all chlidren folders of requested folder
    const folders = await Folder.find({
      user: req.userId,
      parentFolder: req.params.folderId
    }).select("-user -__v");

    res.json({
      message: "Sub-folder successfully fetched.",
      folders
    });
  } catch (error) {
    console.warn("Get Sub-folders error: ", error.message);
    next(error);
  }
};

// desc: Fetchs metadata for a bookmark preview while creating a new bookmark.
// GET /views/meta?url=https://www.website.com
exports.getBookmarkMetadata = async (req, res, next) => {
  try {
    if (!urlRgx.test(req.query.url)) {
      res.status(422);
      return next({
        message: `Invalid URL format.`
      });
    }

    // Fetch Bookmark's metadata
    const meta = await getMeta(req.query.url);
    if (meta.keywords) delete meta.keywords;

    res.json({
      message: "Metadata successfully fetched.",
      url: req.query.url,
      meta
    });
  } catch (error) {
    console.warn("Get Bookmark Metadata error: ", error.message);
    next(error);
  }
};
