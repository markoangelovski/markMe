const { client, basePath } = require("./config");

module.exports = {
  assetPrefix: client // Use the CDN in production and localhost for development.
  // basePath, // Set to /markMe in order to be hosted on GitHub Pages subfolder, without custom domain
};
