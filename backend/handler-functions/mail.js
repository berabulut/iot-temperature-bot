const nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const mailTemperature = (text, mails) =>
  new Promise((resolve, reject) => {
    const mailOptions = {
      from: "sicaklikbotu@gmail.com",
      to: mails.toString(),
      subject: `Temperature`,
      html: `<h1>${text}</h1>`,
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
