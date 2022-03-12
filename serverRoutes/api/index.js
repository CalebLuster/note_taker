const router = require("express").Router();
const { newNote, db } = require("../../notes/notes");
const { v4: versionuuid } = require("uuid");
const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let outcome = notes;
  res.json(outcome);
});

router.post("/notes", (req, res) => {
  req.body.id = versionuuid();
  const formNote = newNote(req.body, notes);
  res.json(formNote);
});

router.delete("/notes/:id", (req, res) => {
  const boundry = req.params.id;
  db(boundry, notes);
  res.redirect("");
});

module.exports = router;
