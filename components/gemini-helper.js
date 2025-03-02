const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const prompts = require("../utils/prompts");

class GeminiHelper {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });
    this.generationConfig = {
      temperature: 0.7,
      topP: 0.85,
      topK: 20,
      maxOutputTokens: 120,
      responseMimeType: "text/plain",
    };
  }

  getRandomPrompt(categories) {
    const validCategories = categories.filter(category => prompts[category]);
    if (validCategories.length === 0) {
      throw new Error("No valid prompt categories found");
    }
    
    const randomCategory = validCategories[Math.floor(Math.random() * validCategories.length)];
    const categoryPrompts = prompts[randomCategory];
    return categoryPrompts[Math.floor(Math.random() * categoryPrompts.length)];
  }

  async generateTweet(promptCategories) {
    try {
      const randomPrompt = this.getRandomPrompt(promptCategories);
      const chatSession = this.model.startChat({ generationConfig: this.generationConfig, history: [] });
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
}

module.exports = new GeminiHelper();
