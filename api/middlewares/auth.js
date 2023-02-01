const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const bearerToken = req.cookies.access_token;

    const failedAuth = { message: "Unauthorized", error: "ERR_AUTH_FAILED" };

    if (!bearerToken) {
      res.status(401);
      return next(failedAuth);
    }

    const user = jwt.verify(bearerToken.split(" ")[1], process.env.USER_AUTH);

    if (user) {
      req.userId = user.userId;
      next();
    } else {
      next(failedAuth);
    }
  } catch (error) {
    console.warn("Auth error: ", error.message);
    next(error);
  }
};
