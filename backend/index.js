const { tweetTemperature } = require("./handler-functions/tweet");
const { mailTemperature } = require("./handler-functions/mail");
const { fetchTemperature } = require("./handler-functions/firebase");

fetchTemperature()
.then((value) => {
  tweetTemperature(value);
  mailTemperature(value);
});
