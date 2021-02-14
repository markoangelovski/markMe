const mongoose = require("mongoose");

const Folder = require("../folder/folder.model.js");

const Bookmark = new mongoose.Schema(
  {
    url: { type: String, required: true },
    user: { type: mongoose.ObjectId, ref: "User", required: true },
    title: String,
    description: String,
    parentFolder: { type: mongoose.ObjectId, ref: "Folder" },
    meta: Object
  },
  { timestamps: true }
);

Bookmark.pre("deleteOne", async function () {
  const { _id } = this.getFilter();

  // Update bookmark count of the parent folder
  this.model.findOne({ _id }).then(bookmark => {
    if (bookmark && bookmark.parentFolder)
      Folder.updateOne(
        { _id: bookmark.parentFolder },
        { $inc: { bookmarkCount: -1 } }
      ).then(res => res);
  });
});

module.exports = mongoose.model("Bookmark", Bookmark);
