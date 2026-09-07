export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export interface Contact {
  icon: string;
  label: string;
  value: string;
}

export const socialLinks: SocialLink[] = [
  { icon: "FaGithub", href: "https://github.com/mohamed123127", label: "GitHub" },
  { icon: "FaLinkedin", href: "https://www.linkedin.com/in/mohamed-louahchi-55aba3238/", label: "LinkedIn" },
];

export const contactInfo: Contact[] = [
  { icon: "FaEnvelope", label: "Email:", value: "mohamedlouahchi9@gmail.com" },
  { icon: "FiPhone", label: "Phone:", value: "+213 775 349 115" },
  { icon: "FiMapPin", label: "Location:", value: "Algeria" },
];
