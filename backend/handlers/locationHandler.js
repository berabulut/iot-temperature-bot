"use strict";
const { reverseCoordinates } = require("../handler-functions/location");

module.exports.location = async (event, context, callback) => {
  const promise = new Promise((resolve, reject) => {
    const userData = JSON.parse(event.body);
    if (userData.deviceID === undefined) {
      const response = {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          message: "Wrong parameters passed!",
          statusCode: 400,
        }),
      };
      reject(response);
    }
    reverseCoordinates(userData.deviceID)
      .then((records) => {
        if (records !== undefined) {
          const response = {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              message: "Successful",
              location: records.location,
              countryCode: records.countryCode,
              statusCode: 200,
            }),
          };
          resolve(response);
        } else {
          const response = {
            statusCode: 403,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              message: "DB records are empty",
              location: null,
              countryCode: null,
              statusCode: 403,
            }),
          };
          resolve(response);
        }
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
