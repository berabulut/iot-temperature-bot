"use strict";
const { mailTemperature } = require("../handler-functions/mail");
const { fetchTemperature } = require("../handler-functions/firebase");

module.exports.mail = async function (event, context, callback) {
  let response = {};
  const promise = new Promise(function (resolve, reject) {
    fetchTemperature()
      .then((value) => {
        mailTemperature(value);
        response = {
          statusCode: 200,
          body: JSON.stringify({
            message: value,
            input: event,
          }),
        };
        resolve(response);
      })
      .catch((err) => {
        response = {
          statusCode: 500,
          body: JSON.stringify({
            message: err,
            input: event,
          }),
        };
        reject(response);
      });
  });
  return promise;
};
