"use strict";
const { getNumberOfUsers, createNewUser } = require("../handler-functions/firebase");

module.exports.createUser = async (event, context, callback) => {
  const promise = new Promise((resolve, reject) => {
    getNumberOfUsers()
      .then((number) => {
		const userData = JSON.parse(event.body);
		if(userData.email === undefined || userData.password === undefined) {
			const response = {
                statusCode: 400,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  message: "Wrong parameters passed!",
                }),
              };
			reject(response)
		}
        createNewUser(userData.email, userData.password, number)
          .then((status) => {
            if (status === true) {
              const response = {
                statusCode: 201,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  message: "User created successfuly!",
                }),
              };
              resolve(response);
            } else {
              const response = {
                statusCode: 200,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  message: "You have an account with this email already!",
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
              },
              body: JSON.stringify({
                message: err + " ..Something is wrong with db!",
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
          },
          body: JSON.stringify({
            message: err + " ..Something is wrong with db!",
          }),
        };
        reject(response);
      });
  });
  return promise;
};
