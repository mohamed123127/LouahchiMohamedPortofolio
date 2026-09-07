"use client";

interface AboutCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export default function AboutCard({ value, label, icon }: AboutCardProps) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 flex flex-col gap-2.5 hover:border-[var(--primary)] hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="w-9 h-9 rounded-lg bg-[var(--primary-soft)] flex items-center justify-center text-[var(--primary)]">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-extrabold text-[var(--text-primary)] leading-none tracking-tight">
          {value}
        </p>
        <p className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">
          {label}
        </p>
      </div>
    </div>
  );
}
