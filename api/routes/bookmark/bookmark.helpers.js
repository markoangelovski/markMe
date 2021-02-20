const https = require("https");
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");

exports.getMeta = async url =>
  new Promise((resolve, reject) => {
    https
      .get(url, response => {
        let html = "";

        // called when a data chunk is received.
        response.on("data", chunk => {
          html += chunk;
        });

        // called when the complete response is received.
        response.on("end", () => {
          console.log(`Fetching data for ${url} completed.`);
          const doc = domino.createWindow(html).document;
          const meta = getMetadata(doc, url);
          resolve(meta);
        });
      })
      .on("error", error => {
        console.log("Error fetching metadata: " + error.message);
        reject(error);
      });
  });
