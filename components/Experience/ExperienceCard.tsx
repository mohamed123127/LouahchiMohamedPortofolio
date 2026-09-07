interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export default function ExperienceCard({
  role,
  company,
  location,
  period,
  current,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="flex gap-4">
      {/* Timeline indicator */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-2.5 h-2.5 bg-[var(--primary)] rounded-full shrink-0 mt-1.5 shadow-[0_0_0_3px_var(--primary-soft)]" />
        <div className="w-[1px] flex-grow bg-[var(--border)] mt-1.5" />
      </div>

      {/* Content */}
      <div className="pb-7 flex-1">
        {/* Row: Role + Period */}
        <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
          <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
            {role}
          </h3>
          <span
            className={`text-xs font-semibold whitespace-nowrap rounded ${
              current
                ? "text-[var(--primary)] bg-[var(--primary-soft)] px-2 py-0.5"
                : "text-[var(--text-muted)]"
            }`}
          >
            {period}
          </span>
        </div>

        {/* Company + Location */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium mb-3">
          {company}
          {location && (
            <span className="text-[var(--text-muted)]"> • {location}</span>
          )}
        </p>

        {/* Bullets */}
        <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pl-3.5 relative"
            >
              <span className="absolute left-0 top-[0.55em] w-1 h-1 rounded-full bg-[var(--text-muted)]" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
