const request = require("request");
const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiY2hhcnUyNzEiLCJhIjoiY2tiZXMxbnA3MG92azJ5bDlkanIyMzVuZiJ9.gix_xkzsIloXF3fC0It1bw&limit=1";
  request({ url, json: true }, function (error, { body }) {
    if (error) {
      callback("Unable to connect to the location service!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find the location.Try another search!", undefined);
    } else {
      const obj = body.features[0].center;
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
