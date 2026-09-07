export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    name: "Master Degree - Intelligence Artificielle Appliquée",
    issuer: "University of Boumerdes",
    date: "2025 - 2027",
    icon: "school",
    color: "#5DE6FF",
    url: "",
  },
  {
    name: "Bachelor Degree - Ingénieur Système d’Information et Logiciel",
    issuer: "University of Boumerdes",
    date: "2022 - 2025",
    icon: "school",
    color: "#1D4ED8",
    url: "",
  },
  {
    name: "NVIDIA Deep Learning",
    issuer: "NVIDIA",
    date: "Apr 2026",
    icon: "/resources/icons/nvidia.png",
    color: "#76B900",
    url: "",
  },
  {
    name: "Bitup Deep Learning Bootcamp",
    issuer: "DevUp",
    date: "Apr 2026",
    icon: "/resources/icons/devUp.png",
    color: "#5DE6FF",
    url: "",
  },
  {
    name: "Forsatic Hackathon",
    issuer: "Algérie Télécom",
    date: "Dec 2025",
    icon: "emoji_events",
    color: "#F97316",
    url: "",
  },
  {
    name: "Artificial Intelligence Bootcamp",
    issuer: "DevUp",
    date: "Feb 2025",
    icon: "/resources/icons/devUp.png",
    color: "#5DE6FF",
    url: "",
  },
];