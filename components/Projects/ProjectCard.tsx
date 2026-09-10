"use client";

import { useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiCalendar, FiStar, FiArrowRight, FiInfo } from "react-icons/fi";
import ExperienceModal from "./ExperienceModal";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  period?: string;
  isFeatured?: boolean;
  isBuilding?: boolean;
  isReadyClientPreview?: boolean;
  isReadyRecruteurPreview?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
  period,
  isFeatured = false,
  isBuilding = false,
  isReadyClientPreview = false,
  isReadyRecruteurPreview = false,
}: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const targetDestination = liveUrl || repoUrl || "/Projects/All-in-OneBusinessSuiteSaas";
  const bothUnavailable = !isReadyClientPreview && !isReadyRecruteurPreview;

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      <div className="group relative">
        <div
          onClick={handleCardClick}
          className={`relative bg-[var(--card)] rounded-xl overflow-hidden flex flex-col transition-all duration-300 cursor-pointer ${
            isFeatured
              ? "border-2 border-[var(--primary)] shadow-[0_0_25px_rgba(37,99,235,0.2)] dark:shadow-[0_0_30px_rgba(59,130,246,0.25)] lg:scale-105 z-10 hover:shadow-[0_0_35px_rgba(37,99,235,0.35)] hover:-translate-y-2"
              : "border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-1.5"
          }`}
        >
          {/* Screenshot */}
          <div className="relative aspect-[16/10] bg-[var(--surface)] overflow-hidden">
            {/* Main Project Badge */}
            {isFeatured && (
              <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2.5 py-1 rounded-md text-[0.7rem] font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-lg z-10">
                <FiStar className="fill-yellow-300 text-yellow-300" size={13} />
                <span>Best Project</span>
              </div>
            )}

            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />

            {/* External link overlay */}
            <button
              onClick={handleCardClick}
              aria-label={`Open ${title}`}
              className="absolute top-2.5 right-2.5 bg-white/90 dark:bg-slate-800/90 hover:bg-[var(--primary)] text-slate-800 dark:text-slate-100 hover:text-white rounded-md w-7 h-7 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 z-10 cursor-pointer"
            >
              <FiExternalLink size={14} />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 flex-1 flex flex-col">
            {/* Title Row */}
            <div className="flex items-center gap-2 mb-1.5">
              <div
                className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                  isFeatured ? "bg-gradient-to-r from-blue-600 to-indigo-600" : "bg-[var(--primary)]"
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5 L4 7 L8 3"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                className={`font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors ${
                  isFeatured ? "text-base sm:text-lg" : "text-sm sm:text-base"
                }`}
              >
                {title}
              </h3>
            </div>

            {/* Period & Status Row */}
            <div className="flex items-center justify-between gap-2 text-[0.725rem] mb-2.5 flex-wrap">
              {period && (
                <div className="flex items-center gap-1.5 text-[var(--text-muted)] font-medium">
                  <FiCalendar size={13} className="text-[var(--primary)] shrink-0" />
                  <span>{period}</span>
                </div>
              )}
              {isBuilding && (
                <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full text-[0.68rem] font-bold tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span>In Development</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-3.5 flex-1">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-[var(--primary-soft)] text-[var(--primary)] rounded px-2 py-0.5 text-[0.7rem] font-semibold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Footer Links */}
            <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-bold mt-auto">
              <span className={`inline-flex items-center gap-1 transition-all ${
                bothUnavailable
                  ? "text-[var(--text-muted)]"
                  : "text-[var(--primary)] group-hover:translate-x-0.5"
              }`}>
                <span>{bothUnavailable ? "Preview Unavailable" : "Live Demo"}</span>
                <FiArrowRight size={13} />
              </span>
              <span className="inline-flex items-center gap-1 text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors">
                <span>View Details</span>
                <FiArrowRight size={13} />
              </span>
            </div>
          </div>
        </div>

        {/* Hover Tooltip when both previews are unavailable */}
        {bothUnavailable && (
          <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-[var(--card)] border border-amber-500/40 rounded-xl p-3.5 text-[0.725rem] text-[var(--text-primary)] shadow-2xl opacity-0 group-hover:opacity-100 transition-all z-30 text-center">
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

      {/* Experience Dialogue Modal */}
      <ExperienceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        targetUrl={targetDestination}
        repoUrl={repoUrl}
        isReadyClientPreview={isReadyClientPreview}
        isReadyRecruteurPreview={isReadyRecruteurPreview}
      />
    </>
  );
}

