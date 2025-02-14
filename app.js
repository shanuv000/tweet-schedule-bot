// Load environment variables from .env file
require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

// Initialize Twitter client
const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

// Create a client instance with read-write permissions
const rwClient = client.readWrite;

/**
 * Posts a tweet to Twitter
 * @param {string} tweetText - The text content of the tweet to post
 * @returns {Promise<Object>} The response from Twitter API containing tweet details
 * @throws {Error} If the tweet posting fails
 */
async function postTweet(tweetText) {
  try {
    // Attempt to post the tweet using Twitter API v2
    const tweet = await rwClient.v2.tweet(tweetText);
    console.log('Tweet posted successfully:', tweet);
    return tweet;
  } catch (error) {
    console.error('Error posting tweet:', error);
    throw error; // Re-throw the error for handling by the caller
  }
}

// Example usage of the postTweet function
// This is wrapped in an immediately invoked async function (IIFE)
(async () => {
  try {
    // You can replace this with your own tweet text
    await postTweet('This is Vaibhav.');
  } catch (error) {
    console.error('Main execution error:', error);
  }
})();

// Export the postTweet function for use in other files
module.exports = { postTweet };