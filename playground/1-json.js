// const book = {
//   title: "Wings of fire",
//   description: "Biography of APJ Abdul Kalam",
// };
// const stringObj = JSON.stringify(book);
// console.log(stringObj);
// const jsonObj = JSON.parse(stringObj);
// console.log(jsonObj.title);
const fs = require("fs");
// fs.writeFileSync("sample.json", stringObj);
const fileObj = fs.readFileSync("sample.json");
const fileString = fileObj.toString();
const fileJson = JSON.parse(fileString);
fileJson.name = "Charu";
fileJson.age = 18;
fs.writeFileSync("sample.json", JSON.stringify(fileJson));
console.log(fileJson);
