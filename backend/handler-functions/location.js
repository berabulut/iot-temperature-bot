const axios = require('axios');
const { fetchLocation } = require("./firebase");
require("dotenv").config();

const reverseCoordinates = (deviceID) => new Promise((resolve, reject) => {
	fetchLocation(deviceID)
	.then((value) => {
		axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${value.latitude},${value.longitude}&key=${process.env.GOOGLE_API_KEY}`)
		.then((response) => {
			const location = response.data.plus_code.compound_code;
			const countryCode = response.data.results[0].address_components[5].short_name;
			resolve({
				location: location.slice(8, location.length),
				countryCode: countryCode
			});
		})
		.catch((err) => {
			reject(err);
		}) 
	})
})

module.exports = {reverseCoordinates}