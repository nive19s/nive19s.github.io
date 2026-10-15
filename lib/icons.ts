import {
  Cloud, Globe, Layers, ShieldCheck, Box, Share2, RefreshCw,
  type LucideIcon,
} from "lucide-react";

// Pinned Devicon version, served from jsDelivr (colored brand SVGs)
const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const dv = (n: string, v = "original") => `${DV}/${n}/${n}-${v}.svg`;
// Simple Icons for brands Devicon lacks
const si = (n: string, hex?: string) =>
  `https://cdn.simpleicons.org/${n}${hex ? `/${hex}` : ""}`;

// Keys must match the strings in lib/data.ts exactly
export const iconUrl: Record<string, string> = {
  // Languages
  "C#": dv("csharp"),
  JavaScript: dv("javascript"),
  TypeScript: dv("typescript"),
  Java: dv("java"),
  Python: dv("python"),
  PHP: dv("php"),
  C: dv("c"),
  // Frontend
  "Next.js": dv("nextjs"),
  "React.js": dv("react"),
  Angular: dv("angular"),
  "Tailwind CSS": dv("tailwindcss"),
  GSAP: si("gsap", "88CE02"),
  "Framer Motion": si("framer", "0055FF"),
  // Backend
  ".NET Core": dv("dotnetcore"),
  "Entity Framework Core": dv("dotnetcore"), // no dedicated icon, reuse .NET
  LINQ: dv("dotnetcore"),
  "Node.js": dv("nodejs"),
  "Express.js": dv("express"),
  "Spring Boot": dv("spring"),
  // Databases
  PostgreSQL: dv("postgresql"),
  MSSQL: dv("microsoftsqlserver"),
  MySQL: dv("mysql"),
  MongoDB: dv("mongodb"),
  Prisma: dv("prisma"),
  Supabase: dv("supabase"),
  // Cloud & DevOps
  "Microsoft Azure": dv("azure"),
  "Azure DevOps": dv("azuredevops"),
  Docker: dv("docker"),
  GitHub: dv("github"),
  Hostinger: si("hostinger", "673DE6"),
  // Tools
  "VS Code": dv("vscode"),
  "Visual Studio": dv("visualstudio", "plain"),
  "IntelliJ IDEA": dv("intellij"),
  "Android Studio": dv("androidstudio"),
  Postman: dv("postman"),
  Figma: dv("figma"),
  "Azure Boards": dv("azuredevops"),
};

// Concepts have no brand logo, so use line icons
export const conceptIcons: Record<string, LucideIcon> = {
  "REST APIs": Cloud,
  "Web API": Globe,
  MVC: Layers,
  "JWT & SSO": ShieldCheck,
  OOP: Box,
  "Layered Architecture": Layers,
  "Dependency Injection": Share2,
  "Agile / Scrum": RefreshCw,
};

// Optional: tool links for the arrow buttons
export const toolLinks: Record<string, string> = {
  "VS Code": "https://code.visualstudio.com",
  "Visual Studio": "https://visualstudio.microsoft.com",
  "IntelliJ IDEA": "https://www.jetbrains.com/idea/",
  "Android Studio": "https://developer.android.com/studio",
  Postman: "https://www.postman.com",
  Figma: "https://www.figma.com",
  GitHub: "https://github.com",
  "Azure Boards": "https://azure.microsoft.com/products/devops/boards",
  Docker: "https://www.docker.com",
};