// consts to make app run
const fs = require("fs");
const path = require("path");

// ////////////////////////////
// function to throw error if it is not working and to continue to make new notes
// ////////////////////////////

function db(id, notesArray) {
  const trashBin = id;
  for (let i = 0; i < notesArray.length; i++) {
    if (trashBin === notesArray[i].id) {
      notesArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2),
        (error) => {
          if (error) {
            throw error;
          }
        }
      );
    }
  }
}

// ////////////////////////////
// function that pushes notes to database and allows the information to be displayed
// ////////////////////////////

function newNote(body, notesArray) {
  const formNote = body;
  notesArray.push(formNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return formNote;
}

// export to make app function
module.exports = { db, newNote };
