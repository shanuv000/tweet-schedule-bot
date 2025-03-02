const prompts = {
  tech: [
    "Craft a viral tweet about AI boosting coding efficiency. Include: 1 jaw-dropping stat, 💻 emoji, 3 hashtags (1 trending tech tag), max 280 chars. Structure: [Shocking hook] 💻 [Data] → [Implication] [Hashtags]",
    "Create curiosity about quantum computing. Format: Rhetorical Q, ⚛️ emoji, analogy to smartphones/cloud, 2-3 hashtags #QuantumLeap, max 280 chars. Start with 'Future Alert:'",
    "Generate Web3 security buzz. Must include: 🔒 emoji, clear comparison ('X:90% secure vs Y:60%'), 1 bold question, #Web3Safety + 2 niche tags, 280 chars",
    "Quantum Leap: 🔬 [Breakthrough] enabling [application]. Include: 1 stat (e.g., 'IBM’s 127-qubit chip'), 2 hashtags (#QuantumComputing + #[NicheUse]), 280 chars",
    "Customer Service Rebooted: 🤖 [Tool] cuts resolution time by 50%. Include: 1 satisfaction stat ('CSAT↑30%'), 3 hashtags (#AI + #CX + #[ToolName]), 280 chars",
  ],
  marketing: [
    "Expose 2024's hidden marketing gem. Requirements: 💎 in first 3 words, 2 contrasting stats ('X↑20% vs Y↓10%'), 3 hashtags inc #GrowthHacking, max 280 chars",
    "Create tweetstorm opener for content secrets. Include: 🚨 PSA: starter, 📈 emoji, 3 unexpected platforms, cliffhanger ending, 2 hashtags, 280 chars max",
    "Contrarian influencer take. Must have: ⚠️ emoji, 1 paradoxical stat ('80% miss ROI'), 3 spicy hashtags (#InfluencerBust), 280 chars",
    "Small but Mighty: 📢 Micro-influencers drive 3x engagement vs celebs! Include: 1 case study (e.g., '@HealthBae 200% ROI'), 2 hashtags (#MicroInfluencers + #[Industry]), 280 chars",
    "Tailored to You: 🎯 [Company] uses AI for hyper-personalization. Include: 1 engagement stat ('CTR↑40%'), 3 hashtags (#AI + #MarTech + #[Brand]), 280 chars",
  ],
  business: [
    "Reveal stealth startup tactics. Start: 🚨 Exposure:, include 🕶️ emoji, 3 metrics ($1M|5x ROI|6mo), #UnfilteredBiz + 2 tags, 280 chars",
    "Leadership thread hook on remote teams. Use: ❓Question format, 🌐 emoji, 1 produtivity stat, #FutureOfWork + 2 tags, 280 chars",
    "Bootstrap finance hacks tweet. Include: 💸 emoji, 3 tools (Stripe/QuickBooks), 2 metrics (50% savings), #CashflowHustle + 2 tags, 280 chars",
    "Green is Gold: 🌿 [Company] reduced emissions by 45% via [initiative]. Include: 1 sustainability metric, 2 hashtags (#CircularEconomy + #[Sector]), 280 chars",
    "WFH Wisdom: 🏠 Remote teams see 22% productivity boost. Tips: [Tool1] + [Tactic2]. 3 hashtags (#RemoteWork + #[Industry]), 280 chars",
  ],
  ai: [
    "BREAKING AI ethics tweet. Structure: ⚖️ emoji, 1 shocking development ('AI denied loan to CEO'), rhetorical Q, #AIEthics + 2 tags, 280 chars",
    "Explain AI to non-techies. Use: 🧠 emoji + home appliance analogy, 1 impact stat ('75% faster Dx'), #ExplainItLikeIm5 + 2 tags, 280 chars",
    "Hype healthcare AI. Opener: 🚑 Not Sci-Fi:, include ⚕️ emoji, 1 patient outcome stat, #HealthTech + 2 tags, 280 chars",
    "AI’s Moral Compass: ⚖️ [Controversy] sparks regulation debate. Solution: [Framework]. 2 hashtags (#AIEthics + #[PolicyTag]), 280 chars",
    "Smart Learning: 🎓 [Tool] personalizes education → 35% faster mastery. Include: 1 outcome stat, 3 hashtags (#EdTech + #[Subject]), 280 chars",
  ],
  development: [
    "Debugging nightmare tweet. Include: 😱 emoji, 1 dev pain stat ('40hrs/mo debugging'), 3 fix tools, #DevLife + 1 tag, 280 chars",
    "Low-code revolution tweet. Must have: 🚀 emoji, 1 market stat ('$50B by 2025'), 2 success cases, #NoCode2024 + 2 tags, 280 chars",
    "Framework popularity quiz. Format: 📊 emoji, 2024 stats ('React 60% vs Svelte 25%'), 1 rising star tool, 3 hashtags, 280 chars",
    "Cloud Power: ☁️ [Advantage] (e.g., 'Auto-scaling cuts costs 40%'). Include: 1 adoption stat ('80% enterprises'), 3 tools (AWS/Kubernetes), 2 hashtags (#CloudNative), 280 chars",
    "Community Code: 💻 [OSS Tool] used by 70% Fortune 500. Include: 1 impact stat, 2 hashtags (#OpenSource + #[ToolName]), 280 chars",
  ],
  spaceExploration: [
    "Red Planet Rising: 🚀 [Development] ([Stat]). Example: 'NASA's MOXIE produces 10g O2/hr'. 3 hashtags (#Mars2030 + #SpaceTech + #[Agency]), 280 chars",
    "To Infinity & Beyond: 🛸 [Company] books 500 space tourists at $250k each. Include: 1 demand stat, 2 hashtags (#SpaceVacay + #[CompanyTag]), 280 chars",
  ],
  climateChange: [
    "Green Revolution: ☀️ [Tech] achieves 90% efficiency (e.g., 'Perovskite solar cells'). Include: 1 impact metric, 3 hashtags (#CleanEnergy + #[TechName]), 280 chars",
    "Urban Eco-Warriors: 🏙️ [City] cuts emissions 35% via [initiative]. 2 hashtags (#ClimateAction + #[CityName]), 280 chars",
  ],
  healthWellness: [
    "Doctor in Your Pocket: 🩺 [Feature] enables 24/7 dermatology consults. Include: 1 stat ('95% patient approval'), 3 hashtags (#Telehealth + #[TechName]), 280 chars",
    "Mind Matters at Work: 🧠 [Practice] reduces burnout by 40%. Include: 1 wellbeing stat, 2 hashtags (#MentalHealth + #[Industry]), 280 chars",
  ],
  entertainment: [
    "Binge-Worthy: 🍿 [Show] dominates with 1B hours streamed. 2 hashtags (#StreamingWars + #[ShowName]), 280 chars",
    "Pixels & Plots: 🎮 [Game] wins storytelling award. Include: 1 narrative impact fact, 3 hashtags (#Gaming + #[StudioTag]), 280 chars",
  ],
  education: [
    "Upskill Online: 💻 [Platform] trains 5M professionals annually. Include: 1 growth stat, 3 hashtags (#EdTech + #[SkillTag]), 280 chars",
    "Smart Tutor: 👩🏫 [AI Tool] improves test scores by 1.5 grades. 2 hashtags (#AI + #[Subject]), 280 chars",
  ],
};

