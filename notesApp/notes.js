const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const notes = loadNotes();
  debugger;
  const duplicate = notes.find((note) => note.title === title);
  if (!duplicate) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note already exists"));
  }
};
const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
const removeNotes = (title) => {
  const notes = loadNotes();
  const match = notes.filter((note) => note.title === title);
  if (match.length === 1) {
    notes.pop(match);
    saveNotes(notes);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};
const listNotes = () => {
  console.log(chalk.blue("Your notes"));
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.blue.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse(" No note found! "));
  }
};
module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
