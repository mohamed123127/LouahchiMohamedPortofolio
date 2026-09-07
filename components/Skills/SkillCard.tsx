"use client";

import { useState } from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export default function SkillCard({ name, icon, color }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? color : "var(--border)",
        boxShadow: isHovered ? `0 6px 20px ${color}22` : "none",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
      className="bg-[var(--card)] border rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-default transition-all duration-200 min-w-[90px]"
    >
      <div
        style={{ color: color }}
        className="text-3xl flex items-center justify-center transition-transform duration-200"
      >
        {icon}
      </div>
      <p className="text-xs font-semibold text-[var(--text-secondary)] text-center leading-tight">
        {name}
      </p>
    </div>
  );
}
