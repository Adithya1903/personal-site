// All site copy lives here. Edit facts without touching components.

export type SiteLink = {
  label: string;
  href: string;
};

export type Project = {
  /** Anchor id, e.g. "launchpad" -> /#launchpad */
  id: string;
  name: string;
  oneLiner: string;
  /** Single metadata line: attribution, org/year/stack. */
  meta: string;
  paragraphs: string[];
  links: SiteLink[];
};

/** A card in a swipeable row (Talks, Writing). `href: null` renders the card
    unlinked, so an item can go up before its public URL exists. */
export type CardItem = {
  id: string;
  title: string;
  /** Single metadata line: kind, venue, year. */
  meta: string;
  blurb: string;
  href: string | null;
  /** Explicit preview image. YouTube links derive theirs from the href, so
      this is only for everything else (an article's OG image, a paper's
      first page). A row with no previews at all renders as text cards. */
  image?: string;
};

export const SITE_URL = "https://adithya-site-orpin.vercel.app";

export const identity = {
  name: "Adithya Ganesh",
  tagline:
    "I build stablecoin and AI products, and the developer ecosystems around them. Product & Developer Relations at MOI Protocol (Sarva Labs).",
  location: "NYC metro",
};

/** Lives at public/adithya-ganesh-resume.pdf. Swap the file to update the
    resume; the filename is stable so existing links keep working. */
export const RESUME_HREF = "/adithya-ganesh-resume.pdf";

export const links: SiteLink[] = [
  { label: "GitHub", href: "https://github.com/Adithya1903" },
  { label: "GitHub (work)", href: "https://github.com/Sarvalabs-adithya" },
  { label: "LinkedIn", href: "https://linkedin.com/in/adithya-ganesh1" },
  { label: "X", href: "https://x.com/AdithyaGanesh_" },
  { label: "Email", href: "mailto:adithyaganesh9@gmail.com" },
  { label: "Resume", href: RESUME_HREF },
];

export const nav: SiteLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Talks", href: "#talks" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
];

