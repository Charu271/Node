const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=6849cc02b25192ee34e0ef95aceeadde&query=New%20York";
request({ url: url }, function (error, response) {
  const obj = JSON.parse(response.body).current;
  console.log(
    `The current temprature is ${obj.temperature} and feel like temperature is ${obj.feelslike}`
  );
});
