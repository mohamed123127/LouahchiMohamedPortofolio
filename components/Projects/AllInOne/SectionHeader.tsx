"use client";

import React from "react";

interface SectionHeaderProps {
  icon: React.ElementType;
  title: string;
  className?: string;
}

export default function SectionHeader({ icon: Icon, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-2.5 mb-5 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-[var(--primary-soft)] flex items-center justify-center shrink-0">
        <Icon size={16} className="text-[var(--primary)]" />
      </div>
      <h2 className="text-base sm:text-lg font-black text-[var(--text-primary)] tracking-tight">
        {title}
      </h2>
    </div>
  );
}
