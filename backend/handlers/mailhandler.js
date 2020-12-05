"use strict";
const { mailTemperature } = require("../handler-functions/mail");
const { fetchTemperature } = require("../handler-functions/firebase");
const { reverseCoordinates } = require("../handler-functions/location");
const dateFormat = require("dateformat");

module.exports.mail = async function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    const values = await Promise.all([
      reverseCoordinates(),
      fetchTemperature(),
    ]);
    try {
      const date = dateFormat(new Date());
      const location = values[0];
      const temperature = values[1];
      const text = `${location},  ${date}, Sıcaklık : ${temperature}°C`;
      await mailTemperature(text);
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: "Tweet başarıyla atıldı",
        }),
      };
      callback(null, response);
    } catch (err) {
      const response = {
        statusCode: 401,
        body: JSON.stringify({
          message: err,
        }),
      };
      callback(null, response);
    }
  } catch (err) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: err,
      }),
    };
    callback(null, response);
  }
};
