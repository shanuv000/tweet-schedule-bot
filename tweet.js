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

// twitterAccounts.forEach((account) => {
//   schedule.scheduleJob("*/30 * * * * *", () => postScheduledTweet(account));
// });
const nextTweetTime = new Date();
nextTweetTime.setMinutes(0, 0, 0); // Set minutes and seconds to 0
const currentHour = nextTweetTime.getHours();
const hoursUntilNext = 3 - (currentHour % 3);
nextTweetTime.setHours(
  currentHour + (hoursUntilNext === 0 ? 3 : hoursUntilNext)
);
console.log(
  `Tweet scheduler running. Next tweets will be posted at ${nextTweetTime.toLocaleTimeString()} and every 3 hours thereafter for each account.`
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
