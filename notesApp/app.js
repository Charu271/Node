//Importing a built-in module

// const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is Charu");
// fs.appendFileSync("notes.txt", "I am in Chitkara University");

//Importing a js file
const add = require("./sample.js");
console.log(add(7, 8));

const getNotes = require("./notes.js");
console.log(getNotes());
