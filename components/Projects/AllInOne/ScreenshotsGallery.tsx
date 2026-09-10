"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { FiMonitor, FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

export interface ScreenshotItem {
  title: string;
  src: string;
  alt: string;
}

interface ScreenshotsGalleryProps {
  screenshots: ScreenshotItem[];
  className?: string;
}

export default function ScreenshotsGallery({ screenshots, className = "" }: ScreenshotsGalleryProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Ensure portal only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const lightboxImg = lightboxIdx !== null ? screenshots[lightboxIdx] : null;

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIdx]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prevLightbox = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + screenshots.length) % screenshots.length);
  };

  const nextLightbox = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % screenshots.length);
  };

  const scrollPrev = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: 340, behavior: "smooth" });
  };

  // The lightbox is rendered via portal into document.body to escape
  // any parent CSS transform / will-change that breaks fixed positioning
  const lightbox =
    mounted && lightboxImg && lightboxIdx !== null
      ? createPortal(
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
            onClick={() => setLightboxIdx(null)}
          >
            <div
              style={{
                position: "relative",
                width: "85vw",
                maxWidth: "85vw",
                height: "85vh",
                display: "flex",
                flexDirection: "column",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxIdx(null)}
                aria-label="Close preview"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  zIndex: 10,
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.65)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <FiX size={18} />
              </button>

              {/* Prev arrow */}
              {screenshots.length > 1 && (
                <button
                  onClick={prevLightbox}
                  aria-label="Previous screenshot"
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.65)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <FiChevronLeft size={20} />
                </button>
              )}

              {/* Next arrow */}
              {screenshots.length > 1 && (
                <button
                  onClick={nextLightbox}
                  aria-label="Next screenshot"
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.65)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <FiChevronRight size={20} />
                </button>
              )}

              {/* Image — fills the remaining height of the 85vh dialog */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  flex: 1,
                  minHeight: 0,
                  background: "var(--surface)",
                }}
              >
                <Image
                  src={lightboxImg.src}
                  alt={lightboxImg.alt}
                  fill
                  sizes="900px"
                  style={{ objectFit: "contain", padding: "16px" }}
                  priority
                />
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "14px 20px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "var(--card)",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)" }}>
                  {lightboxImg.title}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  {lightboxIdx + 1} / {screenshots.length}
                </span>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 shadow-sm ${className}`}>
        {/* Header row with title + nav buttons */}
        <div className="flex items-center justify-between mb-4">
          <SectionHeader icon={FiMonitor} title="Screenshots" className="mb-0" />
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous screenshots"
              className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)]/60 flex items-center justify-center cursor-pointer transition-all duration-200"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next screenshots"
              className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)]/60 flex items-center justify-center cursor-pointer transition-all duration-200"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto pb-1 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {screenshots.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIdx(idx)}
              className="group cursor-pointer rounded-xl overflow-hidden border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all flex-none"
              style={{ width: "280px" }}
            >
              <div className="relative bg-[var(--surface)]" style={{ aspectRatio: "16/10" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="280px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiMaximize2 size={12} />
                </div>
              </div>
              <div className="px-3 py-2 bg-[var(--card)]">
                <span className="text-[0.72rem] font-bold text-[var(--text-primary)] line-clamp-1">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox portal — renders directly into document.body */}
      {lightbox}
    </>
  );
}
