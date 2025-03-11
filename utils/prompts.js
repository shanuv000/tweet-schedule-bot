const prompts = {
  tech: [
    "Generate a tweet about AI improving coding efficiency. Begin with an attention-grabbing fact or question, include the 💻 emoji, provide a surprising statistic, explain its significance, and end with three hashtags, including one popular tech hashtag. Keep it under 280 characters.",
    "Write a tweet to generate interest in quantum computing. Start with 'Future Alert:', ask a rhetorical question, use the ⚛️ emoji, compare quantum computing to smartphones or cloud computing, and include 2-3 hashtags, one being #QuantumLeap. Ensure it's under 280 characters.",
    "Create a tweet to highlight Web3 security. Include the 🔒 emoji, a comparison showing Web3's security advantage (e.g., 'Web3: 90% secure vs traditional: 60%'), a provocative question, and the hashtags #Web3Safety plus two other relevant hashtags. Keep it under 280 characters.",
    "Write a tweet about a quantum computing breakthrough. Describe the breakthrough and its application, include a statistic (e.g., 'IBM’s 127-qubit chip'), and use the hashtags #QuantumComputing and another relevant one. Ensure it's under 280 characters.",
    "Generate a tweet about an AI tool improving customer service. Mention the tool, state how it reduces resolution time (e.g., 'cuts resolution time by 50%'), include a customer satisfaction statistic (e.g., 'CSAT increased by 30%'), and use three hashtags: #AI, #CX, and one specific to the tool. Keep it under 280 characters.",
  ],
  marketing: [
    "Create a tweet revealing a lesser-known marketing strategy or tool for 2024. Start with the 💎 emoji in the first three words, provide two contrasting statistics (e.g., 'Strategy X increased engagement by 20% while Y decreased by 10%'), and include three hashtags, one being #GrowthHacking. Ensure it's under 280 characters.",
    "Write the first tweet of a thread about content marketing secrets. Begin with '🚨 PSA:', include the 📈 emoji, mention three unexpected platforms for content distribution, end with a cliffhanger to encourage reading the next tweet, and use two relevant hashtags. Keep it under 280 characters.",
    "Generate a tweet with a contrarian view on influencer marketing. Include the ⚠️ emoji, a paradoxical statistic (e.g., '80% of influencer campaigns miss ROI targets'), and three provocative hashtags, including #InfluencerBust. Keep it under 280 characters.",
    "Create a tweet about the effectiveness of micro-influencers. Mention a specific case study (e.g., '@HealthBae achieved 200% ROI'), include a statistic comparing micro-influencers to celebrities (e.g., '3x engagement'), and use two hashtags: #MicroInfluencers and one industry-specific. Ensure it's under 280 characters.",
    "Write a tweet about a company using AI for personalized marketing. Name the company, describe how AI is used, include an engagement statistic (e.g., 'CTR increased by 40%'), and use three hashtags: #AI, #MarTech, and one brand-specific. Keep it under 280 characters.",
  ],
  business: [
    "Generate a tweet exposing stealth startup tactics. Start with '🚨 Exposure:', include the 🕶️ emoji, mention three key metrics (e.g., '$1M revenue, 5x ROI, 6 months to market'), and use the hashtags #UnfilteredBiz plus two others. Keep it under 280 characters.",
    "Write the opening tweet for a thread on leadership in remote teams. Use a question format, include the 🌐 emoji, provide a productivity statistic, and use the hashtags #FutureOfWork plus two others. Ensure it's under 280 characters.",
    "Create a tweet about bootstrap finance hacks. Include the 💸 emoji, mention three useful tools (e.g., Stripe, QuickBooks), provide two financial metrics (e.g., '50% cost savings'), and use the hashtags #CashflowHustle plus two others. Keep it under 280 characters.",
    "Generate a tweet about a company's sustainability efforts. Name the company, describe the initiative, state the emission reduction (e.g., 'reduced emissions by 45%'), include a sustainability metric, and use two hashtags: #CircularEconomy and one sector-specific. Ensure it's under 280 characters.",
    "Write a tweet about the benefits of remote work. Include the 🏠 emoji, mention a productivity boost statistic (e.g., '22% increase'), suggest two tools or tactics, and use three hashtags: #RemoteWork and two industry-specific. Keep it under 280 characters.",
  ],
  ai: [
    "Create a tweet about a recent AI ethics development. Include the ⚖️ emoji, describe a shocking scenario (e.g., 'AI denied loan to CEO'), pose a rhetorical question, and use the hashtags #AIEthics plus two others. Keep it under 280 characters.",
    "Generate a tweet explaining AI to a non-technical audience. Use the 🧠 emoji, an analogy to a home appliance, include an impact statistic (e.g., '75% faster diagnosis'), and use the hashtags #ExplainItLikeIm5 plus two others. Ensure it's under 280 characters.",
    "Write a tweet hyping AI in healthcare. Start with '🚑 Not Sci-Fi:', include the ⚕️ emoji, provide a patient outcome statistic, and use the hashtags #HealthTech plus two others. Keep it under 280 characters.",
    "Create a tweet about AI regulation. Describe a controversy, suggest a solution framework, and use two hashtags: #AIEthics and one policy-related. Ensure it's under 280 characters.",
    "Generate a tweet about an AI tool for education. Name the tool, describe how it personalizes learning, include an outcome statistic (e.g., '35% faster mastery'), and use three hashtags: #EdTech and two subject-specific. Keep it under 280 characters.",
  ],
  development: [
    "Write a tweet about a common debugging challenge. Include the 😱 emoji, a statistic about time spent debugging (e.g., '40 hours/month'), mention three debugging tools, and use the hashtags #DevLife plus one other. Ensure it's under 280 characters.",
    "Create a tweet about the rise of low-code platforms. Include the 🚀 emoji, a market growth statistic (e.g., '$50B by 2025'), mention two success stories, and use the hashtags #NoCode2024 plus two others. Keep it under 280 characters.",
    "Generate a tweet comparing framework popularity. Include the 📊 emoji, 2024 usage statistics (e.g., 'React 60% vs Svelte 25%'), mention one emerging framework, and use three relevant hashtags. Ensure it's under 280 characters.",
    "Write a tweet about the advantages of cloud computing. Mention a specific benefit (e.g., 'auto-scaling reduces costs by 40%'), include an adoption statistic (e.g., '80% of enterprises'), list three cloud tools (e.g., AWS, Kubernetes), and use two hashtags: #CloudNative and one other. Keep it under 280 characters.",
    "Create a tweet about an open-source tool's impact. Name the tool, state its usage (e.g., 'used by 70% of Fortune 500'), include an impact statistic, and use two hashtags: #OpenSource and one tool-specific. Ensure it's under 280 characters.",
  ],
  spaceExploration: [
    "Generate a tweet about a Mars mission development. Include the 🚀 emoji, describe the development with a statistic (e.g., 'NASA's MOXIE produces 10g O2/hr'), and use three hashtags: #Mars2030, #SpaceTech, and one agency-specific. Keep it under 280 characters.",
    "Write a tweet about space tourism. Name a company, mention the number of bookings and price (e.g., '500 space tourists at $250k each'), include a demand statistic, and use two hashtags: #SpaceVacay and one company-specific. Ensure it's under 280 characters.",
  ],
  climateChange: [
    "Create a tweet about a green technology breakthrough. Include the ☀️ emoji, describe the technology and its efficiency (e.g., 'Perovskite solar cells achieve 90% efficiency'), provide an impact metric, and use three hashtags: #CleanEnergy and two tech-specific. Keep it under 280 characters.",
    "Generate a tweet about a city's climate action. Name the city, describe the initiative, state the emission reduction (e.g., 'cuts emissions by 35%'), and use two hashtags: #ClimateAction and one city-specific. Ensure it's under 280 characters.",
  ],
  healthWellness: [
    "Write a tweet about a telehealth feature. Include the 🩺 emoji, describe the feature (e.g., '24/7 dermatology consults'), provide a patient approval statistic (e.g., '95% satisfaction'), and use three hashtags: #Telehealth and two tech-specific. Keep it under 280 characters.",
    "Create a tweet about workplace mental health. Include the 🧠 emoji, mention a practice that reduces burnout (e.g., 'reduces burnout by 40%'), provide a wellbeing statistic, and use two hashtags: #MentalHealth and one industry-specific. Ensure it's under 280 characters.",
  ],
  entertainment: [
    "Generate a tweet about a popular streaming show. Include the 🍿 emoji, mention the show's name and streaming hours (e.g., '1B hours streamed'), and use two hashtags: #StreamingWars and one show-specific. Keep it under 280 characters.",
    "Write a tweet about a video game's storytelling. Include the 🎮 emoji, name the game and the award it won, provide a narrative impact fact, and use three hashtags: #Gaming and two studio-specific. Ensure it's under 280 characters.",
  ],
  education: [
    "Create a tweet about an online learning platform. Include the 💻 emoji, mention the platform's name and number of professionals trained (e.g., '5M annually'), provide a growth statistic, and use three hashtags: #EdTech and two skill-specific. Keep it under 280 characters.",
    "Generate a tweet about an AI tutoring tool. Include the 👩🏫 emoji, describe how it improves learning (e.g., 'improves test scores by 1.5 grades'), and use two hashtags: #AI and one subject-specific. Ensure it's under 280 characters.",
  ],
  urtechy: [
    // Service-Specific Prompts
    "Generate a tweet (under 280 characters) promoting urTechy's web development services. Use a professional yet friendly tone, emphasize tailored solutions, include a clear call to action with the link https://urtechy.com/, and add hashtags #WebDevelopment and #DigitalSolutions. Use 1-2 emojis for engagement.",

    "Generate a tweet (under 280 characters) promoting urTechy's mobile app development services. Use a professional yet friendly tone, highlight custom solutions, include a call to action with the link https://urtechy.com/, and add hashtags #MobileApps and #AppDevelopment. Use 1-2 emojis for appeal.",

    "Generate a tweet (under 280 characters) showcasing urTechy's digital marketing expertise. Use a professional yet friendly tone, mention a benefit like increased online visibility, ask an engaging question, include the link https://urtechy.com/, and add hashtags #DigitalMarketing and #OnlineGrowth. Use 1-2 emojis.",

    "Generate a tweet (under 280 characters) promoting urTechy's cloud computing solutions. Use a professional yet friendly tone, emphasize their innovative approach, include a call to action with the link https://urtechy.com/, and add hashtags #CloudComputing and #TechInnovation. Use 1-2 emojis for engagement.",

    // Industry-Specific Prompts
    "Generate a tweet (under 280 characters) highlighting urTechy's success in the banking and financial services industry. Use a professional tone, include a statistic or testimonial, include a call to action with the link https://urtechy.com/, and add hashtags #FinTech and #BankingSolutions. Use 1 emoji if relevant.",

    "Generate a tweet (under 280 characters) promoting urTechy's services for the retail and consumer services industry. Use a friendly tone, mention enhanced customer experience, include a call to action with the link https://urtechy.com/, and add hashtags #RetailTech and #CustomerExperience. Use 1-2 emojis.",

    // Interactive Prompts
    "Generate a tweet (under 280 characters) asking Twitter users about their biggest web development challenge and positioning urTechy as the solution. Use a professional yet friendly tone, include the link https://urtechy.com/, and add hashtags #WebDev and #TechSolutions. Use 1-2 emojis to encourage replies.",

    "Generate a tweet (under 280 characters) asking Twitter users about their biggest hurdle in digital transformation and offering urTechy’s help. Use a professional yet approachable tone, include the link https://urtechy.com/, and add hashtags #DigitalTransformation and #BusinessGrowth. Use 1-2 emojis for engagement.",

    "Generate a tweet (under 280 characters) asking users to share their favorite web development or software tool and noting urTechy’s expert services. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #DevTools and #SoftwareDevelopment. Use 1-2 emojis to boost interaction.",
    "Generate a tweet (under 280 characters) asking users to share their top cybersecurity tip. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #Cybersecurity, and #TechTrends. Use 1-2 emojis to boost engagement.",
    "Generate a tweet (under 280 characters) asking users to share their favorite project management tools. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #ProjectManagement, and #Productivity. Use 1-2 emojis for interaction.",
    "Generate a tweet (under 280 characters) asking users to share their biggest challenges in AI development. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #AI, and #Innovation. Use 1-2 emojis to encourage replies.",
    "Generate a tweet (under 280 characters) asking users to share their favorite UX design tools. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #UXDesign, and #DesignCommunity. Use 1-2 emojis to make it engaging.",
    "Generate a tweet (under 280 characters) asking users to share their biggest pain points in e-commerce. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #Ecommerce, and #AskTwitter. Use 1-2 emojis for appeal.",
    "Generate a tweet (under 280 characters) asking users to share their favorite DevOps tools. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #DevOps, and #CloudTech. Use 1-2 emojis to spark conversation.",
    "Generate a tweet (under 280 characters) asking users to share their biggest challenges in data analytics. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #DataAnalytics, and #BigData. Use 1-2 emojis for engagement.",
    "Generate a tweet (under 280 characters) asking users to share their favorite tech blogs or podcasts. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #TechTalk, and #TechCommunity. Use 1-2 emojis to encourage sharing.",
    "Generate a tweet (under 280 characters) asking users to share their biggest tech issues with remote work. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #RemoteWork, and #WFH. Use 1-2 emojis for interaction.",
    "Generate a tweet (under 280 characters) asking users to share their favorite API development tools. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #APIDev, and #DevTools. Use 1-2 emojis to boost replies.",
  ],
};

module.exports = prompts;
