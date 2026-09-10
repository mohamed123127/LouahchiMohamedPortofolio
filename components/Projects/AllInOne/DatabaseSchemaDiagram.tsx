"use client";

import React from "react";
import { FiDatabase, FiGrid } from "react-icons/fi";
import { allInOneProjectData } from "@/constants/allInOneProject";

export default function DatabaseSchemaDiagram() {
  return (
    <div className="h-full flex flex-col justify-between bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <FiDatabase size={20} className="text-[var(--primary)]" />
        <h3 className="text-lg font-bold text-[var(--text-primary)]">Database Schema (Simplified)</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {allInOneProjectData.dbSchema.map((table, idx) => (
          <div
            key={idx}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col hover:border-[var(--primary)]/50 transition-all shadow-xs"
          >
            {/* Table Header */}
            <div className="bg-[var(--primary-soft)] px-3.5 py-2.5 border-b border-[var(--border)] flex items-center justify-between">
              <span className="font-bold text-xs text-[var(--primary)] flex items-center gap-1.5">
                <FiGrid size={13} />
                <span>{table.name}</span>
              </span>
              <span className="text-[0.65rem] font-bold text-[var(--text-muted)]">Table</span>
            </div>

            {/* Table Fields */}
            <div className="p-3 space-y-1.5 text-xs font-mono text-[var(--text-secondary)]">
              {table.fields.map((field, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                  <span className="truncate">{field}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
