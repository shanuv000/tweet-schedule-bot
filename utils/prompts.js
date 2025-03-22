const prompts = {
  tech: [
    "Generate a tweet about AI improving coding efficiency. Begin with an attention-grabbing fact or question, include the 💻 emoji, provide a surprising statistic, explain its significance, and end with three hashtags: #AI, #Coding, #TechTrends. Keep it under 280 characters.",
    "Write a tweet to generate interest in quantum computing. Start with 'Future Alert:', ask a rhetorical question, use the ⚛️ emoji, compare quantum computing to smartphones or cloud computing, and include three hashtags: #QuantumTech, #Innovation, #TechTrends. Ensure it's under 280 characters.",
    "Create a tweet to highlight Web3 security. Include the 🔒 emoji, a comparison showing Web3's security advantage (e.g., 'Web3: 90% secure vs traditional: 60%'), a provocative question, and the hashtags #Web3, #Cybersecurity, #TechInnovation. Keep it under 280 characters.",
    "Write a tweet about a quantum computing breakthrough. Describe the breakthrough and its application, include a statistic (e.g., 'IBM’s 127-qubit chip'), and use the hashtags #QuantumComputing, #FutureTech. Ensure it's under 280 characters.",
    "Generate a tweet about an AI tool improving customer service. Mention the tool, state how it reduces resolution time (e.g., 'cuts resolution time by 50%'), include a customer satisfaction statistic (e.g., 'CSAT increased by 30%'), and use three hashtags: #AI, #CustomerExperience, #TechSolutions. Keep it under 280 characters.",
  ],
  marketing: [
    "Create a tweet revealing a lesser-known marketing strategy or tool for 2024. Start with the 💎 emoji in the first three words, provide two contrasting statistics (e.g., 'Strategy X increased engagement by 20% while Y decreased by 10%'), and include three hashtags: #GrowthHacking, #MarketingTrends, #DigitalMarketing. Ensure it's under 280 characters.",
    "Write the first tweet of a thread about content marketing secrets. Begin with '🚨 PSA:', include the 📈 emoji, mention three unexpected platforms for content distribution, end with a cliffhanger to encourage reading the next tweet, and use two hashtags: #ContentMarketing, #DigitalStrategy. Keep it under 280 characters.",
    "Generate a tweet with a contrarian view on influencer marketing. Include the ⚠️ emoji, a paradoxical statistic (e.g., '80% of influencer campaigns miss ROI targets'), and three hashtags: #InfluencerMarketing, #ROI, #MarketingTruth. Keep it under 280 characters.",
    "Create a tweet about the effectiveness of micro-influencers. Mention a specific case study (e.g., '@HealthBae achieved 200% ROI'), include a statistic comparing micro-influencers to celebrities (e.g., '3x engagement'), and use two hashtags: #MicroInfluencers, #MarketingTrends. Ensure it's under 280 characters.",
    "Write a tweet about a company using AI for personalized marketing. Name the company, describe how AI is used, include an engagement statistic (e.g., 'CTR increased by 40%'), and use three hashtags: #AI, #MarTech, #DigitalMarketing. Keep it under 280 characters.",
  ],
  business: [
    "Generate a tweet exposing stealth startup tactics. Start with '🚨 Exposure:', include the 🕶️ emoji, mention three key metrics (e.g., '$1M revenue, 5x ROI, 6 months to market'), and use the hashtags #Startups, #BusinessGrowth, #Entrepreneurship. Keep it under 280 characters.",
    "Write the opening tweet for a thread on leadership in remote teams. Use a question format, include the 🌐 emoji, provide a productivity statistic, and use the hashtags #FutureOfWork, #Leadership, #RemoteWork. Ensure it's under 280 characters.",
    "Create a tweet about bootstrap finance hacks. Include the 💸 emoji, mention three useful tools (e.g., Stripe, QuickBooks), provide two financial metrics (e.g., '50% cost savings'), and use the hashtags #Bootstrap, #FinanceTips, #BusinessGrowth. Keep it under 280 characters.",
    "Generate a tweet about a company's sustainability efforts. Name the company, describe the initiative, state the emission reduction (e.g., 'reduced emissions by 45%'), include a sustainability metric, and use two hashtags: #Sustainability, #GreenBusiness. Ensure it's under 280 characters.",
    "Write a tweet about the benefits of remote work. Include the 🏠 emoji, mention a productivity boost statistic (e.g., '22% increase'), suggest two tools or tactics, and use three hashtags: #RemoteWork, #TechTools, #Productivity. Keep it under 280 characters.",
  ],
  ai: [
    "Create a tweet about a recent AI ethics development. Include the ⚖️ emoji, describe a shocking scenario (e.g., 'AI denied loan to CEO'), pose a rhetorical question, and use the hashtags #AIEthics, #TechEthics, #ResponsibleAI. Keep it under 280 characters.",
    "Generate a tweet explaining AI to a non-technical audience. Use the 🧠 emoji, an analogy to a home appliance, include an impact statistic (e.g., '75% faster diagnosis'), and use the hashtags #AIForAll, #AI, #TechSimplified. Ensure it's under 280 characters.",
    "Write a tweet hyping AI in healthcare. Start with '🚑 Not Sci-Fi:', include the ⚕️ emoji, provide a patient outcome statistic, and use the hashtags #HealthTech, #AIinHealthcare, #Innovation. Keep it under 280 characters.",
    "Create a tweet about AI regulation. Describe a controversy, suggest a solution framework, and use two hashtags: #AIEthics, #TechPolicy. Ensure it's under 280 characters.",
    "Generate a tweet about an AI tool for education. Name the tool, describe how it personalizes learning, include an outcome statistic (e.g., '35% faster mastery'), and use three hashtags: #EdTech, #AIinEducation, #OnlineLearning. Keep it under 280 characters.",
  ],
  development: [
    "Write a tweet about a common debugging challenge. Include the 😱 emoji, a statistic about time spent debugging (e.g., '40 hours/month'), mention three debugging tools, and use the hashtags #DevLife, #Coding, #TechCommunity. Ensure it's under 280 characters.",
    "Create a tweet about the rise of low-code platforms. Include the 🚀 emoji, a market growth statistic (e.g., '$50B by 2025'), mention two success stories, and use the hashtags #LowCode, #TechInnovation, #WebDev. Keep it under 280 characters.",
    "Generate a tweet comparing framework popularity. Include the 📊 emoji, 2024 usage statistics (e.g., 'React 60% vs Svelte 25%'), mention one emerging framework, and use three hashtags: #WebDev, #Frontend, #TechTrends. Ensure it's under 280 characters.",
    "Write a tweet about the advantages of cloud computing. Mention a specific benefit (e.g., 'auto-scaling reduces costs by 40%'), include an adoption statistic (e.g., '80% of enterprises'), list three cloud tools (e.g., AWS, Kubernetes), and use two hashtags: #CloudComputing, #DevOps. Keep it under 280 characters.",
    "Create a tweet about an open-source tool's impact. Name the tool, state its usage (e.g., 'used by 70% of Fortune 500'), include an impact statistic, and use two hashtags: #OpenSource, #TechSolutions. Ensure it's under 280 characters.",
  ],
  spaceExploration: [
    "Generate a tweet about a Mars mission development. Include the 🚀 emoji, describe the development with a statistic (e.g., 'NASA's MOXIE produces 10g O2/hr'), and use three hashtags: #MarsMission, #SpaceExploration, #NASA. Keep it under 280 characters.",
    "Write a tweet about space tourism. Name a company, mention the number of bookings and price (e.g., '500 space tourists at $250k each'), include a demand statistic, and use two hashtags: #SpaceTourism, #Innovation. Ensure it's under 280 characters.",
  ],
  climateChange: [
    "Create a tweet about a green technology breakthrough. Include the ☀️ emoji, describe the technology and its efficiency (e.g., 'Perovskite solar cells achieve 90% efficiency'), provide an impact metric, and use three hashtags: #GreenTech, #Sustainability, #ClimateAction. Keep it under 280 characters.",
    "Generate a tweet about a city's climate action. Name the city, describe the initiative, state the emission reduction (e.g., 'cuts emissions by 35%'), and use two hashtags: #ClimateAction, #SustainableCities. Ensure it's under 280 characters.",
  ],
  healthWellness: [
    "Write a tweet about a telehealth feature. Include the 🩺 emoji, describe the feature (e.g., '24/7 dermatology consults'), provide a patient approval statistic (e.g., '95% satisfaction'), and use three hashtags: #Telemedicine, #HealthTech, #DigitalHealth. Keep it under 280 characters.",
    "Create a tweet about workplace mental health. Include the 🧠 emoji, mention a practice that reduces burnout (e.g., 'reduces burnout by 40%'), provide a wellbeing statistic, and use two hashtags: #MentalHealth, #WorkplaceWellness. Ensure it's under 280 characters.",
  ],
  entertainment: [
    "Generate a tweet about a currently trending streaming show in India. Include the 🎬 emoji, mention the show's name (e.g., 'Heeramandi'), and its streaming milestone (e.g., '2B hours streamed'). Use two hashtags: #StreamingNow, #IndianEntertainment. Keep it under 280 characters.",
    "Write a tweet about a trending Indian web series highlighting cultural diversity. Include the 🌏 emoji, mention the series’ name (e.g., 'Panchayat'), and its impact on showcasing regional stories. Use two hashtags: #WebSeries, #CulturalDiversity. Ensure it’s under 280 characters.",
    "Create a tweet about a video game trending in India for its storytelling. Include the 🎮 emoji, name the game (e.g., 'Winds of Arcana: Ruination'), mention a recent award (e.g., 'GEM Awards 2025 Best Narrative'), and add a storytelling fact. Use three hashtags: #IndianGaming, #GameStory, #TechTrends. Keep it under 280 characters.",
    "Generate a tweet about a trending Indian gaming event. Include the 🏆 emoji, mention the event’s name (e.g., 'WAVES 2025'), and highlight its role in boosting the gaming industry. Use two hashtags: #GamingEvent, #IndianGaming. Keep it under 280 characters.",
    "Write a tweet about a currently trending Indian movie. Include the 🎥 emoji, mention the movie’s name (e.g., 'Superboys of Malegaon'), and its box office collection or critical acclaim (e.g., '₹100 Cr in 5 days'). Use two hashtags: #Bollywood, #IndianCinema. Ensure it’s under 280 characters.",
    "Create a tweet about a trending Indian music album or song. Include the 🎶 emoji, mention the artist (e.g., 'Arijit Singh') and song/album name (e.g., 'Satranga'), and provide a popularity fact (e.g., '#1 on Spotify India'). Use two hashtags: #Music, #IndianMusic. Keep it under 280 characters.",
    "Generate a tweet about a trending Indian music collaboration. Include the 🎤 emoji, mention the artists (e.g., 'AP Dhillon x Karan Aujla'), and describe the genre fusion (e.g., 'Punjabi hip-hop vibes'). Use two hashtags: #MusicCollab, #IndianMusic. Keep it under 280 characters.",
    "Write a tweet about a viral moment from a recent Indian entertainment event. Include the 🔥 emoji, describe the moment (e.g., 'SRK’s witty IIFA roast'), and use two hashtags: #Viral, #Entertainment. Ensure it’s under 280 characters.",
    "Create a tweet about a trending Indian short-form video platform. Include the 📱 emoji, name the platform (e.g., 'Moj'), and mention its user engagement (e.g., '50M daily views’). Use two hashtags: #ShortFormVideo, #IndianApps. Keep it under 280 characters.",
    "Generate a tweet about a trending Indian entertainment influencer. Include the ✨ emoji, mention the influencer’s name (e.g., 'Prajakta Koli'), and highlight their impact (e.g., '5M IG followers’). Use two hashtags: #Influencer, #Entertainment. Keep it under 280 characters.",
  ],
  education: [
    "Create a tweet about an online learning platform. Include the 💻 emoji, mention the platform's name and number of professionals trained (e.g., '5M annually'), provide a growth statistic, and use three hashtags: #OnlineLearning, #EdTech, #SkillUp. Keep it under 280 characters.",
    "Generate a tweet about an AI tutoring tool. Include the 👩🏫 emoji, describe how it improves learning (e.g., 'improves test scores by 1.5 grades'), and use two hashtags: #AIinEducation, #EdTech. Ensure it's under 280 characters.",
  ],
  urtechy: [
    // Service-Specific Prompts
    "Generate a tweet (under 280 characters) promoting urTechy's web development services. Use a professional yet friendly tone, emphasize tailored solutions, include a clear call to action with the link https://urtechy.com/, and add hashtags #urTechy, #WebDev, #TechTrends. Use 1-2 emojis for engagement.",
    "Generate a tweet (under 280 characters) promoting urTechy's mobile app development services. Use a professional yet friendly tone, highlight custom solutions, include a call to action with the link https://urtechy.com/, and add hashtags #urTechy, #AppDev, #Innovation. Use 1-2 emojis for appeal.",
    "Generate a tweet (under 280 characters) showcasing urTechy's digital marketing expertise. Use a professional yet friendly tone, mention a benefit like increased online visibility, ask an engaging question, include the link https://urtechy.com/, and add hashtags #urTechy, #DigitalMarketing, #MarketingTrends. Use 1-2 emojis.",
    "Generate a tweet (under 280 characters) promoting urTechy's cloud computing solutions. Use a professional yet friendly tone, emphasize their innovative approach, include a call to action with the link https://urtechy.com/, and add hashtags #urTechy, #CloudComputing, #TechSolutions. Use 1-2 emojis for engagement.",
    // Industry-Specific Prompts
    "Generate a tweet (under 280 characters) highlighting urTechy's success in the banking and financial services industry. Use a professional tone, include a statistic or testimonial, include a call to action with the link https://urtechy.com/, and add hashtags #urTechy, #FinTech, #BusinessGrowth. Use 1 emoji if relevant.",
    "Generate a tweet (under 280 characters) promoting urTechy's services for the retail and consumer services industry. Use a friendly tone, mention enhanced customer experience, include a call to action with the link https://urtechy.com/, and add hashtags #urTechy, #RetailTech, #CX. Use 1-2 emojis.",
    // Interactive Prompts
    "Generate a tweet (under 280 characters) asking Twitter users about their biggest web development challenge and positioning urTechy as the solution. Use a professional yet friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #WebDev, #AskTwitter. Use 1-2 emojis to encourage replies.",
    "Generate a tweet (under 280 characters) asking Twitter users about their biggest hurdle in digital transformation and offering urTechy’s help. Use a professional yet approachable tone, include the link https://urtechy.com/, and add hashtags #urTechy, #DigitalTransformation, #TechCommunity. Use 1-2 emojis for engagement.",
    "Generate a tweet (under 280 characters) asking users to share their favorite web development or software tool and noting urTechy’s expert services. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #DevTools, #TechTrends. Use 1-2 emojis to boost interaction.",
    "Generate a tweet (under 280 characters) asking users to share their top cybersecurity tip. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #Cybersecurity, #AskTwitter. Use 1-2 emojis to boost engagement.",
    "Generate a tweet (under 280 characters) asking users to share their favorite project management tools. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #ProjectManagement, #TechCommunity. Use 1-2 emojis for interaction.",
    "Generate a tweet (under 280 characters) asking users to share their biggest challenges in AI development. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #AI, #AskTwitter. Use 1-2 emojis to encourage replies.",
    "Generate a tweet (under 280 characters) asking users to share their favorite UX design tools. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #UXDesign, #TechTrends. Use 1-2 emojis to make it engaging.",
    "Generate a tweet (under 280 characters) asking users to share their biggest pain points in e-commerce. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #Ecommerce, #TechSolutions. Use 1-2 emojis for appeal.",
    "Generate a tweet (under 280 characters) asking users to share their favorite DevOps tools. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #DevOps, #TechCommunity. Use 1-2 emojis to spark conversation.",
    "Generate a tweet (under 280 characters) asking users to share their biggest challenges in data analytics. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #DataAnalytics, #AskTwitter. Use 1-2 emojis for engagement.",
    "Generate a tweet (under 280 characters) asking users to share their favorite tech blogs or podcasts. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #TechTalk, #TechTrends. Use 1-2 emojis to encourage sharing.",
    "Generate a tweet (under 280 characters) asking users to share their biggest tech issues with remote work. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #RemoteWork, #AskTwitter. Use 1-2 emojis for interaction.",
    "Generate a tweet (under 280 characters) asking users to share their favorite API development tools. Use a friendly tone, include the link https://urtechy.com/, and add hashtags #urTechy, #APIDev, #TechCommunity. Use 1-2 emojis to boost replies.",
  ],
  IPL2025: [
    "Generate a tweet about a major player trade in IPL 2025. Include the 🔥 emoji, mention the player’s name and new team (e.g., 'Rohit Sharma joins RCB'), and its impact. Use two hashtags: #IPLTrade, #IPL2025. Keep it under 280 characters.",

    "Write a tweet about a trending IPL 2025 auction moment. Include the 🔥 emoji, mention the player and bid (e.g., 'Shubman Gill sold for 20 Cr'), and the team. Use two hashtags: #IPLAuction, #CricketBuzz. Ensure it’s under 280 characters.",

    "Create a tweet about a controversial moment in IPL 2025. Include the 🔥 emoji, mention the incident (e.g., 'Kohli’s heated exchange with umpire'), and its fallout. Use two hashtags: #IPLDrama, #IPL2025. Keep it under 280 characters.",

    "Generate a tweet about a key player’s injury in IPL 2025. Include the 🔥 emoji, mention the player’s name and status (e.g., 'Bumrah out for 2 weeks'), and its effect on the team. Use two hashtags: #IPLInjury, #CricketNews. Keep it under 280 characters.",

    "Write a tweet about a team’s unexpected rise in IPL 2025. Include the 🔥 emoji, mention the team and their feat (e.g., 'RR tops table after 3 wins'), and fan reactions. Use two hashtags: #IPLShock, #IPL2025. Ensure it’s under 280 characters.",

    "Create a tweet about a viral fan moment from IPL 2025. Include the 🔥 emoji, mention the event (e.g., 'fan proposes during MI vs CSK'), and its buzz. Use two hashtags: #FanFever, #IPL2025. Keep it under 280 characters.",

    "Generate a tweet about a player’s fresh milestone in IPL 2025. Include the 🔥 emoji, mention the player and record (e.g., 'Dhoni hits 500th six'), and its significance. Use two hashtags: #IPLMilestone, #CricketHistory. Keep it under 280 characters.",

    "Write a tweet about a sudden captaincy shift in IPL 2025. Include the 🔥 emoji, mention the new captain and team (e.g., 'Hardik Pandya leads MI'), and its implications. Use two hashtags: #IPLLeadership, #IPL2025. Ensure it’s under 280 characters.",
  ],
};

module.exports = prompts;
