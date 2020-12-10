"use strict";

const { tweetTemperature } = require("../handler-functions/tweet");
const dateFormat = require("dateformat");


module.exports.tweet = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const promise = new Promise((resolve, reject) => {
    const userData = JSON.parse(event.body);
    const date = dateFormat(new Date());
    const temperature = userData.temperature;
    const humidity = userData.humidity;
    const location = userData.location;
    const text = `${location},  ${date}, Sıcaklık : ${temperature}°C, Humidity : ${humidity}`;
    tweetTemperature(text)
      .then(() => {
        const response = {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            message: "Tweeted successfuly!",
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
