const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=6849cc02b25192ee34e0ef95aceeadde&query=New%20York&units=f";
const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2hhcnUyNzEiLCJhIjoiY2tiZXMxbnA3MG92azJ5bDlkanIyMzVuZiJ9.gix_xkzsIloXF3fC0It1bw&limit=1";
request({ url: url, json: true }, function (error, response) {
  if (error) {
    console.log("Unable to connect to the network");
  } else if (response.body.error) {
    console.log("Unable to find the loction");
  } else {
    const obj = response.body.current;
    console.log(
      `${obj.weather_descriptions[0]} The current temprature is ${obj.temperature} and feel like temperature is ${obj.feelslike}`
    );
  }
});

request({ url: url2, json: true }, function (error, response) {
  if (error) {
    console.log("Unable to connect to the network");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find the location");
  } else {
    const obj = response.body.features[0].center;
    console.log(`Latitutde ${obj[1]} , Longitude ${obj[0]}`);
  }
});
