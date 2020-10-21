const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=6849cc02b25192ee34e0ef95aceeadde&query=New%20York&units=f";
request({ url: url, json: true }, function (error, response) {
  const obj = response.body.current;
  console.log(
    `${obj.weather_descriptions[0]} The current temprature is ${obj.temperature} and feel like temperature is ${obj.feelslike}`
  );
});
