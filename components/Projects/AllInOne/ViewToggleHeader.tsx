"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiSun, FiMoon, FiShoppingCart, FiCode, FiInfo } from "react-icons/fi";
import { useTheme } from "@/components/ThemeProvider/ThemeProvider";

interface ViewToggleHeaderProps {
  currentView: "client" | "technical";
  onToggleView: (view: "client" | "technical") => void;
  isReadyClientPreview?: boolean;
  isReadyRecruteurPreview?: boolean;
}

export default function ViewToggleHeader({
  currentView,
  onToggleView,
  isReadyClientPreview = true,
  isReadyRecruteurPreview = true,
}: ViewToggleHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Side: Back Link & View Switch Pills */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors py-1.5 px-3 rounded-lg hover:bg-[var(--surface)] border border-[var(--border)]"
          >
            <FiArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Projects</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="h-5 w-[1px] bg-[var(--border)] hidden sm:block" />

          {/* View Switcher Pills */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
            {/* Client View Button */}
            <div className="group relative">
              <button
                onClick={() => {
                  if (isReadyClientPreview) onToggleView("client");
                }}
                disabled={!isReadyClientPreview}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currentView === "client"
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : !isReadyClientPreview
                    ? "text-[var(--text-muted)] opacity-60 cursor-not-allowed"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                }`}
              >
                <FiShoppingCart size={13} />
                <span>Client View</span>
              </button>

              {!isReadyClientPreview && (
                <div className="pointer-events-none absolute top-full left-0 mt-2.5 w-64 bg-[var(--card)] border border-amber-500/40 rounded-xl p-3 text-[0.725rem] text-[var(--text-primary)] shadow-2xl opacity-0 group-hover:opacity-100 transition-all z-50 text-center">
                  <div className="flex items-center justify-center gap-1.5 font-extrabold text-amber-500 mb-1">
                    <FiInfo size={14} />
                    <span>Preview Currently Unavailable</span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    The preview is currently unavailable. Please contact me for any other information.
                  </p>
                  <div className="absolute -top-1.5 left-5 w-3 h-3 bg-[var(--card)] border-l border-t border-amber-500/40 rotate-45" />
                </div>
              )}
            </div>

            {/* Technical View Button */}
            <div className="group relative">
              <button
                onClick={() => {
                  if (isReadyRecruteurPreview) onToggleView("technical");
                }}
                disabled={!isReadyRecruteurPreview}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currentView === "technical"
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : !isReadyRecruteurPreview
                    ? "text-[var(--text-muted)] opacity-60 cursor-not-allowed"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                }`}
              >
                <FiCode size={13} />
                <span>Technical View</span>
              </button>

              {!isReadyRecruteurPreview && (
                <div className="pointer-events-none absolute top-full right-0 mt-2.5 w-64 bg-[var(--card)] border border-amber-500/40 rounded-xl p-3 text-[0.725rem] text-[var(--text-primary)] shadow-2xl opacity-0 group-hover:opacity-100 transition-all z-50 text-center">
                  <div className="flex items-center justify-center gap-1.5 font-extrabold text-amber-500 mb-1">
                    <FiInfo size={14} />
                    <span>Preview Currently Unavailable</span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    The preview is currently unavailable. Please contact me for any other information.
                  </p>
                  <div className="absolute -top-1.5 right-5 w-3 h-3 bg-[var(--card)] border-l border-t border-amber-500/40 rotate-45" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Let's Talk & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/#contact"
            className="hidden xs:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--primary)] text-white text-xs font-bold hover:bg-[var(--primary-hover)] shadow-xs transition-colors"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] flex items-center justify-center cursor-pointer transition-colors"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
