"use strict";
const { mailTemperature } = require("../handler-functions/mail");
const dateFormat = require("dateformat");

module.exports.mail = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const promise = new Promise((resolve, reject) => {
    const userData = JSON.parse(event.body);
    const date = dateFormat(new Date());
    const temperature = userData.temperature;
    const humidity = userData.humidity;
    const location = userData.location;
    const mails = userData.mails;
    const dataObject = {
      location: location,
      temperature: temperature,
      mails: mails,
      humidity: humidity,
      date: date
    }
    const text = `${location},  ${date}, Temperature : ${temperature}°C, Humidity : ${humidity}%`;
    mailTemperature(dataObject)
    .then(() => {
        const response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            message: "Mail sent successfuly!",
            statusCode: 200,
          }),
        };
        resolve(response);
      })
      .catch((err) => {
        const response = {
          statusCode: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            value: err,
            message: "Something is wrong",
            statusCode: 500,
          }),
        };
        reject(response);
      });
  });
  return promise;
};
