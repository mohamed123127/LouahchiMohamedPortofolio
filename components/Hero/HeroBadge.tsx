import { FiCode } from "react-icons/fi";

export default function HeroBadge() {
  return (
    <div className="absolute bottom-5 -right-5 bg-[var(--card)] border border-[var(--border)] rounded-xl p-3 flex items-center gap-2.5 shadow-lg z-10 min-w-[150px]">
      <div className="w-9 h-9 rounded-lg bg-[var(--primary-soft)] flex items-center justify-center text-[var(--primary)] shrink-0">
        <FiCode size={18} />
      </div>
      <div>
        <p className="text-base font-extrabold text-[var(--text-primary)] leading-none">
          3+
        </p>
        <p className="text-[0.72rem] text-[var(--text-secondary)] font-medium leading-tight mt-0.5">
          Years of Experience
        </p>
      </div>
    </div>
  );
}
