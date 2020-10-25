const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast.js");
if (process.argv[2] === undefined || process.argv[2] === "") {
  console.log("Enter some location");
} else {
  geoCode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastdata);
    });
  });
}
