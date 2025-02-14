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

// Schedule the job to run at 9 AM, 1 PM, 5 PM, and 7 PM every day
// schedule.scheduleJob("0 0 9,13,17,19 * * *", postScheduledTweet);
// every 30 second
schedule.scheduleJob("*/30 * * * * *", postScheduledTweet);
console.log(
  "Tweet scheduler running. Tweets will be posted at 9 AM, 1 PM, 5 PM and 7 PM daily."
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
