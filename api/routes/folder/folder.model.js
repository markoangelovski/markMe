const mongoose = require("mongoose");

const Folder = new mongoose.Schema(
  {
    user: { type: mongoose.ObjectId, ref: "User", required: true },
    title: String,
    description: String,
    parentFolder: {
      type: mongoose.ObjectId,
      ref: "Folder"
    },
    folderCount: Number,
    bookmarkCount: Number
  },
  { timestamps: true }
);

Folder.pre("deleteOne", async function () {
  const model = this.model;
  const { _id } = this.getFilter();

  // Update folder count of the parent folder
  model.findOne({ _id }).then(folder => {
    if (folder.parentFolder)
      model
        .updateOne({ _id: folder.parentFolder }, { $inc: { folderCount: -1 } })
        .then(res => res);
  });

  const foldersToDelete = [];

  // Recursive delete of of child folders
  // TODO: delete child bookmarks
  function deleteRecursive(id, model) {
    model
      .find({ parentFolder: id })
      .select("_id")
      .then(res => {
        if (res.length) {
          const folderIds = res.map(item => item._id);
          foldersToDelete.push(...folderIds);
          folderIds.forEach(folderId => deleteRecursive(folderId, model));
        } else {
          model.deleteMany({ _id: { $in: foldersToDelete } }).then(res => res);
        }
      });
  }
  deleteRecursive(_id, model);
});

const ViewSidebarFolder = new mongoose.Schema(
  {
    user: { type: mongoose.ObjectId, ref: "User", required: true },
    folders: Array
  },
  { timestamps: true }
);

module.exports = mongoose.model("Folder", Folder);
module.exports.ViewSidebarFolder = mongoose.model(
  "ViewSidebarFolder",
  ViewSidebarFolder
);