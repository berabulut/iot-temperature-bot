const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const db = admin.database();

const fetchTemperature = (deviceID) =>   // fetch temperature data from firebase
  new Promise((resolve, reject) => {
    const temperature_ref = db.ref(`/${deviceID}/sensor`);
    temperature_ref
      .once("value", function (snapshot) {
        const data = snapshot.val(); //Data is in JSON format.
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

const fetchLocation = (deviceID) =>
  new Promise((resolve, reject) => {
    const location_ref = db.ref(`/${deviceID}/location`);
    location_ref
      .once("value", function (snapshot) {
        const data = snapshot.val(); //Data is in JSON format.
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

const getUsers = () =>
  new Promise((resolve, reject) => {
    const user_ref = db.ref(`/users`);
    user_ref
      .once("value", (snapshot) => {
        const data = snapshot.val(); //Data is in JSON format.
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

const checkIfUserExists = (email) =>
  new Promise((resolve, reject) => {
    getUsers()
      .then((records) => {
        let check = false;
        records.map((record, key) => {
          if (record.email.trim() === email.trim()) {
            check = true;
          }
        });
        resolve(check);
      })
      .catch((err) => {
        reject(err);
      });
  });

const createNewUser = (email, password, deviceID, recordsLength) =>
  new Promise((resolve, reject) => {
    const create_user_ref = db.ref(`/users/${recordsLength}`);
    checkIfUserExists(email)
      .then((value) => {
        if (value !== true) {
          create_user_ref.set({
            email: email,
            password: password,
            deviceID: deviceID,
          });
          const number_of_users_ref = db.ref(`/`);
          number_of_users_ref.update({
            number_of_users: recordsLength + 1,
          });

          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

const getNumberOfUsers = () =>
  new Promise((resolve, reject) => {
    const number_of_users_ref = db.ref(`/number_of_users`);
    number_of_users_ref
      .once("value", (snapshot) => {
        const data = snapshot.val(); //Data is in JSON format.
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

const login = (email, password) =>
  new Promise((resolve, reject) => {
    getUsers()
      .then((records) => {
        let status = false;
        let deviceID = "";
        if (records !== undefined) {
          records.map((record) => {
            if (record.email === email && record.password === password) {
              status = true;
              deviceID = record.deviceID;
            }
          });
        } else {
          status = false;
        }

        resolve({
          status: status,
          deviceID: deviceID,
        });
      })
      .catch((err) => {
        resolve({
          status: false,
        });
      });
  });

const getSensorData = (deviceID) =>
  new Promise((resolve, reject) => {
    const sensor_ref = db.ref(`/${deviceID}`);
    sensor_ref
      .once("value", (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

module.exports = {
  fetchTemperature,
  fetchLocation,
  checkIfUserExists,
  createNewUser,
  getNumberOfUsers,
  login,
  getSensorData,
};
