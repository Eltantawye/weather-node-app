const request = require("request");

const geoCode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZWx0YW50YXd5IiwiYSI6ImNqdDluMWJrcjAyZnQ0YXBjZHUyam12d3EifQ.RgWeCUi19FYE67_KRs3vgA`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb("cannot fined geolocation service !");
    } else if (body.features.length === 0) {
      cb("unable to find location try another search !");
    } else {
      cb(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geoCode;
