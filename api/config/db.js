const mongoose = require("mongoose");

const db =
  process.env.NODE_ENV === "development"
    ? process.env.DB_URL_DEV
    : process.env.DB_URL;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () =>
    console.log(
      "MongoDB connected to: ",
      mongoose.connections[0].host.split(".")[0]
    )
);
