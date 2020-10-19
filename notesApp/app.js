const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

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
  handler: function (argv) {
    console.log("Adding a note!", argv.title, argv.body);
  },
});

//Remove

yargs.command({
  command: "remove",
  describe: "Removes a note",
  handler: function () {
    console.log("Removing a note");
  },
});

yargs.command({
  command: "list",
  describe: "Lists the notes",
  handler: function () {
    console.log("Listing notes");
  },
});

//Read

yargs.command({
  command: "read",
  describe: "read the notes",
  handler: function () {
    console.log("Reading notes");
  },
});
//console.log(process.argv);

//console.log(yargs.argv);
yargs.parse();
