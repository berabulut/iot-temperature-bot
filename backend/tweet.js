const Twitter = require("twitter");
require("dotenv").config();

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const tweetTemperature = (temperature) => {
  client.post(
    "statuses/update",
    { status: `Sicaklik : ${temperature}` },
    function (error) {
      if (!error) {
        console.log("tweet atildi");
      } else {
        console.log("tweet atilamadi : ", error);
      }
    }
  );
};

module.exports = { tweetTemperature };
