export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  period: string;
  featured?: boolean;
  isBuilding?: boolean;
}

export const projects: Project[] = [
  {
    title: "University Request Management System",
    description:
      "A digital platform that streamlines student requests and improves administrative processing. It supports multilingual access, notifications, PDF request delivery, and complaint handling with admin statistics.",
    image:
      "/resources/images/Projects/University-Request-Management-System/main.png",
    tags: ["React", "Tailwind CSS", "PHP", "MySQL"],
    liveUrl: "/Projects/UniversityRequestManagementSystem",
    repoUrl: "",
    period: "Dec 2025 - Mar 2026",
  },
  {
    title: "All-in-One Business Suite Saas",
    description:
      "A large-scale multi-platform inventory and sales system for web and desktop with order tracking, shipping API integrations, and real-time synchronization.",
    image:
      "/resources/images/Projects/All-in-OneBusinessSuiteSaas/Main.png",
    tags: ["WPF", ".NET Core", "Next.js", "Tailwind CSS", "SQL Server"],
    liveUrl: "/Projects/EasyEcommerce",
    repoUrl: "",
    period: "Aug 2026 - Present",
    isBuilding: true,
    featured: true,

  },
  {
    title: "Ecommerce Store",
    description:
      "A full-featured ecommerce platform with advanced filtering, wishlist, cart system, checkout flow, and shipping integration.",
    image:
      "/resources/images/Projects/Ecommerce-Store/main.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Laravel",
      "MySQL",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/mohamed123127/ClotingStore",
    period: "Juin 2026 - Sep 2026",
  },
];