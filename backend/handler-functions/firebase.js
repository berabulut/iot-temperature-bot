const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const db = admin.database();
const temperature_ref = db.ref("/sicaklik"); 
const location_ref = db.ref("/location");

const fetchTemperature = () => // fetch temperature info of arduino's sensor from firebase
  new Promise((resolve, reject) => {
    temperature_ref
      .once("value", function (snapshot) {
        const data = snapshot.val(); //Data is in JSON format.
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

const fetchLocation = () => // fetch coordinates of arduino module's from firebase
  new Promise((resolve, reject) => {
    location_ref
      .once("value", function (snapshot) {
        const data = snapshot.val(); //Data is in JSON format.
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

module.exports = { fetchTemperature, fetchLocation };
