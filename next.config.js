const { client } = require("./config");

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: client
};
