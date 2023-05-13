// Model imports
const Folder = require("../folder/folder.model.js");
const Bookmark = require("../bookmark/bookmark.model.js");

// Helper imports
const { getMeta } = require("../bookmark/bookmark.helpers.js");
const { urlRgx, sevenDaysAgo } = require("../../../constants/constants.js");

// desc: Fetch all folders and bookmarks for Sidebar (folders and bookmarks without Parent Folder)
// GET /views/sidebar
exports.getSidebarFolders = async (req, res, next) => {
  try {
    const [
      rootFolders,
      rootBookmarks,
      totalFolders,
      totalBookmarks,
      newFolders,
      newBookmarks,
      recentFolders,
      recentBookmarks,
      popularFolders,
      popularBookmarks
    ] = await Promise.all([
      Folder.find({
        user: req.userId,
        parentFolder: { $exists: false } // Find all root folders
      }).select("-user -__v"),
      Bookmark.find({
        user: req.userId,
        parentFolder: { $exists: false } // Find all root bookmarks
      }).select("-user -__v"),
      Folder.countDocuments({
        // Count total number of folders
        user: req.userId
      }),
      Bookmark.countDocuments({
        // Count total number of folders
        user: req.userId
      }),
      Folder.countDocuments({
        // Count number of recent folders
        user: req.userId,
        createdAt: { $gte: new Date(sevenDaysAgo) }
      }),
      Bookmark.countDocuments({
        // Count number of recent bookmarks
        user: req.userId,
        createdAt: { $gte: new Date(sevenDaysAgo) }
      }),
      Folder.find(
        {
          user: req.userId
        },
        null,
        { limit: 10 } // Find 10 most recent folders
      )
        .sort("-createdAt")
        .select("-user -__v"),
      Bookmark.find(
        {
          user: req.userId
        },
        null,
        { limit: 10 } // Find 10 most recent bookmarks
      )
        .sort("-createdAt")
        .select("-user -__v"),
      Folder.find(
        {
          user: req.userId
        },
        null,
        { limit: 10 } // Find 10 most visited folders sorted by the newest visited folder
      )
        .sort("-hitCount -updatedAt")
        .select("-user -__v"),
      Bookmark.find(
        {
          user: req.userId
        },
        null,
        { limit: 10 } // Find 10 most visited bookmarks sorted by the newest visited bookmark
      )
        .sort("-hitCount -updatedAt")
        .select("-user -__v")
    ]);

    res.json({
      message: "Folders successfully fetched.",
      rootFolders,
      rootBookmarks,
      totalFolders,
      totalBookmarks,
      newFolders,
      newBookmarks,
      recentFolders,
      recentBookmarks,
      popularFolders,
      popularBookmarks
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

    if (!folder) {
      res.status(404).json({
        message: `Folder with path ${req.query.path} not found.`,
        folder: {}
      });
    }

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

    Folder.updateOne({ _id: folder._id }, { $inc: { hitCount: 1 } }).then(
      (res) => res
    );
  } catch (error) {
    console.warn("Get Folder contents error: ", error.message);
    next(error);
  }
};

// DEPRECATED
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
    const isMetaOk = typeof meta === "object";
    if (isMetaOk && meta.hasOwnProperty("keywords")) delete meta.keywords;
    if (
      isMetaOk &&
      meta.hasOwnProperty("icon64") &&
      Buffer.byteLength(meta.icon64, "utf8") > 20480
    )
      delete meta.icon64; // Deletes the icon64 if its file size is larger than 20KB

    // In some edge cases the url returned from getMeta is not the same as req.query.url. In that case substitute the meta.url with req.query.url
    if (isMetaOk && meta.hasOwnProperty("url") && meta.url !== req.query.url) {
      meta.metaUrl = meta.url;
      meta.url = req.query.url;
    }

    res.json({
      message: "Metadata successfully fetched.",
      meta: isMetaOk ? meta : { url: req.query.url }
    });
  } catch (error) {
    console.warn("Get Bookmark Metadata error: ", error.message);
    next(error);
  }
};