export const projects: Project[] = [
  {
    id: "launchpad",
    name: "MOI Agent Launchpad",
    oneLiner: "Deploy an autonomous AI agent on-chain in under 60 seconds.",
    meta: "Work, Sarva Labs · launched Aug 2026",
    paragraphs: [
      "The problem: getting someone who has never touched a blockchain to deploy an agent with a real on-chain identity in under a minute. Every added onboarding step loses people.",
      "The decisions: 10 pre-built templates (price monitoring, expense tracking, job search, daily briefings) instead of a blank canvas, because “configure anything” is where new users stall. Three setup fields, not thirty. Results delivered on Telegram, because meeting users in an app they already open beats teaching them a dashboard. Free deployment on MOI devnet, and an agent marketplace so the first thing new users see is what’s already running.",
      "My role: end-to-end, from concept through public launch. Why it matters: every deployed agent is a new on-chain identity and a new ecosystem user. “Read the docs” onboarding became a 60-second product experience.",
    ],
    links: [{ label: "launchpad.moi.technology", href: "https://launchpad.moi.technology" }],
  },
  {
    id: "agent-dating",
    name: "agent-dating",
    oneLiner: "Two AI agents with on-chain identities, autonomously dating each other. Yes, really.",
    meta: "Work, Sarva Labs · 2026, open source, TypeScript",
    paragraphs: [
      "An OpenClaw plugin where each dater is a genuinely independent agent: its own model, its own wallet, its own identity on MOI’s on-chain agent registry. Agents discover peers and message over a real A2A transport (direct HTTP with an SSE relay fallback so agents behind NAT stay reachable), rendered in a live WhatsApp-style spectator view.",
      "Incoming messages route into the agent’s real LLM session (it knows it’s on a date and answers as itself), with a free offline persona mode as fallback. Deterministic date scoring. A wingman mode where owners text as their agent, sender-signed with a wallet-derived key, with a global leaderboard. Per-peer reply caps and block controls, 9 tools, a one-command installer.",
      "A ridiculous demo built on serious infrastructure: shipped to prove MOI’s agent registry with something people actually want to watch. Published on ClawHub.",
    ],
    links: [
      { label: "github.com/sarvalabs-adithya/agent-dating", href: "https://github.com/sarvalabs-adithya/agent-dating" },
    ],
  },
  {
    id: "stablecoin-tools",
    name: "Stablecoin Tools",
    oneLiner:
      "Most dashboards tell you the price is $1.00. Stablecoin Tools asks what has to break before it isn’t.",
    meta: "Personal, ongoing · Next.js, TypeScript",
    paragraphs: [
      "Mechanism-specific Monte Carlo stress tests across 8 stablecoins, on live market data from DeFiLlama and CoinGecko. Overcollateralized, delta-neutral, and fiat-backed designs each get their own failure model, because they fail differently.",
      "The models come from my five published papers on stablecoin collateral risk and options-based hedging, turned into software anyone can run. In active development: liquidation calculators, safe-borrow estimators, and risk-adjusted yield comparisons.",
    ],
    links: [{ label: "stablecointools.org", href: "https://stablecointools.org" }],
  },
  {
    id: "verde",
    name: "Verde",
    oneLiner:
      "A USD neobank for Argentine freelancers: get paid in dollars, spend in pesos, earn yield while you sleep.",
    meta: "Personal, in active development · React Native (Expo), TypeScript, Zustand",
    paragraphs: [
      "“Verdes” is what Argentine freelancers actually call dollars. Verde runs on stablecoin rails, but the word “crypto” appears nowhere in the product: users see “your dollars,” the infrastructure sees USDC. Every function maps 1:1 to a real integration: virtual US bank accounts on-ramping ACH and wire to USDC (Bridge), embedded wallets and auth (Privy), LATAM virtual card issuing with point-of-sale FX (Pomelo), and yield from tokenized T-bills (BlackRock BUIDL via Securitize).",
      "The interactive app is complete: onboarding, balance and activity feed, send flow, a virtual card with freeze, and live yield accruing in real time. I’m now swapping the mocked layer for live integrations, starting with auth and the on-ramp.",
      "The question underneath it: what does stablecoin infrastructure look like when the user never has to know it’s there?",
    ],
    links: [],
  },
  {
    id: "sprint",
    name: "MOI Sprint",
    oneLiner: "A speedrun-style learning platform for MOI development, modeled on SpeedRunEthereum.",
    meta: "Work, Sarva Labs · 2025-2026",
    paragraphs: [
      "Developers level up through hands-on challenges instead of reading docs cover to cover.",
      "Built alongside the ~50 pages of core documentation I authored for Coco, MOI’s smart contract language, and for MOI protocol architecture. Sprint is the on-ramp from “curious” to “shipping on MOI.”",
    ],
    links: [
      { label: "cocolang.dev", href: "https://cocolang.dev" },
      { label: "docs.moi.technology", href: "https://docs.moi.technology" },
    ],
  },
  {
    id: "liquidease",
    name: "LiquidEase",
    oneLiner: "Single-sided liquidity provision. Built and won at ETH Denver 2023.",
    meta: "Personal · ETH Denver 2023, 0x bounty winner, Solidity, Next.js",
    paragraphs: [
      "A smart contract routes optimal swaps through the 0x aggregator so LPs enter positions with one asset.",
      "OpenZeppelin Defender autotasks and sentinels handle automated rebalancing on volume- and time-based triggers, for example auto-exit if LP trading volume drops more than 15% in 24 hours.",
    ],
    links: [],
  },
];

