const Folder,
  { ViewSidebarFolder } = require("./folder.model");

const addViewSidebarFolder = req => {
  Folder.find({
    user: req.userId,
    parentFolder: { $exists: false }
  });
};
