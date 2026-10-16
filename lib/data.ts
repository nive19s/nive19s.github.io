import { image } from "framer-motion/client";

// All site content lives here — edit text without touching components
export const profile = {
  name: "Nivethan Sothilingam",
  short: "Nivethan",
  role: "Full-Stack Software Engineer",
  email: "sothilingamnivethan19@gmail.com",
  phone: "+94 75 220 7183",
  location: "Colombo, Jaffna Sri Lanka",
  github: "https://github.com/nive19s",
  linkedin: "https://www.linkedin.com/in/nivethan-sothilingam-a52836247/",
  cv: "/Nivethan-Sothilingam-CV.pdf",
  // Hero one-liner: what I do + proof
  pitch: "I build production-grade web platforms with .NET, Angular and Next.js — from database design to polished, animated interfaces.",
};

export const stats = [
  { value: "6+", label: "Projects shipped" },
  { value: "4", label: "SSO & auth providers" },
  { value: "15+", label: "Repos refactored" },
];

// About section content
export const about = {
  paragraph:
    "I'm a Computer Science graduate from the University of Colombo School of Computing who loves turning complex requirements into simple, fast products. I've worked on a production platform at Boffo System Labs, delivered a client website from discovery to hosting, and built side projects with AI and LLMs. I care about clean architecture, thoughtful UI and shipping things people actually use.",
  facts: [
    { k: "Based in", v: "Colombo, Sri Lanka" },
    { k: "Focus", v: "Full-stack web · Cloud · AI integrations" },
    { k: "Education", v: "BSc. Computer Science, UCSC" },
    { k: "Languages", v: "English, Tamil" },
    { k: "Currently", v: "Open to Software Engineer roles" },
  ],
};

export type Project = {
  title: string; type: string; year: string; stack: string[]; desc: string;
  overview: string; highlights: string[];
  links: { label: string; href: string }[];
  images?: string[]; // add screenshots in /public/images/projects/… and list them here
  cover?: string; // card background image
};

export const projects: Project[] = [
  { title: "Dominion Wing", cover: "/images/projects/DW_Landing.webp", type: "Client Website · Live", year: "Jul – Aug 2026", stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    desc: "Freelance company website delivered end-to-end, from discovery to live handover.",
    overview: "A company website built with two fellow developers for a real client. We ran client discovery, designed the experience, built it with a motion-rich Next.js stack, then deployed and handed it over.",
    highlights: ["Client discovery through design and development", "Deployed and hosted on Hostinger with production environment settings", "Handed the finished, live site over to the client"],
    links: [{ label: "Visit live site", href: "https://dominionwing.com/" }],
  images: [
  "/images/projects/DW_Landing.webp",
  "/images/projects/DW_Landing2.webp",
  "/images/projects/DW_Landing3.webp",],
  },
  { title: "Expense Tracker", type: "AI-Powered Platform", year: "Aug 2025", stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js", "Neon", "Prisma", "Clerk"],
    desc: "AI expense tracking with smart categorisation and a real-time analytics dashboard.",
    overview: "An expense tracking system that classifies spending automatically and turns your data into financial insights, backed by secure authentication and live charts.",
    highlights: ["DeepSeek AI via OpenRouter for insights and automatic classification", "Clerk authentication and Prisma + Neon (PostgreSQL) data layer", "Real-time analytics dashboard with Chart.js"],
    links: [{ label: "GitHub", href: "https://github.com/nive19s/next-expense-tracker" }], 
    images: [
    "/images/projects/Expense_tracker_landing.webp",
    "/images/projects/Expense_tracker2.webp",
    ],
  },
  { title: "BookHive", type: "Full-Stack Platform", year: "May – Oct 2025", stack: ["React.js", "Tailwind CSS", "Spring Boot", "Supabase", "PostgreSQL"],
    desc: "Book buying, lending and bidding platform with community features.",
    overview: "A full-stack marketplace for exchanging, borrowing and bidding on books, connecting bookstores and readers.",
    highlights: ["Dashboards, inventory management and order modules", "Book exchange, borrowing and bidding flows", "Community features such as book circles"],
    links: [{ label: "Frontend repo", href: "https://github.com/Benshekniel/BookHiveFrontend" }, { label: "Backend repo", href: "https://github.com/Benshekniel/BookHiveBackend" }],
    images: [
    "/images/projects/BookHV_landing.webp",
    "/images/projects/BookHV2.webp",
    "/images/projects/BookHV3.webp",
    ],
  },
  { title: "TerraFit", type: "Mobile App", year: "Mar – Apr 2026", stack: ["React Native", "Node.js", "Supabase"],
    desc: "Cross-platform mobile app with auth, profiles and dashboards.",
    overview: "A React Native mobile application backed by a Node.js API and Supabase, packaged as APK builds for testing on real devices.",
    highlights: ["Authentication, profile management and dashboard features", "Backend API integration", "APK builds for local and external network deployment"],
    links: [{ label: "GitHub profile", href: "https://github.com/nive19s" }],
    images: [
  "/images/projects/terafit.webp",],
  },
  { title: "LaunchPad", type: "Internship Platform", year: "Jun 2024 – Apr 2025", stack: ["HTML", "CSS", "JavaScript", "PHP", "PostgreSQL"],
    desc: "Multi-role internship management for the UCSC Professional Development Centre.",
    overview: "A team project that manages the internship lifecycle for students, companies and coordinators at UCSC.",
    highlights: ["Student management and company approvals", "Interview and scheduling workflows", "Complaint handling"],
    links: [{ label: "GitHub", href: "https://github.com/group-project-cs46/website" }],
    images: [
    "/images/projects/Launcpad_landing.webp",
    "/images/projects/Launcpad2.webp",
    "/images/projects/Launcpad3.webp",
    ],
  },
  { title: "LIBO", type: "Library System", year: "Sep 2024", stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    desc: "MERN library system for reservations, borrowing and returns.",
    overview: "A full-stack library management system with secure RESTful APIs and digital records for every request.",
    highlights: ["Book reservations, borrowing and return tracking", "Authentication and REST APIs", "Digital records of user requests"],
    links: [{ label: "GitHub", href: "https://github.com/Benshekniel/RAD_LIBO" }],
    images: [
  "/images/projects/libo_landing.webp",
  "/images/projects/libo_dashboard.webp",
  "/images/projects/libo2.webp",],
  },
];

