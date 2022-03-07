const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const app = express();
const PORT = process.env.PORT || 3003;
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

app.get("/api/notes", function (req, res) {});

app.listen(PORT, function () {
  console.log(`Live server launched on PORT ${PORT}!`);
});
