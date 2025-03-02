require("dotenv").config();
const TwitterHelper = require("./components/twitter-helper");

async function testTwitterAccounts() {
  try {
    // Log all relevant environment variables (redacted)
    console.log('Environment variables present:', {
      // Account 1
      API_KEY: process.env.API_KEY ? '✓' : '✗',
      API_KEY_SECRET: process.env.API_KEY_SECRET ? '✓' : '✗',
      ACCESS_TOKEN: process.env.ACCESS_TOKEN ? '✓' : '✗',
      ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET ? '✓' : '✗',
      // Account 2
      ACCOUNT2_API_KEY: process.env.ACCOUNT2_API_KEY ? '✓' : '✗',
      ACCOUNT2_API_KEY_SECRET: process.env.ACCOUNT2_API_KEY_SECRET ? '✓' : '✗',
      ACCOUNT2_ACCESS_TOKEN: process.env.ACCOUNT2_ACCESS_TOKEN ? '✓' : '✗',
      ACCOUNT2_ACCESS_TOKEN_SECRET: process.env.ACCOUNT2_ACCESS_TOKEN_SECRET ? '✓' : '✗'
    });

    // The TwitterHelper constructor will automatically test the initialization
    const twitterHelper = require("./components/twitter-helper");
    
    // Try to post a test tweet to verify credentials
    const testTweet = "Test tweet " + Date.now();
    
    // Test first account
    console.log("\nTesting account1...");
    await twitterHelper.postTweet("account1", testTweet);
    console.log("Account1 test successful!");
    
    // Test second account
    console.log("\nTesting account2...");
    await twitterHelper.postTweet("account2", testTweet);
    console.log("Account2 test successful!");
    
  } catch (error) {
    console.error("Test failed:", error.message);
    if (error.message.includes('Invalid consumer tokens')) {
      console.error('This usually means one or more API keys/secrets are incorrect or missing');
    }
    process.exit(1);
  }
}

testTwitterAccounts();
