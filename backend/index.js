const { tweetTemperature } = require("./handler-functions/tweet");
const { mailTemperature } = require("./handler-functions/mail");
const { fetchTemperature, fetchLocation, checkIfUserExists, createNewUser, getNumberOfUsers, login} = require("./handler-functions/firebase");
const { reverseCoordinates } = require("./handler-functions/location");
const { resolveContent } = require("nodemailer/lib/shared");

login("tesstx@gmail.com", "1223")
.then((val) => {
  console.log(val)
})
.catch((err) => {
  console.log(err)
})