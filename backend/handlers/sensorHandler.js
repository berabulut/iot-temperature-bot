"use strict";
const { getSensorData } = require("../handler-functions/firebase");

module.exports.sensorData = async (event, context, callback) => {
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
    getSensorData(userData.deviceID)
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
              records: records,
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
              records: null,
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
