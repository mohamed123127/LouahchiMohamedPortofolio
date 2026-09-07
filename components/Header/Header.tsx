"use client";

import { useState, useEffect } from "react";
import { FiDownload, FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/constants";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(navLinks[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[var(--background)] transition-all duration-300 ${scrolled ? "border-b border-[var(--border)] shadow-sm" : "border-b border-transparent"
        }`}
    >
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-extrabold text-[1.15rem] text-[var(--text-primary)] no-underline flex items-center gap-[2px] tracking-tight hover:opacity-90 transition-opacity"
          >
            <span className="text-[var(--primary)]">M</span>L
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${isActive
                    ? "text-[var(--primary)] font-semibold"
                    : "text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] hover:bg-[var(--surface)]"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[2px] left-3 right-3 h-[2px] bg-[var(--primary)] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] flex items-center justify-center cursor-pointer transition-all duration-200 shrink-0"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            {/* Download CV */}
            <a
              href="/resources/pdf/CV-EN.pdf"
              download="CV-EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hidden md:inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <FiDownload size={13} />
              <span>Download CV</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-1 text-[var(--text-primary)] cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={menuOpen}
        navLinks={navLinks}
        activeSection={activeSection}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
