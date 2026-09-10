"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck, FiFilter } from "react-icons/fi";
import { CodeSnippet } from "@/constants/allInOneProject";

interface CodeExampleBlockProps {
  snippets: CodeSnippet[];
}

export default function CodeExampleBlock({ snippets }: CodeExampleBlockProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "frontend" | "backend">("all");
  const [activeId, setActiveId] = useState(snippets[0]?.id || "");
  const [copied, setCopied] = useState(false);

  const filteredSnippets = snippets.filter((s) => {
    if (selectedCategory === "all") return true;
    return s.category === selectedCategory;
  });

  const activeSnippet =
    filteredSnippets.find((s) => s.id === activeId) || filteredSnippets[0] || snippets[0];

  const handleCopy = () => {
    if (activeSnippet) {
      navigator.clipboard.writeText(activeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-xl">
      {/* Category Filter & Actions Bar */}
      <div className="flex items-center justify-between bg-[var(--surface)] px-4 py-3 border-b border-[var(--border)] gap-3 flex-wrap">
        {/* Combobox Select */}
        <div className="flex items-center gap-2">
          <FiFilter size={14} className="text-[var(--primary)]" />
          <span className="text-xs font-semibold text-[var(--text-muted)] hidden sm:inline">Stack Filter:</span>
          <select
            value={selectedCategory}
            onChange={(e) => {
              const cat = e.target.value as "all" | "frontend" | "backend";
              setSelectedCategory(cat);
              const matching = snippets.filter((s) => cat === "all" || s.category === cat);
              if (matching.length > 0) {
                setActiveId(matching[0].id);
              }
            }}
            className="bg-[var(--card)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer focus:outline-none focus:border-[var(--primary)] transition-all shadow-sm"
          >
            <option value="all">⚡ All Code Examples</option>
            <option value="frontend">💻 Frontend (React / Next.js)</option>
            <option value="backend">⚙️ Backend (NestJS / Database)</option>
          </select>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--card)] hover:bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] text-xs font-semibold transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <FiCheck size={13} className="text-[var(--success)]" />
              <span className="text-[var(--success)]">Copied!</span>
            </>
          ) : (
            <>
              <FiCopy size={13} />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto bg-[var(--surface)]/50 px-4 pt-2 border-b border-[var(--border)]">
        {filteredSnippets.map((snippet) => (
          <button
            key={snippet.id}
            onClick={() => setActiveId(snippet.id)}
            className={`px-3 py-1.5 rounded-t-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              activeSnippet?.id === snippet.id
                ? "bg-[var(--primary)] text-white font-bold"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--card)]"
            }`}
          >
            {snippet.tabLabel}
          </button>
        ))}
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-[var(--text-primary)] leading-relaxed bg-[var(--card-elevated)] min-h-[260px]">
        <pre className="selection:bg-[var(--primary-soft)] selection:text-[var(--primary)]">
          <code>{activeSnippet?.code}</code>
        </pre>
      </div>
    </div>
  );
}