export const talks = {
  blurb:
    "Events, webinars, and community calls. I run weekly dev talks and an 11-part community call series (1,500+ cumulative views) on the MOI Technology channel.",
  channel: {
    label: "MOI Technology on YouTube",
    href: "https://www.youtube.com/channel/UCit7h30bhrwxBd1Yt_bmPvg",
  },
  items: [
    {
      id: "call-1",
      title: "MOI Community Call #1",
      meta: "Community call · MOI Technology",
      blurb: "Genesis. Rethinking the internet with contextual compute.",
      href: "https://www.youtube.com/watch?v=wSDM1TG46dg",
    },
    {
      id: "call-2",
      title: "MOI Community Call #2",
      meta: "Community call · MOI Technology",
      blurb: "Building together.",
      href: "https://www.youtube.com/watch?v=-uNJdDzbMsY",
    },
    {
      id: "call-3",
      title: "MOI Community Call #3",
      meta: "Community call · MOI Technology",
      blurb: "Beta MainNet launch.",
      href: "https://www.youtube.com/watch?v=pAsgczOnifI",
    },
    {
      id: "call-4",
      title: "MOI Community Call #4",
      meta: "Community call · MOI Technology",
      blurb: "Powering the network.",
      href: "https://www.youtube.com/watch?v=-xNU2IPbfQU",
    },
    {
      id: "call-5",
      title: "MOI Community Call #5",
      meta: "Community call · MOI Technology",
      blurb: "The MOI winter upgrade.",
      href: "https://www.youtube.com/watch?v=cQ67u_7mA7o",
    },
    {
      id: "call-6",
      title: "MOI Community Call #6",
      meta: "Community call · MOI Technology",
      blurb: "Community, builders, and onboarding momentum.",
      href: "https://www.youtube.com/watch?v=LWXJdkY83Kk",
    },
    {
      id: "call-7",
      title: "MOI Community Call #7",
      meta: "Community call · MOI Technology",
      blurb: "ETH Denver recap, Forge updates, and new campaigns.",
      href: "https://www.youtube.com/watch?v=jJ5Sp08_4dI",
    },
    {
      id: "call-8",
      title: "MOI Community Call #8",
      meta: "Community call · MOI Technology",
      blurb: "The agentic economy is here.",
      href: "https://www.youtube.com/watch?v=yN952ghXOpk",
    },
    {
      id: "call-9",
      title: "MOI Community Call #9",
      meta: "Community call · MOI Technology",
      blurb: "Trust, swaps, and real use cases.",
      href: "https://www.youtube.com/watch?v=oM0UAQ-aYUQ",
    },
    {
      id: "call-13",
      title: "MOI Community Call #13",
      meta: "Community call · MOI Technology",
      blurb: "Building in public.",
      href: "https://www.youtube.com/watch?v=gcGZA9hNGpA",
    },
    {
      id: "builder-2",
      title: "Builder Series Episode 2",
      meta: "Dev talk · MOI Technology",
      blurb: "Native assets.",
      href: "https://www.youtube.com/watch?v=mWzJZ5Vests",
    },
    {
      id: "builder-3",
      title: "Builder Series Episode 3",
      meta: "Dev talk · MOI Technology",
      blurb: "The agent registry.",
      href: "https://www.youtube.com/watch?v=uNxsNdaTcGo",
    },
    {
      id: "builder-4",
      title: "Builder Series Episode 4",
      meta: "Dev talk · MOI Technology",
      blurb: "Swaps without liquidity pools.",
      href: "https://www.youtube.com/watch?v=KLkMU5G5sHI",
    },
    {
      id: "builder-5",
      title: "Builder Series Episode 5",
      meta: "Dev talk · MOI Technology",
      blurb: "Vibe coding on MOI.",
      href: "https://www.youtube.com/watch?v=L7Oe6R9ue54",
    },
    {
      id: "builder-6",
      title: "Builder Series Episode 6",
      meta: "Dev talk · MOI Technology",
      blurb: "Context inheritance.",
      href: "https://www.youtube.com/watch?v=Pq56uIEaMY8",
    },
    {
      id: "forge-1",
      title: "MOI Forge Episode 1",
      meta: "Forge session · MOI Technology",
      blurb: "What is Sageo.",
      href: "https://www.youtube.com/watch?v=Y8nVVA19rqw",
    },
    {
      id: "forge-2",
      title: "MOI Forge Episode 2",
      meta: "Forge session · MOI Technology",
      blurb: "Giving context.",
      href: "https://www.youtube.com/watch?v=NNvM4OazRK0",
    },
    {
      id: "forge-3",
      title: "MOI Forge Episode 3",
      meta: "Forge session · MOI Technology",
      blurb: "A discussion on identity.",
      href: "https://www.youtube.com/watch?v=3n1JNxSP0xA",
    },
    {
      id: "moi-hackathon",
      title: "MOI Hackathon",
      meta: "Event · 120 participants",
      blurb: "Ran the event end to end, and fed what builders hit during it back into the product roadmap.",
      href: null,
    },
    {
      id: "solidity-course",
      title: "12-Week Solidity Course",
      meta: "Course · Boiler Blockchain, Purdue",
      blurb: "Designed and taught a technical curriculum to 100+ students, from first contract to deployment.",
      href: null,
    },
    {
      id: "ethdenver-2023",
      title: "ETH Denver 2023",
      meta: "Hackathon · 0x bounty winner",
      blurb: "Built and shipped LiquidEase over the event: single-sided liquidity provision routed through the 0x aggregator.",
      href: null,
    },
    {
      id: "ethsf-2022",
      title: "ETHSanFrancisco 2022",
      meta: "Hackathon · Triangle Best Social Use winner",
      blurb: "Won the Triangle Best Social Use prize.",
      href: null,
    },
  ] satisfies CardItem[],
};

