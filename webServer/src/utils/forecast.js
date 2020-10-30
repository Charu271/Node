const request = require("request");
const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6849cc02b25192ee34e0ef95aceeadde&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the locaation requested!", undefined);
    } else if (body.error) {
      console.log("Unable to find the loction.Try another search", undefined);
    } else {
      const obj = body.current;
      callback(
        undefined,
        `${obj.weather_descriptions[0]}. The current temprature is ${obj.temperature} and feel like temperature is ${obj.feelslike}. The humidity is ${obj.humidity}%. There are ${obj.precip}% chances of precipitation.`
      );
    }
  });
};
module.exports = forecast;
