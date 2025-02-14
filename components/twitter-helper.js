require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

const rwClient = client.readWrite;

async function postTweet(tweetText) {
  try {
    const tweet = await rwClient.v2.tweet(tweetText);
    return tweet;
  } catch (error) {
    console.error("Twitter Error:", error);
    throw error;
  }
}

module.exports = { postTweet };
