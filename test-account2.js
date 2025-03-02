require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");

async function testAccount2() {
  try {
    console.log('Testing Account 2 credentials...');
    
    // Log environment variables (redacted)
    console.log('Account 2 variables present:', {
      API_KEY: process.env.ACCOUNT2_API_KEY ? '✓' : '✗',
      API_KEY_SECRET: process.env.ACCOUNT2_API_KEY_SECRET ? '✓' : '✗',
      ACCESS_TOKEN: process.env.ACCOUNT2_ACCESS_TOKEN ? '✓' : '✗',
      ACCESS_TOKEN_SECRET: process.env.ACCOUNT2_ACCESS_TOKEN_SECRET ? '✓' : '✗'
    });

    const client = new TwitterApi({
      appKey: process.env.ACCOUNT2_API_KEY,
      appSecret: process.env.ACCOUNT2_API_KEY_SECRET,
      accessToken: process.env.ACCOUNT2_ACCESS_TOKEN,
      accessSecret: process.env.ACCOUNT2_ACCESS_TOKEN_SECRET,
    });

    // Try to verify credentials first
    console.log('Verifying credentials...');
    const me = await client.v2.me();
    console.log('Credentials verified, user ID:', me.data.id);
    
    // Try to post a tweet
    console.log('Attempting to post tweet...');
    const rwClient = client.readWrite;
    const tweet = await rwClient.v2.tweet("Test tweet " + Date.now());
    console.log('Tweet posted successfully:', tweet);
    
  } catch (error) {
    console.error('Test failed:', error);
    if (error.data) {
      console.error('Error details:', error.data);
    }
    process.exit(1);
  }
}

testAccount2();