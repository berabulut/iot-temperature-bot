"use strict";
const {
  getNumberOfUsers,
  createNewUser,
  login,
} = require("../handler-functions/firebase");

module.exports.createUser = async (event, context, callback) => {
  const promise = new Promise((resolve, reject) => {
    getNumberOfUsers()
      .then((number) => {
        const userData = JSON.parse(event.body);
        if (userData.email === undefined || userData.password === undefined || userData.deviceID === undefined) {
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
        createNewUser(userData.email, userData.password, userData.deviceID, number)
          .then((status) => {
            if (status === true) {
              const response = {
                statusCode: 201,
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Credentials": true,
                },
                body: JSON.stringify({
                  message: "User created successfuly!",
                  statusCode: 201,
                }),
              };
              resolve(response);
            } else {
              const response = {
                statusCode: 200,
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Credentials": true,
                },
                body: JSON.stringify({
                  message: "You have an account with this email already!",
                  statusCode: 200,
                }),
              };
              resolve(response);
            }
          })
          .catch((err) => {
            const response = {
              statusCode: 503,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
              },
              body: JSON.stringify({
                message: err + " ..Something is wrong with db!",
                statusCode: 503,
              }),
            };
            reject(response);
          });
      })
      .catch((err) => {
        const response = {
          statusCode: 503,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify({
            message: err + " ..Something is wrong with db!",
            statusCode: 503,
          }),
        };
        reject(response);
      });
  });
  return promise;
};

module.exports.login = async (event, context, callback) => {
  const promise = new Promise((resolve, reject) => {
    const userData = JSON.parse(event.body);
    if (userData.email === undefined || userData.password === undefined) {
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
    login(userData.email, userData.password)
      .then((value) => {
        if(value.status === true) {
          const response = {
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              message: value.status,
              deviceID: value.deviceID,
              statusCode: 200,
            }),
          };
          resolve(response);
        }
        else {
          const response = {
            statusCode: 403,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({
              message: value.status,
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
