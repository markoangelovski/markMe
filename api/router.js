const router = require("express").Router();

const { auth } = require("./middlewares/auth.js");

const {
  register,
  login,
  logout,
  authenticate
} = require("./routes/user/user.controller.js");
const {
  newFolder,
  updateFolder,
  deleteFolder
} = require("./routes/folder/folder.controller.js");
const {
  newBookmark,
  updateBookmark,
  deleteBookmark,
  bookmarkStats
} = require("./routes/bookmark/bookmark.controller.js");
const {
  getSidebarFolders,
  getFolderContents,
  getFolderContentsByPath,
  getFolderSubFolders,
  getBookmarkMetadata
} = require("./routes/views/views.controller.js");
const {
  getSearchData,
  getSuggestionData
} = require("./routes/search/search.controller.js");

// User routes
router.post("/user/auth", auth, authenticate);
router.post("/user/register", auth, register);
router.post("/user/login", login);
router.post("/user/logout", auth, logout);

// Folder routes
router.post("/folder/new", auth, newFolder);
router.patch("/folder/update/:folderId", auth, updateFolder);
router.delete("/folder/delete/:folderId", auth, deleteFolder);

// Bookmark routes
router.post("/bookmark/new", auth, newBookmark);
router.patch("/bookmark/update/:bookmarkId", auth, updateBookmark);
router.delete("/bookmark/delete/:bookmarkId", auth, deleteBookmark);
router.post("/bookmark/stats", auth, bookmarkStats);

// Views routes
router.get("/views/sidebar", auth, getSidebarFolders);
router.get("/views/contents", auth, getFolderContentsByPath);
// router.get("/views/contents/:folderId", auth, getFolderContents); // DEPRECATED
router.get("/views/contents/:folderId/sub-folders", auth, getFolderSubFolders);
router.get("/views/meta", auth, getBookmarkMetadata);

// Search routes
router.get("/search/content", auth, getSearchData);
router.get("/search/suggestion", auth, getSuggestionData);

module.exports = router;
