"use client";

import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  url?: string;
}

export default function CertificationCard({
  name,
  issuer,
  date,
  icon,
  color,
  url,
}: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const Component = url ? "a" : "div";
  const extraProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Component
      {...extraProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? color : "var(--border)",
        boxShadow: isHovered ? `0 4px 16px ${color}22` : "none",
        transform: isHovered ? "translateX(4px)" : "translateX(0)",
      }}
      className={`bg-[var(--card)] border rounded-xl p-3.5 flex items-center gap-3.5 no-underline transition-all duration-200 ${
        url ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Icon */}
      <div
        style={{
          background: `${color}18`,
          color: color,
        }}
        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-snug line-clamp-2 mb-1">
          {name}
        </h4>
        <div className="flex items-center justify-between gap-2 text-xs font-medium text-[var(--text-secondary)]">
          <span className="truncate">{issuer}</span>
          <span className="text-[11px] text-[var(--text-muted)] shrink-0 font-normal">
            {date}
          </span>
        </div>
      </div>

      {/* External Link Icon */}
      {url && (
        <div className="shrink-0 pl-1">
          <FiExternalLink size={13} className="text-[var(--text-muted)]" />
        </div>
      )}
    </Component>
  );
}
