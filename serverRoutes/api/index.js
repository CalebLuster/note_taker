const router = require('express').Router();
const {newNote, db} = require('../../notes/notes');
const { v4: uuidvd } = require('uuid');
const {notes} = require('../../db/db.json');


