const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Model imports
const User = require("./user.model.js");

// desc: Check if user is authenticated
// POST /user/auth
exports.authenticate = async (req, res, next) => {
  res.json({ message: "User authenticated." });
};

// desc: Register user
// POST /user/register
// payload: JSON body {username: "John", password: "somePassword"}
exports.register = async (req, res, next) => {
  try {
    let user = await User.findOne({ username: req.body.username });

    if (!user) {
      const password = await bcrypt.hash(req.body.password, 10);

      user = await User.create({
        username: req.body.username,
        password
      });

      if (!user)
        throw new Error("User creation unsuccessfull, please try agan.");

      res.status(201).json({
        message: "User registration completed.",
        user: user.username
      });
    } else {
      res.json({
        message: `Username ${user.username} is aleady taken, please try a different one.`
      });
    }
  } catch (error) {
    console.warn("User register error: ", error.message);
    next(error);
  }
};

// desc: Login user
// POST /user/login
// payload: Authorization header base64 username:password
exports.login = async (req, res, next) => {
  try {
    const authString = Buffer.from(
      req.headers.authorization,
      "base64"
    ).toString("utf-8");

    const user = await User.findOne({ username: authString.split(":")[0] });

    if (user) {
      const password = await bcrypt.compare(
        authString.split(":")[1],
        user.password
      );

      if (!password) {
        res.status(401);
        return next({
          message: "Username and password combo not found."
        });
      }

      const token = jwt.sign(
        {
          userId: user._id
        },
        process.env.USER_AUTH,
        { expiresIn: "7d" }
      );

      res.cookie("access_token", "Bearer " + token, {
        secure: process.env.NODE_ENV !== "development",
        maxAge: 604800000, // 7 days
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "development" ? "Lax" : "None"
      });

      res.json({
        message: "Login successful.",
        user: { username: user.username, avatar: user.avatar }
      });
    } else {
      res.status(422).json({
        message: "Unable to login."
      });
    }
  } catch (error) {
    console.warn("User login error: ", error.message);
    next(error);
  }
};

// desc: Logout user
// POST /user/logout
exports.logout = async (req, res, next) => {
  res.clearCookie("access_token", {
    secure: process.env.NODE_ENV !== "development",
    maxAge: 604800000, // 7 days
    httpOnly: true
  });

  res.json({ message: "Logout successful." });
};
