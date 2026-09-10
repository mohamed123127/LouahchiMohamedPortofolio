"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiLock, FiClock } from "react-icons/fi";
import { allInOneProjectData } from "@/constants/allInOneProject";

interface TechHeroProps {
  onSwitchToClientView?: () => void;
  className?: string;
  isReadyClientPreview?: boolean;
  isReadyRecruteurPreview?: boolean;
}

export default function TechHero({
  onSwitchToClientView,
  className = "",
  isReadyClientPreview = true,
  isReadyRecruteurPreview = true,
}: TechHeroProps) {
  return (
    <section className={`relative pt-6 pb-12 ${className}`}>
      {/* Floating badge */}
      <div className="absolute top-2 right-0 hidden md:flex items-center gap-1.5 bg-[var(--primary-soft)] border border-[var(--primary)]/25 px-3 py-1.5 rounded-full text-[0.68rem] font-bold text-[var(--primary)] italic z-10 select-none">
        Real project • Real code • Real impact
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left — text */}
        <div className="space-y-5">
          {/* View mode pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="group relative">
              <button
                onClick={() => {
                  if (isReadyClientPreview && onSwitchToClientView) {
                    onSwitchToClientView();
                  }
                }}
                disabled={!isReadyClientPreview}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                  !isReadyClientPreview
                    ? "bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] opacity-60 cursor-not-allowed"
                    : "bg-[var(--surface)] hover:bg-[var(--border)] text-[var(--text-secondary)] border-[var(--border)] cursor-pointer"
                }`}
              >
                Client View
              </button>
              {!isReadyClientPreview && (
                <div className="pointer-events-none absolute bottom-full left-0 mb-2 w-64 bg-[var(--card)] border border-amber-500/40 rounded-xl p-3 text-[0.725rem] text-[var(--text-primary)] shadow-2xl opacity-0 group-hover:opacity-100 transition-all z-30 text-center">
                  <div className="flex items-center justify-center gap-1.5 font-extrabold text-amber-500 mb-1">
                    <FiClock size={14} />
                    <span>Preview Currently Unavailable</span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    The preview is currently unavailable. Please contact me for any other information.
                  </p>
                  <div className="absolute -bottom-1.5 left-5 w-3 h-3 bg-[var(--card)] border-r border-b border-amber-500/40 rotate-45" />
                </div>
              )}
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--primary)] text-white">
              Technical View
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight leading-tight">
              {allInOneProjectData.title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-bold text-[var(--primary)] tracking-widest uppercase">
              Full-Stack &nbsp;•&nbsp; Scalable &nbsp;•&nbsp; Real-World Project
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg">
            {allInOneProjectData.technicalSubtitle}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5">
            {allInOneProjectData.badges.map((b) => (
              <span
                key={b}
                className="px-2.5 py-0.5 rounded text-[0.7rem] font-semibold bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)]"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* Live Demo — unavailable */}
            <div className="group relative">
              <button
                disabled
                aria-label="Live demo is currently unavailable"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface)] text-[var(--text-muted)] font-bold text-xs sm:text-sm border border-[var(--border)] cursor-not-allowed select-none opacity-70"
              >
                <FiClock size={13} />
                <span>View Live Demo</span>
                <span className="text-[0.6rem] font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/25 px-1.5 py-0.5 rounded-full">
                  Soon
                </span>
              </button>
              {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-52 bg-[var(--card)] border border-[var(--border)] rounded-xl p-3.5 text-[0.7rem] leading-relaxed shadow-2xl opacity-0 group-hover:opacity-100 transition-all z-30">
                <p className="font-bold text-[var(--text-primary)] mb-1">Demo Unavailable</p>
                <p className="text-[var(--text-secondary)]">
                  The live demo is not available yet. The platform is currently in active development.
                </p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--card)] border-r border-b border-[var(--border)] rotate-45" />
              </div>
            </div>

            {/* GitHub — private repo */}
            <div className="group relative">
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface)] text-[var(--text-muted)] font-bold text-xs sm:text-sm border border-[var(--border)] cursor-default select-none"
                aria-label="GitHub repository is private"
              >
                <FiGithub size={15} />
                <span>View GitHub</span>
                <FiLock size={11} />
              </button>
              {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-56 bg-[var(--card)] border border-[var(--border)] rounded-xl p-3.5 text-[0.7rem] leading-relaxed shadow-2xl opacity-0 group-hover:opacity-100 transition-all z-30">
                <p className="font-bold text-[var(--text-primary)] mb-1">Repository is private</p>
                <p className="text-[var(--text-secondary)]">
                  Please contact me if you&apos;d like to see the source code.
                </p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--card)] border-r border-b border-[var(--border)] rotate-45" />
              </div>
            </div>
          </div>
        </div>

        {/* Right — mockup with layered blue light glow */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Glow layers */}
          <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[110%] h-[90%] rounded-full bg-blue-500 opacity-[0.08] blur-[90px]" />
            <div className="absolute w-[85%] h-[70%] rounded-full bg-blue-500 opacity-[0.18] blur-[55px]" />
            <div className="absolute w-[55%] h-[45%] rounded-full bg-[var(--primary)] opacity-[0.30] blur-[28px]" />
          </div>
          <Image
            src={allInOneProjectData.mockupImage}
            alt={`${allInOneProjectData.title} app mockup`}
            width={1320}
            height={860}
            className="relative z-10 w-full max-w-[540px] h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
