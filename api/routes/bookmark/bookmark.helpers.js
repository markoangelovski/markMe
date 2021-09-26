const https = require("https");
const { Buffer } = require("buffer");
const axios = require("axios");
const { getMetadata } = require("page-metadata-parser");
const domino = require("domino");

exports.getMeta = async url =>
  axios(url)
    .then(res => {
      const doc = domino.createWindow(res.data).document;
      const meta = getMetadata(doc, url);
      if (!meta.icon) return meta;

      return getImgBase64(meta.icon)
        .then(base64 => ({
          ...meta,
          icon64: "data:image/jpeg;base64," + base64
        }))
        .catch(() => meta); // If converting the favicon to base64 fails, return metadata.
    })
    .catch(error => console.warn("Error fetching metadata: " + error.message));

const getImgBase64 = url =>
  axios
    .get(url, {
      responseType: "arraybuffer"
    })
    .then(response => Buffer.from(response.data, "binary").toString("base64"));

// exports.getMeta = async url =>
// new Promise((resolve, reject) => {
//   https
//     .get(url, response => {
//       let html = "";

//       // called when a data chunk is received.
//       response.on("data", chunk => {
//         html += chunk;
//       });

//       // called when the complete response is received.
//       response.on("end", () => {
//         console.log(`Fetching data for ${url} completed.`);
//         const doc = domino.createWindow(html).document;
//         const meta = getMetadata(doc, url);
//         resolve(meta);
//       });
//     })
//     .on("error", error => {
//       console.log("Error fetching metadata: " + error.message);
//       reject(error);
//     });
// });
