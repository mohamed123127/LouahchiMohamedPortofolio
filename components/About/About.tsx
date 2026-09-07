import {
  FiBriefcase,
  FiLayers,
  FiCpu,
  FiZap,
  FiMapPin,
  FiBook,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";
import { aboutData } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  FiBriefcase: <FiBriefcase size={17} />,
  FiLayers: <FiLayers size={17} />,
  FiCpu: <FiCpu size={17} />,
  FiZap: <FiZap size={17} />,
  FiMapPin: <FiMapPin size={15} />,
  FiBook: <FiBook size={15} />,
  FiHeart: <FiHeart size={15} />,
};

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-[var(--surface)]">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-2">
            ABOUT ME
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight">
            {aboutData.headline}
          </h2>
        </div>

        {/* Content Layout */}
        <div>
          {/* Left — Text + Badges + CTA */}
          <div>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-4">
              {aboutData.description1}
            </p>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-7">
              {aboutData.description2}
            </p>

            {/* Info Badges */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              {aboutData.badges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-1.5 text-xs text-[var(--text-secondary)] shadow-sm"
                >
                  <span className="text-[var(--primary)]">
                    {iconMap[badge.icon]}
                  </span>
                  <span className="text-[var(--text-muted)]">
                    {badge.sublabel}
                  </span>
                  <span className="font-semibold text-[var(--text-primary)]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={aboutData.cta.href}
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              {aboutData.cta.label} <FiArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
