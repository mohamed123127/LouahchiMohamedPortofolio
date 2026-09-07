export interface AboutBadge {
  label: string;
  sublabel: string;
  icon: string;
}

export interface AboutData {
  headline: string;
  description1: string;
  description2: string;
  badges: AboutBadge[];
  cta: { label: string; href: string };
}

export const aboutData: AboutData = {
  headline: "More Than Just Code",
  description1:
    "I'm a software engineer from Algeria, passionate about building useful products and learning new technologies. I enjoy working on full-stack projects, solving complex problems, and collaborating with great people.",
  description2:
    "My goal is to create impactful software, continuously improve, and contribute to meaningful projects.",
  badges: [
    { label: "Algeria", sublabel: "Based in", icon: "FiMapPin" },
    { label: "Master's in CS", sublabel: "Ongoing", icon: "FiBook" },
    { label: "Open to work", sublabel: "Freelance / Part-time", icon: "FiHeart" },
  ],
  cta: { label: "Get In Touch", href: "#contact" },
};
