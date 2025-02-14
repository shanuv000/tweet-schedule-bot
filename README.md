# Automated Motivational Tweets with Gemini and Twitter API

This project automates the posting of motivational quotes to Twitter twice a day using Google's Gemini API for content generation and the Twitter API for posting. It is built with Node.js and uses `node-schedule` for scheduling.

## Features

- **Automated Tweets**: Posts motivational quotes twice daily (9 AM and 5 PM).
- **AI-Powered Content**: Uses Google's Gemini API to generate unique and engaging motivational quotes.
- **Optimized Hashtags**: Automatically includes relevant hashtags for better reach.
- **Scheduling**: Uses `node-schedule` for reliable and precise tweet scheduling.
- **Modular Code**: Separates concerns into reusable modules for easy maintenance.

## Prerequisites

Before running the project, ensure you have the following:

1. **Node.js**: Install Node.js (v16 or higher) from [nodejs.org](https://nodejs.org/).
2. **Twitter Developer Account**: Apply for a developer account at [Twitter Developer](https://developer.twitter.com/).
3. **Google Gemini API Key**: Obtain an API key from [Google AI Studio](https://aistudio.google.com/).
4. **Environment Variables**: Create a `.env` file to store your credentials (see [Configuration](#configuration)).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/automated-motivational-tweets.git
   cd automated-motivational-tweets
   ```
