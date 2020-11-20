const { tweet } = require("./tweet");
const { mail } = require("./mail");
const { fetchTemperature } = require("./firebase");

let temp = fetchTemperature()
temp.then((val) => {
	console.log(val)
})
console.log(temp)