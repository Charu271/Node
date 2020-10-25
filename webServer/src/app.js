const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
console.log(__dirname);
console.log(__filename);
const publicDirectoryPath = path.join(__dirname, "../public");
const viewDirectory = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");
app.set("views", viewDirectory);
hbs.registerPartials(partialPath);
app.get("", (req, res) => {
  res.render("index", {
    title: "Index",
    name: "Charu",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Charu",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Charu",
    message: "Please help the community",
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    error: "Help article not found",
    name: "Charu",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    error: "404 page",
    name: "Charu",
  });
});
console.log(publicDirectoryPath);
app.get("/weather", (req, res) => {
  res.send({
    location: "Bassi",
    forecast: "Sunny ",
  });
});
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
