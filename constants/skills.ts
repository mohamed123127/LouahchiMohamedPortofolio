export type SkillCategory =
  | "frontend"
  | "backend"
  | "desktop"
  | "mldl"
  | "tools"
  | "principles";

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface CategorisedSkill extends Skill {
  category: SkillCategory;
}

export interface CategoryTab {
  id: "all" | SkillCategory;
  label: string;
}

export const favoriteSkills: Skill[] = [
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "NestJS", icon: "SiNestjs", color: "#E0234E" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
];

export const principles: string[] = [
  "Clean Architecture",
  "MVC & MVVM",
  "SOLID Principles",
  "Design Patterns",
  "DRY & SSOT Principles",
  "Clean Code",
  "RESTful APIs",
  "Microservices Architecture",
  "Agile / Scrum",
];

export const allSkills: CategorisedSkill[] = [
  // Frontend
  {
    name: "React",
    icon: "SiReact",
    color: "#61DAFB",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "SiNextdotjs",
    color: "#000000",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "SiTypescript",
    color: "#3178C6",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "#06B6D4",
    category: "frontend",
  },
  {
    name: "Redux",
    icon: "SiRedux",
    color: "#764ABC",
    category: "frontend",
  },
  {
    name: "Zustand",
    icon: "/resources/icons/zustand.png",
    color: "#443E38",
    category: "frontend",
  },
  {
    name: "TanStack Query",
    icon: "SiReactquery",
    color: "#FF4154",
    category: "frontend",
  },
  {
    name: "MUI",
    icon: "SiMui",
    color: "#007FFF",
    category: "frontend",
  },
  {
    name: "shadcn/ui",
    icon: "SiShadcnui",
    color: "#000000",
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: "SiNodedotjs",
    color: "#339933",
    category: "backend",
  },
  {
    name: "NestJS",
    icon: "SiNestjs",
    color: "#E0234E",
    category: "backend",
  },
  {
    name: "Django",
    icon: "SiDjango",
    color: "#092E20",
    category: "backend",
  },
  {
    name: "Laravel",
    icon: "SiLaravel",
    color: "#FF2D20",
    category: "backend",
  },
  {
    name: ".NET Core",
    icon: "SiDotnet",
    color: "#512BD4",
    category: "backend",
  },
  {
    name: "TypeORM",
    icon: "SiTypeorm",
    color: "#FE0803",
    category: "backend",
  },
  {
    name: "Entity Framework",
    icon: "SiDotnet",
    color: "#512BD4",
    category: "backend",
  },
  {
    name: "JWT",
    icon: "SiJsonwebtokens",
    color: "#000000",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: "SiPostgresql",
    color: "#4169E1",
    category: "backend",
  },
  {
    name: "MySQL",
    icon: "SiMysql",
    color: "#4479A1",
    category: "backend",
  },
  {
    name: "SQL Server",
    icon: "DiMsqlServer",
    color: "#CC2927",
    category: "backend",
  },
  {
    name: "Docker",
    icon: "SiDocker",
    color: "#2496ED",
    category: "backend",
  },

  // Desktop
  {
    name: "Electron.js",
    icon: "SiElectron",
    color: "#47848F",
    category: "desktop",
  },
  {
    name: "WPF",
    icon: "/resources/icons/WPF.png",
    color: "#512BD4",
    category: "desktop",
  },
  {
    name: "WinForms",
    icon: "/resources/icons/WinForms.png",
    color: "#512BD4",
    category: "desktop",
  },

  // AI / Machine Learning
  {
    name: "Model Fine-Tuning",
    icon: "FaBrain",
    color: "#8B5CF6",
    category: "mldl",
  },
  {
    name: "NLP",
    icon: "FaLanguage",
    color: "#3B82F6",
    category: "mldl",
  },
  {
    name: "Computer Vision",
    icon: "FaEye",
    color: "#10B981",
    category: "mldl",
  },
  {
    name: "AI Agents",
    icon: "FaRobot",
    color: "#6366F1",
    category: "mldl",
  },
  {
    name: "PyTorch",
    icon: "SiPytorch",
    color: "#EE4C2C",
    category: "mldl",
  },
  {
    name: "OpenAI API",
    icon: "TbBrandOpenai",
    color: "#412991",
    category: "mldl",
  },
  {
    name: "LangChain",
    icon: "SiLangchain",
    color: "#1C3C3C",
    category: "mldl",
  },

  // Tools & Workflow
  {
    name: "Git",
    icon: "SiGit",
    color: "#F05032",
    category: "tools",
  },
  {
    name: "GitHub",
    icon: "SiGithub",
    color: "#181717",
    category: "tools",
  },
  {
    name: "GitLab",
    icon: "SiGitlab",
    color: "#FC6D26",
    category: "tools",
  },
  {
    name: "Postman",
    icon: "SiPostman",
    color: "#FF6C37",
    category: "tools",
  },
  {
    name: "Figma",
    icon: "SiFigma",
    color: "#F24E1E",
    category: "tools",
  },
  {
    name: "Jira",
    icon: "SiJira",
    color: "#0052CC",
    category: "tools",
  },
  {
    name: "Azure DevOps",
    icon: "VscAzureDevops",
    color: "#0078D7",
    category: "tools",
  },

  // Principles & Architecture
  {
    name: "Clean Architecture",
    icon: "FaCubes",
    color: "#2563EB",
    category: "principles",
  },
  {
    name: "MVC & MVVM",
    icon: "FaLayerGroup",
    color: "#6366F1",
    category: "principles",
  },
  {
    name: "SOLID Principles",
    icon: "FaCode",
    color: "#22C55E",
    category: "principles",
  },
  {
    name: "Design Patterns",
    icon: "FaTools",
    color: "#9333EA",
    category: "principles",
  },
  {
    name: "DRY & SSOT Principles",
    icon: "FaCheckDouble",
    color: "#EAB308",
    category: "principles",
  },
  {
    name: "Clean Code",
    icon: "FaCode",
    color: "#10B981",
    category: "principles",
  },
  {
    name: "RESTful APIs",
    icon: "FaNetworkWired",
    color: "#06B6D4",
    category: "principles",
  },
  {
    name: "Microservices Architecture",
    icon: "FaServer",
    color: "#0EA5E9",
    category: "principles",
  },
  {
    name: "Agile / Scrum",
    icon: "FaSyncAlt",
    color: "#F97316",
    category: "principles",
  },
];

export const categoryTabs: CategoryTab[] = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "desktop", label: "Desktop" },
  { id: "mldl", label: "AI / ML" },
  { id: "tools", label: "Tools & Workflow" },
  { id: "principles", label: "Concepts & Architecture" },
];