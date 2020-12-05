const { tweetTemperature } = require("../handler-functions/tweet");
const { fetchTemperature } = require("../handler-functions/firebase");
const { reverseCoordinates } = require("../handler-functions/location");
const dateFormat = require("dateformat");

("use strict");
module.exports.tweet = async function (event, context, callback) {
  Promise.all([reverseCoordinates(), fetchTemperature()])
    .then((value) => {
      const date = dateFormat(new Date());
      const location = value[0];
      const temperature = value[1];
      const text = `${location},  ${date}, Sıcaklık : ${temperature}°C`;
      tweetTemperature(text)
        .then(() => {
          const response = {
            statusCode: 200,
            body: JSON.stringify({
              message: "Tweet başarıyla atıldı",
            }),
          };
          callback(null, response)
        })
        .catch((err) => {
          const response = {
            statusCode: 401,
            body: JSON.stringify({
              message: "Tweet atılamadı " + err,
            }),
          };
          callback(null, response)
        });
    })
    .catch((err) => {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          message: err,
        }),
      };
      callback(null, response)
    });
};
