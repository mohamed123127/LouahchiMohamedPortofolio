import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/constants";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] py-7">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Copyright */}
          <p className="text-xs text-[var(--text-muted)] text-center">
            © {year} Mohamed Louahchi. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5">
            {socialLinks.map(({ icon, href, label }) => {
              const Icon = iconMap[icon];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                >
                  {Icon && <Icon size={14} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
