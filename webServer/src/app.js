const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");
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
    title: "Weather",
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
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address required",
    });
  }
  geoCode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error: error });
      }
      forecast(latitude, longitude, (error, forecastdata) => {
        if (error) {
          return res.send({ error: error });
        }
        res.send({
          location: location,
          forecast: forecastdata,
          address: req.query.address,
        });
        // console.log(location);
        // console.log(forecastdata);
      });
    }
  );
});
app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send("Search query is required");
  }
  console.log(req.query.search);
  res.send({
    products: [],
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

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
