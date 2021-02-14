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
  deleteBookmark
} = require("./routes/bookmark/bookmark.controller.js");
const {
  getSidebarFolders,
  getFolderContents
} = require("./routes/views/all.view.js");

// User routes
router.post("/user/auth", auth, authenticate);
router.post("/user/register", register);
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

// Views routes
router.get("/views/sidebar", auth, getSidebarFolders);
router.get("/views/contents/:folderId", auth, getFolderContents);

module.exports = router;
