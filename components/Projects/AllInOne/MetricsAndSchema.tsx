"use client";

import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

interface StatItem {
  value: string;
  label: string;
  description?: string;
}

interface MetricsAndSchemaProps {
  stats: StatItem[];
  className?: string;
}

export default function MetricsAndSchema({ stats, className = "" }: MetricsAndSchemaProps) {
  return (
    <div className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}>
      <SectionHeader icon={FiBarChart2} title="Project Metrics" className="mb-4" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-3.5 text-center hover:border-[var(--primary)]/40 transition-colors"
          >
            <div className="text-xl sm:text-2xl font-black text-[var(--primary)]">{stat.value}</div>
            <div className="text-[0.7rem] font-bold text-[var(--text-primary)] leading-snug mt-1">
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-[0.62rem] text-[var(--text-muted)] mt-0.5 font-medium">
                {stat.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
