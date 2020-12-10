const nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const mailTemperature = (dataObject) =>
  new Promise((resolve, reject) => {
    const mailOptions = {
      from: "sicaklikbotu@gmail.com",
      to: dataObject.mails.toString(),
      subject: `Temperature`,
      html: `<h1>Location : ${dataObject.location}</h1><br/><h1>Date : ${dataObject.date}</h1><br/><h1>Temperature : ${dataObject.temperature}°C</h1><br/><h1>Humidity : ${dataObject.humidity}%</h1><br/>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });

module.exports = { mailTemperature };
