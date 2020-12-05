var nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const mailTemperature = (text) => {
  var mailOptions = {
    from: "sicaklikbotu@gmail.com",
    to: "sicaklikbotu@gmail.com",
    subject: `Sicaklik : ${text}`,
    html: "<h1>Welcome</h1><p>That was easy!</p>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { mailTemperature };
