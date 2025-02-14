const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 150, // Optimized for short tweets
  responseMimeType: "text/plain",
};

async function generateMotivationalTweet() {
  try {
    const chatSession = model.startChat({ generationConfig, history: [] });
    const result = await chatSession.sendMessage(
      "Generate a motivational quote (under 220 characters) followed by 3 relevant hashtags. Format: [Quote text] #Hashtag1 #Hashtag2 #Hashtag3"
    );

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
