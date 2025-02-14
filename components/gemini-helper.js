const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
// gemini_helper.js
const prompts = require("../utils/prompts");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 0.9,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 350, // Optimized for short tweets
  responseMimeType: "text/plain",
};

async function generateMotivationalTweet() {
  try {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    const chatSession = model.startChat({ generationConfig, history: [] });

    const result = await chatSession.sendMessage(randomPrompt);

    const response = result.response.text();
    const hashtags = response.match(/#\w+/g) || [];
    const quote = response.replace(/#\w+/g, "").trim();

    return `${quote} ${hashtags.join(" ")}`.substring(0, 280);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
}

module.exports = { generateMotivationalTweet };
