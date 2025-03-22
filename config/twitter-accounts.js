const twitterAccounts = [
  {
    id: "account1",
    name: "Main Account",
    apiKey: process.env.API_KEY,
    apiKeySecret: process.env.API_KEY_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
    promptCategories: [
      "tech",
      "ai",
      "development",
      // "spaceExploration",
      "entertainment",
      // "healthWellness",
      // "climateChange",
      "education",
      "marketing",
      "business",
      "ai",
    ],
  },
  {
    id: "account2",
    name: "Secondary Account",
    apiKey: process.env.ACCOUNT2_API_KEY,
    apiKeySecret: process.env.ACCOUNT2_API_KEY_SECRET,
    accessToken: process.env.ACCOUNT2_ACCESS_TOKEN,
    accessSecret: process.env.ACCOUNT2_ACCESS_TOKEN_SECRET,
    promptCategories: ["urtechy", "tech", "ai", "development"],
  },
  {
    id: "account3",
    name: "Third Account",
    apiKey: process.env.ACCOUNT3_API_KEY,
    apiKeySecret: process.env.ACCOUNT3_API_KEY_SECRET,
    accessToken: process.env.ACCOUNT3_ACCESS_TOKEN,
    accessSecret: process.env.ACCOUNT3_ACCESS_TOKEN_SECRET,
    promptCategories: [
      // "entertainment",
      "IPL2025",
    ],
  },
];

// Add validation to ensure all required credentials are present
twitterAccounts.forEach((account) => {
  const { id, apiKey, apiKeySecret, accessToken, accessSecret } = account;
  if (!apiKey || !apiKeySecret || !accessToken || !accessSecret) {
    console.error(`Missing credentials for account ${id}:`, {
      hasApiKey: !!apiKey,
      hasApiKeySecret: !!apiKeySecret,
      hasAccessToken: !!accessToken,
      hasAccessSecret: !!accessSecret,
    });
    throw new Error(`Invalid configuration for Twitter account ${id}`);
  }
});

module.exports = twitterAccounts;
