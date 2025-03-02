const schedule = require("node-schedule");
const geminiHelper = require("./components/gemini-helper");
const twitterHelper = require("./components/twitter-helper");
const twitterAccounts = require("./config/twitter-accounts");

async function postScheduledTweet(account) {
  try {
    console.log(`Generating tweet for account: ${account.name}...`);
    const tweetContent = await geminiHelper.generateTweet(
      account.promptCategories
    );
    console.log(`Posting tweet for ${account.name}:`, tweetContent);
    await twitterHelper.postTweet(account.id, tweetContent);
    console.log(`Tweet posted successfully for ${account.name}!`);
  } catch (error) {
    console.error(`Scheduling Error for ${account.name}:`, error);
  }
}

// Schedule tweets for each account
twitterAccounts.forEach((account) => {
  schedule.scheduleJob("0 */3 * * *", () => postScheduledTweet(account));
});
// twitterAccounts.forEach(account => {
//   schedule.scheduleJob("*/30 * * * * *", () => postScheduledTweet(account));
// });
console.log(
  "Tweet scheduler running. Tweets will be posted every 3 hours for each account."
);

process.on("SIGINT", () => {
  schedule
    .gracefulShutdown()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Shutdown Error:", err);
      process.exit(1);
    });
});