export const writing = {
  blurb:
    "Papers, specs, and the documentation I wrote for MOI. Five of the papers are sole-authored work on stablecoin collateral risk and options-based hedging.",
  items: [
    {
      id: "webinars-vii",
      title: "How AI Agents Pay Each Other",
      meta: "Article · MOI Blog · 2026",
      blurb: "Written up from MOI Webinars VII: what it actually takes for one autonomous agent to pay another.",
      href: "https://blog.moi.technology/article/how-ai-agents-pay-each-other-moi/",
    },
    {
      id: "bima-white-paper",
      title: "Stablecoin Risk Mitigation White Paper",
      meta: "White paper · co-author, BIMA Labs · 2024",
      blurb: "Capital-allocation guidance built on a framework evaluating 70+ stablecoin, LST, and LRT protocols across collateral, peg mechanics, and liquidation logic.",
      href: null,
    },
    {
      id: "stiff-spec",
      title: "STiFF Enterprise Stablecoin Spec",
      meta: "Spec · co-author, MOI",
      blurb: "Branded stablecoin issuance and settlement at 80-90% lower cost than card networks.",
      href: null,
    },
    {
      id: "coco-docs",
      title: "Coco Language Documentation",
      meta: "Documentation · MOI · ~50 pages",
      blurb: "Core documentation for Coco, MOI's smart contract language, written alongside the protocol architecture docs.",
      href: "https://cocolang.dev",
    },
    {
      id: "moi-docs",
      title: "MOI Protocol Documentation",
      meta: "Documentation · MOI",
      blurb: "Protocol architecture documentation, the reference the developer on-ramp is built around.",
      href: "https://docs.moi.technology",
    },
    {
      id: "paper-collar",
      title: "Delta & Gamma Neutral Collar Strategy",
      meta: "Paper · sole author",
      blurb: "Downside risk in stablecoin reserves.",
      href: null,
    },
    {
      id: "paper-butterfly",
      title: "Theta & Vega Neutral Butterfly Spread",
      meta: "Paper · sole author",
      blurb: "Yield curves under varying volatility.",
      href: null,
    },
    {
      id: "paper-rho",
      title: "Rho Neutral Yield Enhancement with Synthetic Positions",
      meta: "Paper · sole author",
      blurb: "Rate arbitrage in DeFi.",
      href: null,
    },
    {
      id: "paper-calendar",
      title: "Gamma Neutral Calendar Spread",
      meta: "Paper · sole author",
      blurb: "Long-term volatility in collateralized portfolios.",
      href: null,
    },
    {
      id: "paper-condor",
      title: "Theta Neutral Iron Condor",
      meta: "Paper · sole author",
      blurb: "Hedging AMM impermanent loss.",
      href: null,
    },
  ] satisfies CardItem[],
};

export const about: string[] = [
  "BS in Applied Mathematics & Economics with a CS minor from Purdue (2025), where I taught a 12-week Solidity course and ran ops for Boiler Blockchain.",
  "Before MOI, I did stablecoin research at BIMA Labs.",
  "At MOI I also co-authored the STiFF enterprise stablecoin spec, branded stablecoin issuance and settlement at 80-90% lower cost than card networks, and I run weekly dev talks, the MOI Forge grant program, and an 11-part community call series with 1,500+ cumulative views.",
];
