import {
  siClaude,
  siExpress,
  siFirebase,
  siGraphql,
  siMongodb,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

export const PROFILE = {
  name: "Santhosh Prabhakaran",
  initials: "SP",
  photo: "/profile-v4.jpg" as string | null,
  bio: "Currently making smart buildings smarter at Nectar IT.",
  status: "Software Engineer @ Nectar IT · building IoT platforms",
  hook: "I build products end to end, from the first UX sketch to the cron job that runs at 2 a.m.",
  intro:
    "I've led a dashboard rebuild from design exploration to production, built reporting engines that deliver themselves, and shipped PWAs people use on the job every day.",
  email: "santhoshprabhakaran02@gmail.com",
  location: "Coimbatore, India",
  social: {
    linkedin: "https://www.linkedin.com/in/santhoshhh/",
    github: "https://github.com/SanthoshPrabhakaranS",
  },
  // Set to "/resume.pdf" after adding a resume (without phone number) to /public
  resume: null as string | null,
};

export const CAPABILITIES = [
  {
    claim: "design it",
    proof: "Led the dashboard revamp from UX exploration to production: themes, widgets, 3D views.",
  },
  {
    claim: "build it",
    proof: "Next.js, Node.js, TypeScript and PostgreSQL in production for 4+ years.",
  },
  {
    claim: "make it fast",
    proof: "20% faster loads on fintech apps. 30% faster pages with server-side rendering.",
  },
  {
    claim: "make it smart",
    proof: "Built OpenAI-powered insights into reports, so they explain themselves.",
  },
];

// Work stories. TODO: add real numbers to `outcome` where you have them (hours saved, users, sites)
export const SYSTEMS = [
  {
    title: "Reports that deliver themselves",
    summary: "A reporting engine that builds Excel reports with charts and sends them on schedule.",
    problem: "Teams needed regular Excel reports with charts, built and delivered without anyone doing it by hand.",
    thinking: "A report nobody has to remember to make is a report that actually gets read.",
    flow: ["Cron schedule", "Query the data", "Build sheets + charts", "Deliver automatically"],
    outcome: "Dynamic Excel reports with charts, generated and delivered on schedule with zero manual steps.",
    tags: ["Node.js", "Express", "TypeScript", "ExcelJS", "Chart.js"],
  },
  {
    title: "Reports that explain themselves",
    summary: "OpenAI-powered insights that turn static report data into readable narratives.",
    problem: "Reports full of numbers still left people to work out what the numbers meant.",
    thinking: "The useful part of a report is the conclusion. Give people that first.",
    flow: ["Report data", "Add context", "OpenAI model", "Narrative insights in the report"],
    outcome: "Static reports became actionable narratives, reducing manual analysis time.",
    tags: ["OpenAI", "Node.js", "TypeScript"],
  },
  {
    title: "Energy compliance alarms",
    summary: "Daily checks of energy use against benchmarks, with alerts when a site drifts.",
    problem: "Energy overuse is easy to miss when nobody is checking every site, every day.",
    thinking: "Compliance shouldn't depend on someone remembering to look.",
    flow: ["Daily cron", "Calculate usage", "Compare to benchmark", "Trigger alert"],
    outcome: "Automatic daily compliance checks with alerts, instead of manual review.",
    tags: ["Node.js", "TypeScript", "Cron jobs"],
  },
  {
    title: "Facility PWA for occupants",
    summary: "QR-based service requests and visitor passes, built mobile-first.",
    problem: "Raising a facility request or inviting a visitor shouldn't need a desk, a form or a phone call.",
    thinking: "Meet people where they already are: on their phone, standing next to the problem.",
    flow: ["Scan a QR code", "Raise a service request", "Generate visitor passes"],
    outcome: "Led scoping, planning and delivery of a mobile-first app that streamlined facility operations.",
    tags: ["PWA", "Mobile-first", "QR codes"],
  },
  {
    title: "Security desk PWA",
    summary: "Visitor verification, check-in/check-out tracking and blocking for security staff.",
    problem: "Security staff needed a fast, reliable way to verify and track every visitor.",
    thinking: "At a security desk, the right answer has to be one tap away.",
    flow: ["Verify the visitor", "Check in", "Track the visit", "Check out or block"],
    outcome: "A dedicated tool that strengthened day-to-day security operations.",
    tags: ["PWA", "Mobile-first"],
  },
  {
    title: "Faster fintech apps",
    summary: "Refactoring legacy React code for the NuRupi and EPL fintech apps.",
    problem: "Legacy code was slowing the apps down and making changes risky.",
    thinking: "Performance and maintainability usually share the same fix: clearer state.",
    flow: ["Untangle legacy code", "Context API for state", "Memoization", "Custom hooks"],
    outcome: "20% faster load times and a codebase that's easier to maintain.",
    tags: ["React", "Context API", "Performance"],
  },
  {
    title: "Web3 storefronts",
    summary: "Frontends for Shiseido's NFT app, Dvin's wine marketplace and GetMojito's website.",
    problem: "Web3 products have to feel as smooth as any normal store, wallets and all.",
    thinking: "Users shouldn't feel the blockchain. They should feel a fast, polished store.",
    flow: ["Server-side rendering", "GraphQL data", "Wallet + marketplace SDKs", "Polished animations"],
    outcome: "30% faster page loads on Shiseido with Next.js SSR.",
    tags: ["Next.js", "GraphQL", "Web3"],
  },
];

// TODO: add the real details: why the rebuild was needed, key decisions, results
export const CASE_STUDY = {
  label: "Nectar IT · IoT platform · Led end to end",
  title: "Rebuilding the dashboard people check every day",
  blocks: [
    {
      heading: "The brief",
      body: "Move the platform's dashboard from React to Next.js, and use the rebuild to rethink the experience instead of just porting it.",
    },
    {
      heading: "Design first",
      body: "The project started with UX design exploration, not code. I worked out the layouts, themes and interactions before building them.",
    },
    {
      heading: "What shipped",
      body: "New themes, interactive widgets, alarms configuration, scheduler setup and 3D views of the data.",
    },
    {
      heading: "My role",
      body: "I led the full lifecycle, from design exploration and planning through to the production rollout.",
    },
  ],
  tags: ["Next.js", "React", "UX design", "3D", "Data visualization"],
};

export const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "GraphQL",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Prisma",
  "Firebase",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "Chart.js",
  "PWA",
];

