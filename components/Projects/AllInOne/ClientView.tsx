"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiArrowRight,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiLayout,
  FiCpu,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiMessageSquare,
  FiClock,
} from "react-icons/fi";
import { allInOneProjectData } from "@/constants/allInOneProject";

const iconMap: Record<string, React.ElementType> = {
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiLayout,
  FiCpu,
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
};

export default function ClientView() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % allInOneProjectData.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIdx(
      (prev) => (prev - 1 + allInOneProjectData.screenshots.length) % allInOneProjectData.screenshots.length
    );
  };

  return (
    <div className="space-y-12 sm:space-y-16 animate-fadeIn">
      {/* 1. Hero Section */}
      <section className="relative rounded-3xl bg-[var(--card)] p-6 sm:p-10 lg:p-12 border border-[var(--border)] shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[var(--primary-soft)] text-[var(--primary)] border border-[var(--primary)]/20">
                SaaS
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[var(--primary-soft)] text-[var(--primary)] border border-[var(--primary)]/20">
                Web Application
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-tight">
              All-in-One <br className="hidden sm:inline" />
              <span className="text-[var(--primary)]">Business Suite</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              {allInOneProjectData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Live Demo — unavailable */}
              <div className="group relative">
                <button
                  disabled
                  aria-label="Live demo is currently unavailable"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--surface)] text-[var(--text-muted)] font-bold text-xs sm:text-sm border border-[var(--border)] cursor-not-allowed select-none opacity-70"
                >
                  <FiClock size={15} />
                  <span>Live Demo</span>
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

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--surface)] hover:bg-[var(--border)] text-[var(--text-primary)] font-bold text-xs sm:text-sm border border-[var(--border)] shadow-sm transition-all"
              >
                <span>Contact Me</span>
                <FiMail size={16} />
              </Link>
            </div>

            {/* Stat Pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {allInOneProjectData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--surface)] p-3 rounded-xl border border-[var(--border)] flex items-center gap-2.5 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center shrink-0 font-bold text-xs">
                    {stat.value}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[var(--text-primary)] block leading-tight">
                      {stat.label}
                    </span>
                    <span className="text-[0.65rem] text-[var(--text-muted)]">
                      {stat.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Screenshot Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border-4 border-[var(--border)] shadow-2xl bg-[var(--surface)]">
              <Image
                src={allInOneProjectData.screenshots[0].src}
                alt={allInOneProjectData.screenshots[0].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-[var(--card)] px-4 py-2.5 rounded-xl shadow-xl border border-[var(--border)] flex items-center gap-2 text-xs font-extrabold text-[var(--primary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
              <span>Turn data into growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Overview Section */}
      <section className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Paragraph overview */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">
              Project Overview
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {allInOneProjectData.overview.client}
            </p>
          </div>

          {/* Sidebar details grid */}
          <div className="lg:col-span-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[0.7rem] font-extrabold text-[var(--text-muted)] uppercase tracking-wider block">
                Industry
              </span>
              <span className="text-xs font-bold text-[var(--text-primary)] mt-0.5 block">
                {allInOneProjectData.detailsGrid.industry}
              </span>
            </div>

            <div>
              <span className="text-[0.7rem] font-extrabold text-[var(--text-muted)] uppercase tracking-wider block">
                Target Users
              </span>
              <span className="text-xs font-bold text-[var(--text-primary)] mt-0.5 block">
                {allInOneProjectData.detailsGrid.targetUsers}
              </span>
            </div>

            <div>
              <span className="text-[0.7rem] font-extrabold text-[var(--text-muted)] uppercase tracking-wider block">
                Project Type
              </span>
              <span className="text-xs font-bold text-[var(--text-primary)] mt-0.5 block">
                {allInOneProjectData.detailsGrid.projectType}
              </span>
            </div>

            <div>
              <span className="text-[0.7rem] font-extrabold text-[var(--text-muted)] uppercase tracking-wider block">
                My Role
              </span>
              <span className="text-xs font-bold text-[var(--text-primary)] mt-0.5 block">
                {allInOneProjectData.detailsGrid.myRole}
              </span>
            </div>

            <div>
              <span className="text-[0.7rem] font-extrabold text-[var(--text-muted)] uppercase tracking-wider block">
                Duration
              </span>
              <span className="text-xs font-bold text-[var(--text-primary)] mt-0.5 block">
                {allInOneProjectData.detailsGrid.duration}
              </span>
            </div>

            <div>
              <span className="text-[0.7rem] font-extrabold text-[var(--text-muted)] uppercase tracking-wider block">
                Status
              </span>
              <span className="text-xs font-bold text-[var(--success)] mt-0.5 block">
                {allInOneProjectData.detailsGrid.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">
              Key Features
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Core features that help businesses run smoothly and efficiently.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allInOneProjectData.keyFeatures.map((feat, idx) => {
            const Icon = iconMap[feat.icon] || FiBox;
            return (
              <div
                key={idx}
                className="bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] p-5 rounded-2xl transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Screenshots Carousel */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">
              Application GUI Preview
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Explore key module interfaces of the All-in-One Business Suite.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevImage}
              aria-label="Previous screenshot"
              className="w-9 h-9 rounded-full bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--surface)] text-[var(--text-primary)] flex items-center justify-center cursor-pointer shadow-xs transition-colors"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next screenshot"
              className="w-9 h-9 rounded-full bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--surface)] text-[var(--text-primary)] flex items-center justify-center cursor-pointer shadow-xs transition-colors"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured Active Preview Box */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[var(--border)] shadow-xl bg-[var(--surface)]">
          <Image
            src={allInOneProjectData.screenshots[currentImageIdx].src}
            alt={allInOneProjectData.screenshots[currentImageIdx].title}
            fill
            className="object-cover transition-all duration-300"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white flex items-center justify-between gap-4">
            <div>
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                GUI Module {currentImageIdx + 1} of {allInOneProjectData.screenshots.length}
              </span>
              <h3 className="font-extrabold text-sm sm:text-lg text-white">
                {allInOneProjectData.screenshots[currentImageIdx].title}
              </h3>
              <p className="text-xs opacity-90 hidden sm:block mt-0.5">
                {allInOneProjectData.screenshots[currentImageIdx].alt}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnails grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {allInOneProjectData.screenshots.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentImageIdx(idx)}
              className={`cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 ${
                currentImageIdx === idx
                  ? "border-2 border-[var(--primary)] shadow-md scale-105"
                  : "border-[var(--border)] hover:border-[var(--primary)] opacity-75 hover:opacity-100 shadow-xs"
              }`}
            >
              <div className="relative aspect-[16/10] bg-[var(--surface)]">
                <Image src={img.src} alt={img.title} fill className="object-cover" />
              </div>
              <div className="p-2 bg-[var(--card)] text-center">
                <span className="font-bold text-[0.65rem] text-[var(--text-primary)] block truncate">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. The Impact & Testimonial Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Impact Metrics */}
        <div className="lg:col-span-7 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">
              The Impact
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Real results for real businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {allInOneProjectData.impactMetrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-[var(--surface)] p-4 rounded-xl border border-[var(--border)] text-center space-y-1"
              >
                <div className="text-2xl font-black text-[var(--primary)]">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-[var(--text-secondary)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Testimonial Card */}
        <div className="lg:col-span-5 bg-[var(--card-elevated)] border border-[var(--border)] text-[var(--text-primary)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
          <div className="space-y-4">
            <span className="text-4xl leading-none text-[var(--primary)] font-serif">&ldquo;</span>
            <p className="text-sm sm:text-base font-medium text-[var(--text-secondary)] leading-relaxed italic">
              {allInOneProjectData.testimonial.quote}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-[var(--border)]">
            <div>
              <span className="font-bold text-sm block text-[var(--text-primary)]">
                {allInOneProjectData.testimonial.author}
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                {allInOneProjectData.testimonial.role}
              </span>
            </div>

            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={14} className="fill-amber-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technologies Used Section */}
      <section className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">
            Technologies Used
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-1">
            A modern tech stack to deliver a fast, secure, and scalable solution.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {allInOneProjectData.techStack.client.map((tech, idx) => {
            const Icon = iconMap[tech.icon] || FiCode;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] shadow-xs"
              >
                <Icon size={16} className="text-[var(--primary)]" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="rounded-3xl bg-[var(--card)] border border-[var(--border)] text-[var(--text-primary)] p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-[0.7rem] font-extrabold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary-soft)] px-3 py-1 rounded-full inline-block">
            HAVE A SIMILAR PROJECT?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[var(--text-primary)]">
            Let&apos;s Build Your Idea <span className="text-[var(--primary)]">Together</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            I&apos;m always excited to work on new projects and help bring ideas to life. Feel free to reach out and let&apos;s discuss how I can help you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            <span>Get in Touch</span>
            <FiArrowRight size={16} />
          </Link>

          <a
            href="https://wa.me/213000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--success)] hover:opacity-90 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            <FiMessageSquare size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
