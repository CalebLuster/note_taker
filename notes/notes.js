const fs = require("fs");
const path = require("path");

function db(id, notesArray) {
  const trashBin = id;
  for (let i = 0; i < notesArray.length; i++) {
    if (trashBin === notesArray[i].id) {
    }
  }
}

function newNote(body, notesArray) {
  const formNote = body;
  notesArray.push(formNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return formNote;
}

module.exports = { db, newNote };
