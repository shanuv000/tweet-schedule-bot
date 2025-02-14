const schedule = require("node-schedule");
const { generateMotivationalTweet } = require("./components/gemini-helper");
const { postTweet } = require("./components/twitter-helper");

async function postScheduledTweet() {
  try {
    console.log("Generating motivational tweet...");
    const tweetContent = await generateMotivationalTweet();
    console.log("Posting tweet:", tweetContent);
    await postTweet(tweetContent);
    console.log("Tweet posted successfully!");
  } catch (error) {
    console.error("Scheduling Error:", error);
  }
}

// Schedule tweets at 9:00 AM and 5:00 PM daily
schedule.scheduleJob("0 9,17 * * *", postScheduledTweet);
// every 30 second
// schedule.scheduleJob("*/30 * * * * *", postScheduledTweet);
console.log(
  "Tweet scheduler running. Tweets will be posted at 9 AM and 5 PM daily."
);

// Handle process termination
process.on("SIGINT", () => {
  schedule
    .gracefulShutdown()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Shutdown Error:", err);
      process.exit(1);
    });
});
