require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");
const twitterAccounts = require("../config/twitter-accounts");

class TwitterHelper {
  constructor() {
    this.clients = new Map();
    this.initializeClients();
  }

  initializeClients() {
    twitterAccounts.forEach((account) => {
      try {
        console.log(`\nInitializing Twitter client for account: ${account.id}`);

        const client = new TwitterApi({
          appKey: account.apiKey,
          appSecret: account.apiKeySecret,
          accessToken: account.accessToken,
          accessSecret: account.accessSecret,
        });

        // Create read-write client and verify credentials
        const rwClient = client.readWrite;
        this.clients.set(account.id, rwClient);
        console.log(`Successfully initialized client for ${account.id}`);
      } catch (error) {
        console.error(
          `Failed to initialize Twitter client for account ${account.id}:`,
          error.message
        );
        throw error;
      }
    });
  }

  async postTweet(accountId, tweetText, retries = 3) {
    try {
      console.log(`Getting client for account: ${accountId}`);
      const client = this.clients.get(accountId);
      if (!client) {
        throw new Error(
          `Twitter client not found for account ID: ${accountId}`
        );
      }
      console.log(`Attempting to post tweet for ${accountId}: "${tweetText}"`);
      const tweet = await client.v2.tweet(tweetText);
      console.log(`Successfully posted tweet for ${accountId}`);
      return tweet;
    } catch (error) {
      console.error(`Twitter Error for account ${accountId}:`, error);
      if (retries > 0) {
        console.log(`Retrying... (${retries} attempts remaining)`);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second before retry
        return this.postTweet(accountId, tweetText, retries - 1);
      }
      throw error;
    }
  }
}

module.exports = new TwitterHelper();
