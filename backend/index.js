const { tweetTemperature } = require("./tweet");
const { mailTemperature } = require("./mail");
const { fetchTemperature } = require("./firebase");

fetchTemperature()
.then((value) => {
  tweetTemperature(value);
  mailTemperature(value);
});