module.exports = prompts;
// const prompts = {
//   tech: [
//     "Generate a concise and engaging tweet sharing a surprising statistic about artificial intelligence in software development. The response should be formatted for direct posting, including relevant and trending hashtags.",
//     "Create a Twitter post discussing the impact of quantum computing on modern software engineering. The response should be formatted for direct posting, keeping it succinct and including trending hashtags.",
//     // ... other tech prompts
//   ],
//   marketing: [
//     "Create a compelling tweet about digital marketing trends in 2024. Include relevant statistics and trending hashtags.",
//     "Generate an engaging tweet about content marketing success stories. Include metrics and relevant hashtags.",
//     // ... other marketing prompts
//   ],
//   business: [
//     "Draft a tweet about emerging business technologies. Include relevant trends and hashtags.",
//     "Create an insightful tweet about startup success stories. Include key metrics and trending hashtags.",
//     // ... other business prompts
//   ],
//   ai: [
//     "Write a tweet about the latest AI breakthroughs. Include specific achievements and trending hashtags.",
//     "Generate a tweet about practical AI applications in business. Include real examples and relevant hashtags.",
//     // ... other AI prompts
//   ],
//   development: [
//     "Create a tweet about software development best practices. Include specific tips and trending hashtags.",
//     "Draft a tweet about developer productivity tools. Include tool names and relevant hashtags.",
//     // ... other development prompts
//   ]
// };

// module.exports = prompts;
