"use client";
import {
  FiServer,
  FiMonitor,
  FiDatabase,
  FiZap,
  FiLayers,
} from "react-icons/fi";
import SectionHeader from "./SectionHeader";

interface SystemArchitectureProps {
  className?: string;
}

export default function SystemArchitectureCard({ className = "" }: SystemArchitectureProps) {
  const steps = [
    {
      label: "Client",
      sublabel: "Web / Mobile",
      Icon: FiMonitor,
      colorBg: "bg-blue-500/10",
      colorText: "text-blue-500",
    },
    {
      label: "Next.js",
      sublabel: "React Frontend",
      initial: "N",
      colorBg: "bg-indigo-500/10",
      colorText: "text-indigo-500",
    },
    {
      label: "TanStack Query",
      sublabel: "Client Cache",
      Icon: FiZap,
      colorBg: "bg-amber-500/10",
      colorText: "text-amber-500",
    },
    {
      label: "NestJS",
      sublabel: "Backend API",
      Icon: FiServer,
      colorBg: "bg-rose-500/10",
      colorText: "text-rose-500",
    },
    {
      label: "Caching Layer",
      sublabel: "Local / Redis",
      Icon: FiLayers,
      colorBg: "bg-purple-500/10",
      colorText: "text-purple-500",
    },
    {
      label: "PostgreSQL",
      sublabel: "Primary Database",
      Icon: FiDatabase,
      colorBg: "bg-emerald-500/10",
      colorText: "text-emerald-500",
    },
  ];

  /* Horizontal <-> arrow */
  const HArrow = () => (
    <div className="shrink-0 flex items-center justify-center">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--primary)] opacity-75"
      >
        <polyline points="7 8 3 12 7 16" />
        <polyline points="17 8 21 12 17 16" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    </div>
  );

  /* Vertical ↕ arrow (row-link connector) */
  const VArrow = () => (
    <div className="flex items-center justify-center self-stretch py-0.5">
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--primary)] opacity-75"
      >
        {/* shaft */}
        <line x1="7" y1="3" x2="7" y2="19" />
        {/* top arrowhead */}
        <polyline points="3 7 7 3 11 7" />
        {/* bottom arrowhead */}
        <polyline points="3 15 7 19 11 15" />
      </svg>
    </div>
  );

  /* Card: icon centered on top, label + sublabel below */
  const StepCard = ({ step }: { step: (typeof steps)[0] }) => (
    <div className="flex flex-col items-center text-center gap-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-2.5 py-3.5 hover:border-[var(--primary)]/40 transition-colors flex-1 min-w-0">
      <div
        className={`w-8 h-8 rounded-lg ${step.colorBg} ${step.colorText} flex items-center justify-center shrink-0 font-black text-xs`}
      >
        {step.Icon ? <step.Icon size={15} /> : <span>{step.initial}</span>}
      </div>
      <div className="min-w-0 w-full">
        <span className="font-bold text-[0.7rem] text-[var(--text-primary)] leading-tight block truncate">
          {step.label}
        </span>
        <span className="text-[0.58rem] text-[var(--text-muted)] font-medium leading-tight block truncate mt-0.5">
          {step.sublabel}
        </span>
      </div>
    </div>
  );

  return (
    <div className={`bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 sm:p-5 shadow-sm ${className}`}>
      <SectionHeader icon={FiServer} title="System Architecture" className="mb-3" />

      {/* Row 1 */}
      <div className="flex items-stretch gap-1.5">
        <StepCard step={steps[0]} />
        <HArrow />
        <StepCard step={steps[1]} />
        <HArrow />
        <StepCard step={steps[2]} />
      </div>

      {/* Snake connector: vertical ↕ sits under/above the 3rd card slot */}
      <div className="flex items-center gap-1.5 my-0.5 pointer-events-none select-none">
        {/* spacer matching card + arrow + card widths */}
        <div className="flex-1" />
        <div className="w-[14px]" /> {/* HArrow width */}
        <div className="flex-1" />
        <div className="w-[14px]" /> {/* HArrow width */}
        {/* The actual connector lives in the 3rd card slot */}
        <div className="flex-1 flex items-center justify-center">
          <VArrow />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex items-stretch gap-1.5">
        <StepCard step={steps[3]} />
        <HArrow />
        <StepCard step={steps[4]} />
        <HArrow />
        <StepCard step={steps[5]} />
      </div>
    </div>
  );
}
