const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

var db = admin.database();
var ref = db.ref("/sicaklik"); //Set the current directory you are working in

const fetchTemperature = () =>
  new Promise((resolve, reject) => {
    ref.once("value", function (snapshot) {
	  var data = snapshot.val(); //Data is in JSON format.
	  resolve(data)
	})
	.catch((err) => {
		reject(err)
	})
  });

module.exports = { fetchTemperature };

//   .then(() => admin.app().delete())
