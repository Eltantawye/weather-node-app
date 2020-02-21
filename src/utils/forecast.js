const request = require("request");

const forecast = (lat, long, cb) => {
  const url = `https://api.darksky.net/forecast/f0ea928393c0dd4c2e93c58fa965a1ad/${long},${lat}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb("Network error");
    } else if (body.error) {
      cb(body.error);
    } else {
      const { temperature, precipProbability } = body.currently;
      cb(
        undefined,
        `it is currently ${temperature} there is a chance of ${precipProbability} to rain !`
      );
    }
  });
};

module.exports = forecast;
