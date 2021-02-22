const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const dev = process.env.NODE_ENV === "development";
dev && require("dotenv").config();

// Client URL import for CORS whielisting
const config = require("../config");

// Connect to DB
require("./config/db.js");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: config.client,
    credentials: true,
    optionsSuccessStatus: 204
  })
);
if (dev) app.use(require("morgan")("dev"));

const { notFound, serverError } = require("./middlewares/errorHandlers.js");

app.use("/", require("./router"));

app.use(notFound);
app.use(serverError);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Node server started on port: ", PORT));
