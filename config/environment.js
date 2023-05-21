const fs = require("fs");
const rfs = require("rotating-file-stream");
const path = require("path");
const logDirectory = path.join(__dirname, "../production_logs");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessingStream = rfs.createStream("file.log", {
  interval: "1d",
  path: logDirectory,
});

const development = {
  name: "development",
  port: process.env.PORT,
};

module.exports = development;
