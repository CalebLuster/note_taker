// api const to make the app run along with paths
const router = require("express").Router();
const { newNote, db } = require("../../notes/notes");
const { v4: versionuuid } = require("uuid");
const { notes } = require("../../db/db.json");
// ////////////////////////////
// function to get notes
//// ////////////////////////////

router.get("/notes", (req, res) => {
  let outcome = notes;
  res.json(outcome);
});

// ////////////////////////////
// function to post notes
// ////////////////////////////

router.post("/notes", (req, res) => {
  req.body.id = versionuuid();
  const formNote = newNote(req.body, notes);
  res.json(formNote);
});

// ////////////////////////////
// function to delete notes for extra credit
// ////////////////////////////

router.delete("/notes/:id", (req, res) => {
  const boundry = req.params.id;
  db(boundry, notes);
  res.redirect("");
});

// export to make page work

module.exports = router;
