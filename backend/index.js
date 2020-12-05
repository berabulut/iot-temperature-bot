const { tweetTemperature } = require("./handler-functions/tweet");
const { mailTemperature } = require("./handler-functions/mail");
const { fetchTemperature, fetchLocation } = require("./handler-functions/firebase");
const { reverseCoordinates } = require("./handler-functions/location");

const promise = Promise.all([reverseCoordinates(), fetchTemperature()])
.then((value) => {
  console.log(value[0])
})