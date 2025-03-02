const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const prompts = require("../utils/prompts");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 0.7,        // Balanced creativity for engaging tweets
  topP: 0.85,              // Focused but not overly restrictive
  topK: 20,                // Narrow token selection for precision
  maxOutputTokens: 120,    // Strict limit for tweet brevity
  responseMimeType: "text/plain",
};

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function generateMotivationalTweet() {
  try {
    const randomPrompt = getRandomElement(prompts);
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
