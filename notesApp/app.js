const validator = require("validator");
const getNotes = require("./notes.js");
console.log(getNotes());
console.log(validator.isEmail("gmail.com"));
console.log(validator.isURL("https:charu.com"));

const chalk = require("chalk");
console.log(chalk.green.bgRed.bold.italic.visible("Success"));
