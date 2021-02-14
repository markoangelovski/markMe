// Model imports
const Folder = require("../folder/folder.model.js");
const Bookmark = require("../bookmark/bookmark.model.js");

// desc: Fetch all folders and bookmarks for Sidebar (folders and bookmarks without Parent Folder)
// GET /views/sidebar
exports.getSidebarFolders = async (req, res, next) => {
  try {
    // Find all folders and bookmarks without a parent folder property
    const [folders, bookmarks] = await Promise.all([
      Folder.find({
        user: req.userId,
        parentFolder: { $exists: false }
      }),
      Bookmark.find({
        user: req.userId,
        parentFolder: { $exists: false }
      })
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

// desc: Fetch all child folders and bookmars of a single folder
// GET /views/contents/:folderId
exports.getFolderContents = async (req, res, next) => {
  try {
    // Fetch requested folder and all chlidren folders and bookmarks
    const [folderRaw, folders, bookmarks] = await Promise.all([
      Folder.findOne({
        _id: req.params.folderId,
        user: req.userId
      }),
      Folder.find({
        user: req.userId,
        parentFolder: req.params.folderId
      }),
      Bookmark.find({
        user: req.userId,
        parentFolder: req.params.folderId
      })
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
