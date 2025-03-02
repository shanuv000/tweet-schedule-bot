require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");

async function testSingleAccount() {
  try {
    console.log('Testing Twitter API credentials...');
    
    // Log environment variables (redacted)
    console.log('Environment variables present:', {
      API_KEY: process.env.API_KEY ? '✓' : '✗',
      API_KEY_SECRET: process.env.API_KEY_SECRET ? '✓' : '✗',
      ACCESS_TOKEN: process.env.ACCESS_TOKEN ? '✓' : '✗',
      ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET ? '✓' : '✗'
    });

    const client = new TwitterApi({
      appKey: process.env.API_KEY,
      appSecret: process.env.API_KEY_SECRET,
      accessToken: process.env.ACCESS_TOKEN,
      accessSecret: process.env.ACCESS_TOKEN_SECRET,
    });

    // Try to verify credentials
    console.log('Attempting to verify credentials...');
    const rwClient = client.readWrite;
    const testTweet = "Test tweet " + Date.now();
    
    console.log('Attempting to post tweet...');
    const tweet = await rwClient.v2.tweet(testTweet);
    console.log('Tweet posted successfully:', tweet);
    
  } catch (error) {
    console.error('Test failed:', error.message);
    if (error.message === 'Invalid consumer tokens') {
      console.error('This usually means the API key/secret are incorrect or missing');
    }
    process.exit(1);
  }
}

testSingleAccount();