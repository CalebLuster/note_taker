const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const app = express();
const PORT = process.env.PORT || 3003;
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/notes", function (req, res) {
  readFile("./Develop/db/db.json", "utf8").then(function (data) {
    notes = [].concat(JSON.parse(data));
    res.json(notes);
  });
});

app.listen(PORT, function () {
  console.log(`Live server launched on PORT ${PORT}!`);
});
