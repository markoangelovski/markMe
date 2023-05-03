const mongoose = require("mongoose");

const Bookmark = new mongoose.Schema(
  {
    url: { type: String, required: true },
    user: { type: mongoose.ObjectId, ref: "User", required: true },
    title: String,
    description: String,
    star: Boolean, // Starred Bookmarks are displayed on the homepage
    likes: Number, // Number of likes is used for sorting
    noFavicon: Boolean, // Marks a Bookmark to not display the favicon in the frontend, used to not trigger Heroku website loads
    parentFolder: { type: mongoose.ObjectId, ref: "Folder" },
    parentFolderPath: String,
    meta: Object,
    hitCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", Bookmark);
