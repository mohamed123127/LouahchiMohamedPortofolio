"use client";

import React from "react";
import {
  FiShield,
  FiLayers,
  FiZap,
  FiCpu,
  FiCheckCircle,
  FiCode,
} from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import CodeExampleBlock from "./CodeExampleBlock";
import { ChallengeItem, CodeSnippet } from "@/constants/allInOneProject";

// ─── Challenge accent colors ──────────────────────────────────────────────────
const challengeAccents = [
  { bg: "bg-blue-500/10", text: "text-blue-500" },
  { bg: "bg-purple-500/10", text: "text-purple-500" },
  { bg: "bg-emerald-500/10", text: "text-emerald-500" },
  { bg: "bg-amber-500/10", text: "text-amber-500" },
];

const challengeIcons = [FiShield, FiLayers, FiZap, FiCpu];

// ─── Props ────────────────────────────────────────────────────────────────────
interface ChallengesAndCodeProps {
  challenges: ChallengeItem[];
  whatILearned: string[];
  codeSnippets: CodeSnippet[];
  className?: string;
}

export default function ChallengesAndCode({
  challenges,
  whatILearned,
  codeSnippets,
  className = "",
}: ChallengesAndCodeProps) {
  return (
    <div className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}>
      <SectionHeader icon={FiCode} title="Code Examples, Challenges & Solutions" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        {/* ── LEFT: Tabbed Code Block ── */}
        <div className="col-span-12 md:col-span-8">
          <CodeExampleBlock snippets={codeSnippets} />
        </div>

        {/* ── RIGHT: Challenges & Solutions + What I Learned ── */}
        <div className="col-span-12 md:col-span-4 space-y-4">

          {/* Challenges & Solutions */}
          <div>
            <span className="text-[0.68rem] font-extrabold uppercase tracking-widest text-[var(--text-muted)] block mb-3 text-center sm:text-left">
              Challenges &amp; Solutions
            </span>
            <div className="space-y-2.5">
              {challenges.map((item, idx) => {
                const CIcon = challengeIcons[idx % challengeIcons.length];
                const { bg, text } = challengeAccents[idx % challengeAccents.length];
                return (
                  <div
                    key={idx}
                    className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-3 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3"
                  >
                    <div
                      className={`w-7 h-7 rounded-lg ${bg} ${text} flex items-center justify-center shrink-0 mt-0.5`}
                    >
                      <CIcon size={13} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[var(--text-primary)] mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[0.66rem] text-[var(--text-muted)] leading-relaxed mb-1">
                        <span className="font-semibold text-[var(--text-secondary)]">Problem: </span>
                        {item.challenge}
                      </p>
                      <p className="text-[0.66rem] text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-semibold text-[var(--primary)]">Solution: </span>
                        {item.solution}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What I Learned */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4">
            <span className="text-[0.68rem] font-extrabold uppercase tracking-widest text-[var(--text-muted)] block mb-3">
              What I Learned
            </span>
            <ul className="space-y-2">
              {whatILearned.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <FiCheckCircle size={13} className="text-[var(--success)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
