"use client";

import React from "react";
import { FiCode } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

interface TechnicalOverviewProps {
  overview: string;
  className?: string;
}

export default function TechnicalOverview({ overview, className = "" }: TechnicalOverviewProps) {
  return (
    <div className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}>
      <SectionHeader icon={FiCode} title="Technical Overview" />
      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
        {overview}
      </p>
    </div>
  );
}
