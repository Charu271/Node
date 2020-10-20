const validator = require("validator");

const yargs = require("yargs");
const notes = require("./notes.js");

//Take input from the user
yargs.version("1.1.0");

//Add

yargs.command({
  command: "add",
  describe: "Adding a note!",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

//Remove

yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Lists the notes",
  handler() {
    notes.listNotes();
  },
});

//Read

yargs.command({
  command: "read",
  describe: "read the notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});
//console.log(process.argv);

//console.log(yargs.argv);
yargs.parse();
