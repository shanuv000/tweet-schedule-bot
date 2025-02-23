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

// Schedule a job to run every 30 seconds
// schedule.scheduleJob("*/30 * * * * *", postScheduledTweet);

// Schedule the job to run every 3 hours
schedule.scheduleJob("0 */3 * * *", postScheduledTweet);

console.log("Tweet scheduler running. Tweets will be posted every 3 hours.");
console.log('Job executed at:', new Date().toLocaleTimeString());

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
