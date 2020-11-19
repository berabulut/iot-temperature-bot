var nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

var mailOptions = {
  from: "sicaklikbotu@gmail.com",
  to: "sicaklikbotu@gmail.com",
  subject: "Sending Email using Node.js",
  html: "<h1>Welcome</h1><p>That was easy!</p>",
};

const mail = () => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { mail }