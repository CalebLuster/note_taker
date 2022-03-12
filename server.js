const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/public"));

app.listen(PORT, function () {
  console.log(`Live server launched on PORT ${PORT}!`);
});

// const readFile = util.promisify(fs.readFile);
// const writeFile = util.promisify(fs.writeFile);

// const path = require("path");
// const fs = require("fs");
// const util = require("util");

// app.get("/api/notes", function (req, res) {
//   readFile("./Develop/db/db.json", "utf8").then(function (data) {
//     notes = [].concat(JSON.parse(data));
//     res.json(notes);
//   });
// });

// app.post("api/notes", function (req, res) {
//   const note = req.body;
//   readFile("./Develop/db/db.json", "utf8")
//     .then(function (data) {
//       const notes = [].concat(JSON.parse(data));
//       note.id = notes.length + 1;
//       notes.push(note);
//       return notes;
//     })
//     .then(function (notes) {
//       writeFile("./Develop/db/db.json", JSON.stringify(notes));
//       res.json(note);
//     });
// });

// app.get("/notes", function (req, res) {
//   res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
// });

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
// });

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
// });
