const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=6849cc02b25192ee34e0ef95aceeadde&query=40,75&units=f";
const request = http.request(url, (response) => {
  data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });
  response.on("end", () => {
    console.log(JSON.parse(data));
  });
});
request.end();
