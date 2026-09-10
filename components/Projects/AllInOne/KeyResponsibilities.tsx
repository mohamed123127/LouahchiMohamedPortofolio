"use client";

import React from "react";
import { FiCpu, FiCheckCircle } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

interface KeyResponsibilitiesProps {
  responsibilities: string[];
  className?: string;
}

export default function KeyResponsibilities({
  responsibilities,
  className = "",
}: KeyResponsibilitiesProps) {
  return (
    <div className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}>
      <SectionHeader icon={FiCpu} title="Key Responsibilities" className="mb-4" />

      <ul className="space-y-2.5">
        {responsibilities.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
            <FiCheckCircle size={14} className="text-[var(--primary)] mt-0.5 shrink-0" />
            <span className="leading-relaxed font-medium text-[var(--text-primary)]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
