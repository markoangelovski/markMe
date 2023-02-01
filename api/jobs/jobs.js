const bcrypt = require("bcryptjs");

const { disconnectDb } = require("../config/db.js");
require("../config/db.js");

const User = require("../routes/user/user.model.js");

(async () => {
  const user = await User.findOne({ role: "admin" });

  if (!user) {
    await User.create({
      username: "temp.user",
      password: await bcrypt.hash("temp.pass", 10),
      role: "admin"
    });

    console.log(
      "Temporary Admin User created.\nClosing Database connection..."
    );
    disconnectDb();
  } else {
    if (user.username === "temp.user") await User.findByIdAndRemove(user._id);

    console.log("Admin User exists, closing Database connection...");
    disconnectDb();
  }
})();
