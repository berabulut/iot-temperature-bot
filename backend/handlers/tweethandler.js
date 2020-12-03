"use strict";

const { tweetTemperature } = require("../handler-functions/tweet");
const { fetchTemperature } = require("../handler-functions/firebase");

module.exports.tweet = async function (event, context, callback) {
  let response = {};
  const promise = new Promise(function (resolve, reject) {
    fetchTemperature()
      .then((value) => {
        tweetTemperature(value)
        .then((val) => {
          response = {
            statusCode: 200,
            body: JSON.stringify({
              message: "tweet atildi " + val,
              input: event,
            }),
          };
          resolve(response);
        })
        .catch((err) => {
          response = {
            statusCode: 401,
            body: JSON.stringify({
              message: "tweet atilamadi " + err,
              input: event,
            }),
          };
          reject(response);
        })
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



// module.exports.tweet = async (event) => {
//   fetchTemperature()
//     .then((value) => {
//       tweetTemperature(value);
//       return {
//         statusCode: 200,
//         body: JSON.stringify(
//           {
//             message: value,
//             input: event,
//           },
//           null,
//           2
//         ),
//       };
//     })
//     .catch((err) => {
//       return {
//         statusCode: 400,
//         body: JSON.stringify(
//           {
//             message: err,
//             input: event,
//           },
//           null,
//           2
//         ),
//       };
//     });
// };
