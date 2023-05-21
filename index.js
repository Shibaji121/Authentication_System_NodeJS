const express = require("express");
require("dotenv").config();
const env = require("./config/environment");
const app = express();
const port = env.port;

// To parse incoming requests
app.use(express.urlencoded({ extended: false }));

app.listen(port, function (error) {
  if (error) {
    console.log("Error Occured :", error);
  }
  console.log("Express Server Starts on : ", port);
});
