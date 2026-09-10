"use client";

import React from "react";
import {
  FiEye,
  FiX,
  FiCode,
  FiBriefcase,
  FiCheckCircle,
  FiArrowRight,
  FiRefreshCw,
  FiInfo,
  FiMail,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUrl?: string;
  repoUrl?: string;
  isReadyClientPreview?: boolean;
  isReadyRecruteurPreview?: boolean;
  onSelectMode?: (mode: "recruiter" | "client") => void;
}

export default function ExperienceModal({
  isOpen,
  onClose,
  targetUrl = "/Projects/All-in-OneBusinessSuiteSaas",
  repoUrl,
  isReadyClientPreview = true,
  isReadyRecruteurPreview = true,
  onSelectMode,
}: ExperienceModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleChooseMode = (mode: "recruiter" | "client") => {
    if (mode === "recruiter" && !isReadyRecruteurPreview) {
      return;
    }
    if (mode === "client" && !isReadyClientPreview) {
      return;
    }

    if (onSelectMode) {
      onSelectMode(mode);
    }

    if (targetUrl) {
      if (targetUrl.startsWith("http")) {
        window.open(targetUrl, "_blank");
      } else {
        router.push(`${targetUrl}?mode=${mode}`);
      }
    } else if (mode === "recruiter" && repoUrl) {
      window.open(repoUrl, "_blank");
    }

    onClose();
  };

  const bothUnavailable = !isReadyClientPreview && !isReadyRecruteurPreview;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div
        className="relative w-full max-w-4xl bg-[var(--card)] border border-[var(--border)] rounded-3xl shadow-2xl p-5 sm:p-8 max-h-[92vh] overflow-y-auto text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-full hover:bg-[var(--surface)] transition-colors cursor-pointer z-10"
          aria-label="Close dialogue"
        >
          <FiX size={20} />
        </button>

        {/* Top Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center mx-auto mb-3 border border-[var(--primary)]/20 shadow-xs">
            <FiEye size={24} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Choose Your Experience
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
            How would you like to explore my portfolio?
            <br className="hidden sm:inline" />
            I&apos;ve prepared two views so you can focus on what matters most to you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6">
          {/* Card 1: Technical / Recruiter View */}
          <div className="group relative">
            <div
              onClick={() => handleChooseMode("recruiter")}
              className={`relative bg-[var(--surface)] border-2 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden ${
                !isReadyRecruteurPreview
                  ? "border-[var(--border)] opacity-60 cursor-not-allowed"
                  : "border-[var(--border)] hover:border-[var(--primary)] hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              }`}
            >
              <div>
                {/* Card Header Row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center shrink-0">
                      <FiCode size={18} />
                    </div>
                    <div>
                      <span className="text-[0.65rem] sm:text-[0.7rem] font-black tracking-wider uppercase text-[var(--primary)] block">
                        RECRUITER / ENGINEER
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                        Explore My Technical Work
                      </h3>
                    </div>
                  </div>
                  {!isReadyRecruteurPreview && (
                    <span className="shrink-0 text-[0.65rem] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      Unavailable
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  See how I build software: architecture, technologies, engineering decisions, challenges, code practices, and my role in each project.
                </p>

                {/* Graphical Preview / Tech Stack Floating Badges */}
                <div className="relative w-full h-32 sm:h-36 rounded-xl bg-[var(--card-elevated)] p-3 mb-5 overflow-hidden border border-[var(--border)] shadow-inner flex items-center justify-between">
                  {/* Simulated IDE / Terminal Graphic */}
                  <div className="w-1/2 space-y-1.5 opacity-80">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div className="w-4/5 h-2 rounded bg-[var(--primary)]/40" />
                    <div className="w-3/5 h-2 rounded bg-purple-400/40" />
                    <div className="w-full h-2 rounded bg-[var(--border)]" />
                    <div className="w-2/3 h-2 rounded bg-emerald-400/40" />
                    <div className="w-1/2 h-2 rounded bg-amber-400/40" />
                  </div>

                  {/* Floating Tech Badges (Stack) */}
                  <div className="flex flex-col gap-1.5 shrink-0 z-10">
                    <div className="flex items-center gap-1 bg-[var(--primary)] text-white font-extrabold text-[0.65rem] px-2.5 py-1 rounded-md shadow-md border border-[var(--primary)]/30 transform group-hover:translate-x-[-2px] transition-transform">
                      <span>TS</span>
                    </div>
                    <div className="flex items-center gap-1 bg-cyan-600 text-white font-extrabold text-[0.65rem] px-2.5 py-1 rounded-md shadow-md border border-cyan-400/30 transform group-hover:translate-x-[-4px] transition-transform">
                      <span>React</span>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-600 text-white font-extrabold text-[0.65rem] px-2.5 py-1 rounded-md shadow-md border border-emerald-400/30 transform group-hover:translate-x-[-2px] transition-transform">
                      <span>JS / Node</span>
                    </div>
                    <div className="flex items-center gap-1 bg-sky-600 text-white font-extrabold text-[0.65rem] px-2.5 py-1 rounded-md shadow-md border border-sky-400/30 transform group-hover:translate-x-[-6px] transition-transform">
                      <span>Docker</span>
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-2 text-xs font-semibold text-[var(--text-primary)] mb-6">
                  {[
                    "Technical architecture",
                    "Tech stack & tools",
                    "Code examples",
                    "Challenges & solutions",
                    "My specific contributions",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <FiCheckCircle className="text-[var(--primary)] shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                disabled={!isReadyRecruteurPreview}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all ${
                  !isReadyRecruteurPreview
                    ? "bg-slate-500/20 text-[var(--text-muted)] cursor-not-allowed"
                    : "bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white cursor-pointer"
                }`}
              >
                <span>{isReadyRecruteurPreview ? "View Technical Portfolio" : "Preview Unavailable"}</span>
                {isReadyRecruteurPreview && <FiArrowRight size={16} />}
              </button>
            </div>

            {/* Hover Tooltip when not ready */}
            {!isReadyRecruteurPreview && (
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-72 bg-[var(--card)] border border-amber-500/40 rounded-xl p-3.5 text-[0.725rem] text-[var(--text-primary)] shadow-2xl opacity-0 group-hover:opacity-100 transition-all z-30 text-center">
                <div className="flex items-center justify-center gap-1.5 font-extrabold text-amber-500 mb-1">
                  <FiInfo size={14} />
                  <span>Preview Currently Unavailable</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  The preview is currently unavailable. Please contact me for any other information.
                </p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--card)] border-r border-b border-amber-500/40 rotate-45" />
              </div>
            )}
          </div>

          {/* Card 2: Client / Business View */}
          <div className="group relative">
            <div
              onClick={() => handleChooseMode("client")}
              className={`relative bg-[var(--surface)] border-2 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden ${
                !isReadyClientPreview
                  ? "border-[var(--border)] opacity-60 cursor-not-allowed"
                  : "border-[var(--border)] hover:border-[var(--success)] hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              }`}
            >
              <div>
                {/* Card Header Row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-[var(--success)] flex items-center justify-center shrink-0">
                      <FiBriefcase size={18} />
                    </div>
                    <div>
                      <span className="text-[0.65rem] sm:text-[0.7rem] font-black tracking-wider uppercase text-[var(--success)] block">
                        CLIENT
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--success)] transition-colors">
                        See What I Can Build for You
                      </h3>
                    </div>
                  </div>
                  {!isReadyClientPreview && (
                    <span className="shrink-0 text-[0.65rem] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      Unavailable
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  Explore my projects from a business perspective: solutions, key features, results, screenshots, and how similar software could help your business.
                </p>

                {/* Graphical Preview / UI Dashboard Mockup */}
                <div className="relative w-full h-32 sm:h-36 rounded-xl bg-[var(--card-elevated)] p-3 mb-5 overflow-hidden border border-[var(--border)] shadow-inner flex items-center justify-between">
                  {/* Simulated UI Window */}
                  <div className="w-3/5 space-y-2">
                    <div className="h-4 w-full rounded bg-[var(--surface)] border border-[var(--border)] flex items-center px-2 gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" />
                    </div>
                    <div className="h-14 w-full rounded-lg bg-[var(--primary-soft)] border border-[var(--primary)]/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[var(--primary)]/30" />
                    </div>
                  </div>

                  {/* Floating Growth / Analytics Badge */}
                  <div className="bg-[var(--card)] p-2.5 rounded-xl shadow-lg border border-[var(--success)]/30 flex flex-col items-center gap-1 shrink-0 z-10 transform group-hover:scale-105 transition-transform">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-[var(--success)] flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <span className="text-[0.6rem] font-bold text-[var(--success)]">+145% ROI</span>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-2 text-xs font-semibold text-[var(--text-primary)] mb-6">
                  {[
                    "Real-world solutions",
                    "Key features & benefits",
                    "Screenshots & demos",
                    "Business impact",
                    "How I can help you",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <FiCheckCircle className="text-[var(--success)] shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                disabled={!isReadyClientPreview}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all ${
                  !isReadyClientPreview
                    ? "bg-slate-500/20 text-[var(--text-muted)] cursor-not-allowed"
                    : "bg-[var(--success)] hover:opacity-90 text-white cursor-pointer"
                }`}
              >
                <span>{isReadyClientPreview ? "View Client Portfolio" : "Preview Unavailable"}</span>
                {isReadyClientPreview && <FiArrowRight size={16} />}
              </button>
            </div>

            {/* Hover Tooltip when not ready */}
            {!isReadyClientPreview && (
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-72 bg-[var(--card)] border border-amber-500/40 rounded-xl p-3.5 text-[0.725rem] text-[var(--text-primary)] shadow-2xl opacity-0 group-hover:opacity-100 transition-all z-30 text-center">
                <div className="flex items-center justify-center gap-1.5 font-extrabold text-amber-500 mb-1">
                  <FiInfo size={14} />
                  <span>Preview Currently Unavailable</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  The preview is currently unavailable. Please contact me for any other information.
                </p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--card)] border-r border-b border-amber-500/40 rotate-45" />
              </div>
            )}
          </div>
        </div>

        {/* Unavailable Banner when both are disabled */}
        {bothUnavailable && (
          <div className="mb-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5 text-xs text-amber-600 dark:text-amber-400 font-semibold">
              <FiInfo size={18} className="shrink-0" />
              <span>The preview is currently unavailable. Please contact me for any other information.</span>
            </div>
            <a
              href="/#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold shrink-0 hover:bg-[var(--primary-hover)] transition-colors shadow-sm"
            >
              <FiMail size={13} />
              <span>Contact Me</span>
            </a>
          </div>
        )}

        {/* Footer Note */}
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-[var(--text-muted)] text-center pt-3 border-t border-[var(--border)]">
          <FiRefreshCw size={14} className="text-[var(--text-muted)] shrink-0" />
          <span>You can switch between views anytime from the navigation bar.</span>
        </div>
      </div>
    </div>
  );
}
