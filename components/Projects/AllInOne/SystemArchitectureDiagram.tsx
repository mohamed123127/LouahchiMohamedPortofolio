"use client";

import React from "react";
import { FiMonitor, FiServer, FiDatabase, FiCloud, FiZap } from "react-icons/fi";

export default function SystemArchitectureDiagram() {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <FiServer size={20} className="text-[var(--primary)]" />
        <h3 className="text-lg font-bold text-[var(--text-primary)]">System Architecture</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 items-stretch">
        {/* Node 1: Client */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[var(--primary)]/50 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center mb-2">
            <FiMonitor size={20} />
          </div>
          <span className="font-bold text-sm text-[var(--text-primary)]">Client</span>
          <span className="text-[0.7rem] text-[var(--text-muted)] font-medium mt-0.5">(Web / Mobile)</span>
        </div>

        {/* Node 2: Next.js Frontend */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[var(--primary)]/50 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] flex items-center justify-center mb-2 font-black text-xs">
            N
          </div>
          <span className="font-bold text-sm text-[var(--text-primary)]">Next.js</span>
          <span className="text-[0.7rem] text-[var(--text-muted)] font-medium mt-0.5">Frontend (React + Tailwind)</span>
        </div>

        {/* Node 3: NestJS Backend */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[var(--primary)]/50 transition-all">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-2">
            <FiServer size={20} />
          </div>
          <span className="font-bold text-sm text-[var(--text-primary)]">NestJS</span>
          <span className="text-[0.7rem] text-[var(--text-muted)] font-medium mt-0.5">Backend (API + Auth + Logic)</span>
        </div>

        {/* Node 4: PostgreSQL Database */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[var(--primary)]/50 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-soft)] text-[var(--success)] flex items-center justify-center mb-2">
            <FiDatabase size={20} />
          </div>
          <span className="font-bold text-sm text-[var(--text-primary)]">PostgreSQL</span>
          <span className="text-[0.7rem] text-[var(--text-muted)] font-medium mt-0.5">Primary Database</span>
        </div>
      </div>

      {/* Sub-services Row */}
      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
            <FiZap size={18} />
          </div>
          <div>
            <span className="font-bold text-xs text-[var(--text-primary)] block">Redis</span>
            <span className="text-[0.7rem] text-[var(--text-muted)]">Cache & Queue (BullMQ)</span>
          </div>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-3.5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
            <FiCloud size={18} />
          </div>
          <div>
            <span className="font-bold text-xs text-[var(--text-primary)] block">AWS S3</span>
            <span className="text-[0.7rem] text-[var(--text-muted)]">Media & Asset Storage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
