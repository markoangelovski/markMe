const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: String,
    password: String,
    avatar: String,
    role: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
