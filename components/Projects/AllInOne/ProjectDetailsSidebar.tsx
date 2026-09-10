"use client";

import React from "react";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectDetailsData {
  role: string;
  duration: string;
  teamSize: string;
  repository: string;
  liveDemo?: string;
  liveDemoUrl?: string;
  status: string;
}

interface ProjectDetailsSidebarProps {
  details: ProjectDetailsData;
  className?: string;
}

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-start justify-between gap-3 py-2.5 border-b border-[var(--border)] last:border-0">
    <span className="text-xs font-semibold text-[var(--text-muted)] shrink-0 min-w-[90px]">{label}</span>
    <div className="text-xs font-bold text-[var(--text-primary)] text-right">{children}</div>
  </div>
);

export default function ProjectDetailsSidebar({ details, className = "" }: ProjectDetailsSidebarProps) {
  return (
    <div
      className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border)]">
        <div className="w-7 h-7 rounded-lg bg-[var(--primary-soft)] flex items-center justify-center shrink-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <h3 className="font-bold text-sm text-[var(--text-primary)]">Project Details</h3>
      </div>

      {/* Detail Rows */}
      <div>
        <Row label="Role">
          <span>{details.role}</span>
        </Row>

        <Row label="Duration">
          <span>{details.duration}</span>
        </Row>

        <Row label="Team Size">
          <span>{details.teamSize}</span>
        </Row>

        <Row label="Repository">
          <span>{details.repository}</span>
        </Row>

        {details.liveDemoUrl && (
          <Row label="Live Demo">
            <a
              href={details.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline"
            >
              <span>{details.liveDemo || details.liveDemoUrl.replace(/^https?:\/\//, "")}</span>
              <FiExternalLink size={11} />
            </a>
          </Row>
        )}

        <Row label="Status">
          <span className="inline-flex items-center gap-1.5 text-[var(--success)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] inline-block animate-pulse" />
            {details.status}
          </span>
        </Row>
      </div>
    </div>
  );
}
