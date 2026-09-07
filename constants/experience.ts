export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    role: "Freelance Full Stack Software Engineer",
    company: "Freelance",
    location: "Remote",
    period: "2023 – Present",
    current: true,
    bullets: [
      "Worked on multiple freelance projects using modern web and desktop technologies.",
      "Built scalable systems, e-commerce platforms, management systems, and responsive user interfaces for different clients and business needs.",
      "Technologies: Next.js, React, NestJS, Laravel, .NET, WPF, SQL Server, PostgreSQL, MySQL and etc.",
    ],
  },
  {
    role: "WPF .NET Developer",
    company: "Super-Soft Startup",
    location: "Algeria",
    period: "Dec 2025 – Feb 2026",
    current: false,
    bullets: [
      "Contributed to the development of an advanced pharmacy management system named SuperPharm.",
      "Applied SOLID principles, design patterns, and clean architecture practices while developing scalable desktop application features.",
      "Technologies: .NET and WPF.",
    ],
  },
];