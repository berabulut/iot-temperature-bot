const axios = require('axios');
const { fetchLocation } = require("./firebase");
require("dotenv").config();

const reverseCoordinates = () => new Promise((resolve, reject) => {
	fetchLocation()
	.then((value) => {
		axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${value.latitude},${value.longitude}&key=${process.env.GOOGLE_API_KEY}`)
		.then((response) => {
			const location = response.data.plus_code.compound_code;
			resolve(location.slice(8, location.length));
		})
		.catch((err) => {
			reject(err);
		})
	})
})

module.exports = {reverseCoordinates}