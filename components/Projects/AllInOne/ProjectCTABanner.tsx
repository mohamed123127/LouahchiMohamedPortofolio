"use client";

import React from "react";
import Link from "next/link";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { contactInfo } from "@/constants/contact";
interface ProjectCTABannerProps {
  contactHref?: string;
  whatsappUrl?: string;
}
const phoneNumber = contactInfo[1].value.replace(/\s/g, '');


export default function ProjectCTABanner({
  contactHref = "/#contact",
  whatsappUrl = `https://wa.me/${phoneNumber}`,
}: ProjectCTABannerProps) {
  return (
    <section className="mt-10 rounded-3xl bg-[var(--card-elevated)] border border-[var(--border)] p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-[var(--primary-soft)] flex items-center justify-center shrink-0">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.04 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
          </svg>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-black text-[var(--text-primary)]">
            Interested in this project?
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5 max-w-md">
            I&apos;d be happy to discuss the technical details, architecture, or any questions you have.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 shrink-0">
        <Link
          href={contactHref}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold text-xs shadow-md transition-all"
        >
          <FiMail size={13} />
          <span>Let&apos;s Talk</span>
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--success)] hover:opacity-90 text-white font-bold text-xs shadow-md transition-all"
        >
          <FiMessageSquare size={13} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
