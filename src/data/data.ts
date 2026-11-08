export const PROFILE = {
  name: "Santhosh Prabhakaran",
  initials: "SP",
  photo: "/profile.jpg" as string | null,
  bio: "Full Stack Developer building IoT dashboards, PWAs and web apps that feel fast.",
  intro:
    "I design and ship web products end to end, from dashboards and reporting engines to mobile-first PWAs and web3 frontends. Currently building IoT applications at Nectar IT.",
  email: "santhoshprabhakaran02@gmail.com",
  location: "Coimbatore, India",
  social: {
    linkedin: "https://www.linkedin.com/in/-santhosh-dev/",
    github: "https://github.com/SanthoshPrabhakaranS",
  },
};

export const STATS = [
  { value: "+4", label: "Years of experience" },
  { value: "+12", label: "Projects shipped" },
  { value: "3", label: "Companies" },
];

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

export const WORK_HIGHLIGHTS = [
  {
    name: "Building Dashboard Revamp",
    badge: "IoT",
    gradient: "linear-gradient(135deg,#8b5cf6,#4c1d95)",
    description: "React → Next.js rebuild with themes, widgets, alarms, scheduler and 3D views.",
    tags: ["Next.js", "3D", "UX"],
  },
  {
    name: "AI Reporting Engine",
    badge: "XLS",
    gradient: "linear-gradient(135deg,#10b981,#065f46)",
    description: "Automated Excel reports with charts and OpenAI-generated insights, delivered on schedule.",
    tags: ["Node.js", "ExcelJS", "OpenAI"],
  },
  {
    name: "Occupant & Security PWAs",
    badge: "PWA",
    gradient: "linear-gradient(135deg,#f59e0b,#b45309)",
    description: "QR-based service requests, visitor passes, check-in/out and verification for facilities.",
    tags: ["PWA", "Mobile-first"],
  },
  {
    name: "Shiseido Web3",
    badge: "NFT",
    gradient: "linear-gradient(135deg,#ec4899,#831843)",
    description: "NFT application frontend with SSR on Next.js 13.4, with 30% faster page loads.",
    tags: ["Next.js", "Web3", "SSR"],
  },
  {
    name: "Dvin Wine Marketplace",
    badge: "Dvin",
    gradient: "linear-gradient(135deg,#ef4444,#7f1d1d)",
    description: "Blockchain wine bottle sales with wallet and marketplace SDK integrations.",
    tags: ["Next.js 14", "GraphQL", "Web3"],
  },
  {
    name: "NuRupi & EPL Fintech",
    badge: "₹",
    gradient: "linear-gradient(135deg,#3b82f6,#1e3a8a)",
    description: "Legacy React refactor with Context, memoization and custom hooks, with 20% faster loads.",
    tags: ["React", "Performance"],
  },
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
  { icon: "N", name: "Next.js & React", category: "Frontend framework" },
  { icon: "TS", name: "Node.js & TypeScript", category: "Backend & APIs" },
  { icon: "PG", name: "PostgreSQL & Supabase", category: "Databases" },
  { icon: "M", name: "MongoDB & Firebase", category: "NoSQL & realtime" },
  { icon: "TW", name: "Tailwind & Material UI", category: "Styling & components" },
  { icon: "AI", name: "Claude, Cursor & Copilot", category: "AI-assisted development" },
];

// Placeholder posts: replace with real articles or remove
export const POSTS = [
  {
    title: "Migrating a Production Dashboard from React to Next.js",
    excerpt: "What changed, what broke, and what I'd do differently.",
    readTime: "6 min read",
  },
  {
    title: "Generating Excel Reports with Charts in Node.js",
    excerpt: "Using ExcelJS and Chart.js to build reports people actually open.",
    readTime: "5 min read",
  },
  {
    title: "Building PWAs for Facility Management",
    excerpt: "QR codes, visitor passes and offline-friendly mobile UX.",
    readTime: "4 min read",
  },
];