// Work timeline. `logo` optional: put a file in /public/images and set e.g. "/images/boffo.webp"
export const jobs = [
  { company: "Boffo System Labs", role: "Software Engineer Intern", period: "Dec 2025 — May 2026", logo: "/images/Boffo_sys_logo.webp",
    product: "GroomEase — multi-role grooming service management platform (Angular, .NET Core, PostgreSQL)",
    points: [
      "Implemented JWT authentication plus Microsoft Entra ID, Google and Facebook SSO.",
      "Migrated raw SQL into PostgreSQL functions and procedures across 15+ repositories.",
      "Built phone number registration, webhook-based payment notifications and custom report generation.",
      "Delivered responsive user flows across the platform.",
      "Wrote SRS, Software Design Documents, architecture and activity diagrams, and change management docs.",
      "Wrote unit tests, prepared QA release binaries and resolved bugs with QA engineers.",
      "Planned sprints in Azure Boards and deployed applications to Microsoft Azure.",
      "Built a React Native demo app with a Node.js backend and Supabase database.",
    ],
    tags: ["Angular", ".NET Core", "PostgreSQL", "Azure", "JWT", "SSO"] },
  { company: "Dominion Wing", role: "Freelance Developer", period: "Jul — Aug 2026", logo: "/images/Dominion_logo.webp",
    product: "Client company website, with two fellow developers",
    points: ["Led client discovery through design and development.", "Deployed and hosted on Hostinger and handed over the live site."],
    tags: ["Next.js", "TypeScript", "Tailwind", "GSAP", "Framer Motion"] },
];

export const education = [
  { school: "University of Colombo School of Computing", detail: "BSc. in Computer Science", period: "Jul 2022 — Aug 2026", logo: "/images/logo_ucsc.webp" },
  { school: "Jaffna Hindu College", detail: "GCE A/L — Physical Science", period: "Jan 2012 — Aug 2020", logo: "/images/logo_jhc.webp" },
];

export const certifications = [
  { name: "Introduction to Cloud 101", issuer: "Amazon Web Services Training", href: "https://www.credly.com/badges/7676b955-6cb0-4e8c-b98c-dc89164ad2fd" },
  { name: "Spring Boot Foundations", issuer: "Packt · Coursera", href: "https://www.coursera.org/account/accomplishments/verify/E1B7HZ9TUZW7" },
];

// Technologies, grouped
export const techGroups = [
  { title: "Languages", items: ["C#", "JavaScript", "TypeScript", "Java", "Python", "PHP", "C"] },
  { title: "Frontend", items: ["Next.js", "React.js", "Angular", "Tailwind CSS", "GSAP", "Framer Motion"] },
  { title: "Backend", items: [".NET Core", "Entity Framework Core", "LINQ", "Node.js", "Express.js", "Spring Boot"] },
  { title: "Databases", items: ["PostgreSQL", "MSSQL", "MySQL", "MongoDB", "Prisma", "Supabase"] },
  { title: "Cloud & DevOps", items: ["Microsoft Azure", "Azure DevOps", "Docker", "GitHub", "Hostinger"] },
  { title: "Concepts", items: ["REST APIs", "Web API", "MVC", "JWT & SSO", "OOP", "Layered Architecture", "Dependency Injection", "Agile / Scrum"] },
];

export const tools = ["VS Code", "Visual Studio", "IntelliJ IDEA", "Android Studio", "Postman", "Figma", "GitHub", "Azure Boards", "Docker"];

export const marquee = ["Next.js", "TypeScript", "React", "Angular", ".NET Core", "Tailwind CSS", "Node.js", "Spring Boot", "PostgreSQL", "Azure", "Docker", "Prisma", "Supabase", "Figma"];

export const navLinks = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" }, { label: "Skills", href: "#skills" }, { label: "Contact", href: "#contact" },
];
