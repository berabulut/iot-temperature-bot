var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	  user: 'sicaklikbotu@gmail.com',
	  pass: 'Sicaklikbotu99.'
	}
  });
  
  var mailOptions = {
	from: 'sicaklikbotu@gmail.com',
	to: 'berabulut@gmail.com',
	subject: 'NODE.JS MAIL DENEME',
	text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
	if (error) {
	  console.log(error);
	} else {
	  console.log('Email sent: ' + info.response);
	}
  });