export const PROJECTS = [
  {
    name: "Airbnb Clone",
    image: "/projects/project6.png",
    description: "Create and book reservations and properties.",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "NextAuth"],
    link: "https://air-bnb-clone-sooty-three.vercel.app/",
    source: "https://github.com/SanthoshPrabhakaranS/airbnb-clone",
  },
  {
    name: "Shopeee",
    image: "/projects/project1.png",
    description: "E-commerce store for fashion pieces.",
    tags: ["Next.js", "Redux Toolkit", "Express", "MongoDB"],
    link: "https://shopieeee.vercel.app/",
    source: "https://github.com/SanthoshPrabhakaranS/e-commerce",
  },
  {
    name: "Real Estate Application",
    image: "/projects/project5.png",
    description: "Browse and book properties.",
    tags: ["React", "Material UI", "Zustand", "Express", "Prisma"],
    link: "https://real-estate-site-url.vercel.app/",
    source: "https://github.com/SanthoshPrabhakaranS/real-estate-site",
  },
  {
    name: "Blogging Application",
    image: "/projects/project3.png",
    description: "Write and publish articles.",
    tags: ["Next.js", "Prisma", "MongoDB", "NextAuth", "React Query"],
    link: "https://blog-a9jwavsue-santhoshprabhakarans.vercel.app/",
    source: "https://github.com/SanthoshPrabhakaranS/blog-app",
  },
  {
    name: "Chat Application",
    image: "/projects/project4.png",
    description: "Group chat with your friends in real time.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://chat-app-ffced.web.app/",
    source: "https://github.com/SanthoshPrabhakaranS/firebase-chat-app",
  },
  {
    name: "Authentication App",
    image: "/projects/project7.png",
    description: "NextAuth v5 with client and server actions.",
    tags: ["Next.js 14", "TypeScript", "NextAuth v5"],
    link: "https://next-auth-v5-26tr-p742udv9q-santhoshprabhakarans.vercel.app/",
    source: "https://github.com/SanthoshPrabhakaranS/next-auth-v5",
  },
  {
    name: "Hangman",
    image: "/projects/project2.png",
    description: "Word-guessing game with English words.",
    tags: ["React", "TypeScript"],
    link: "https://santhoshprabhakarans.github.io/hang-man-game/",
    source: "https://github.com/SanthoshPrabhakaranS/hang-man-game",
  },
];

export const EXPERIENCE = [
  {
    company: "Nectar IT",
    role: "Software Engineer",
    duration: "May 2025 — Present",
    points: [
      "Led the dashboard revamp from React to Next.js, from UX exploration to production rollout.",
      "Built a reporting engine (Node.js, TypeScript, Chart.js, ExcelJS) with cron-based delivery and AI insights.",
      "Built energy consumption compliance alarms and PWAs for occupants and security staff.",
    ],
  },
  {
    company: "Ionixx Technologies",
    role: "Programmer",
    duration: "Oct 2022 — May 2025",
    points: [
      "Built web3 frontends for Shiseido, GetMojito and Dvin on Next.js and GraphQL.",
      "Optimized fintech apps NuRupi and EPL, cutting load times by 20%.",
      "Built a cash flow management app with real-time dashboards and payments.",
    ],
  },
  {
    company: "Aequalis Software Solutions",
    role: "React Developer Intern",
    duration: "Jul 2022 — Oct 2022",
    points: ["Contributed to Nerkathir, a web app for managing farmer and crop details."],
  },
];

export const TOOLS = [
  { logo: siNextdotjs, name: "Next.js", category: "React framework" },
  { logo: siReact, name: "React", category: "UI library" },
  { logo: siTypescript, name: "TypeScript", category: "Typed JavaScript" },
  { logo: siTailwindcss, name: "Tailwind CSS", category: "Utility-first styling" },
  { logo: siMui, name: "MUI", category: "Component library" },
  { logo: siNodedotjs, name: "Node.js", category: "JavaScript runtime" },
  { logo: siExpress, name: "Express", category: "Backend framework" },
  { logo: siGraphql, name: "GraphQL", category: "API query language" },
  { logo: siPrisma, name: "Prisma", category: "TypeScript ORM" },
  { logo: siPostgresql, name: "PostgreSQL", category: "Relational database" },
  { logo: siSupabase, name: "Supabase", category: "Postgres platform" },
  { logo: siMongodb, name: "MongoDB", category: "Document database" },
  { logo: siFirebase, name: "Firebase", category: "Realtime & hosting" },
  { logo: siClaude, name: "Claude", category: "AI-assisted development" },
];
