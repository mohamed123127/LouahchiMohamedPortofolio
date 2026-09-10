"use client";

import React from "react";
import { FiLayers } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

interface TechStackSection {
  heading: string;
  items: readonly string[];
}

interface TechStackCardProps {
  sections: TechStackSection[];
  className?: string;
}

export default function TechStackCard({ sections, className = "" }: TechStackCardProps) {
  return (
    <div className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}>
      <SectionHeader icon={FiLayers} title="Tech Stack" />
      <div className="space-y-4">
        {sections.map(({ heading, items }) => (
          <div key={heading}>
            <span className="text-[0.68rem] font-extrabold uppercase tracking-widest text-[var(--text-muted)] block mb-2">
              {heading}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[0.72rem] font-semibold text-[var(--text-primary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
