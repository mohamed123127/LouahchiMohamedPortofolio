"use client";

import { useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import type { NavLink } from "@/constants";

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  activeSection: string;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  navLinks,
  activeSection,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 top-16 bg-black/40 z-40 backdrop-blur-[2px]"
      />

      {/* Drawer */}
      <div className="fixed top-16 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] z-40 p-5 shadow-xl animate-fadeInUp">
        <nav className="flex flex-col gap-1 mb-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className={`flex items-center px-4 py-3 rounded-lg text-sm transition-colors duration-200 ${isActive
                  ? "text-[var(--primary)] bg-[var(--primary-soft)] font-semibold"
                  : "text-[var(--text-primary)] font-medium hover:bg-[var(--surface)]"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="/resources/pdf/CV-EN.pdf"
          download="CV-EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all duration-200"
        >
          <FiDownload size={15} />
          <span>Download CV</span>
        </a>
      </div>
    </>
  );
}
