import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import { socialLinks } from "@/constants";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
};


export default function Hero() {
  return (
    <section id="home" className="py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
          {/* Left Content */}
          <div className="max-w-[560px]">
            {/* Greeting */}
            <p className="text-[var(--text-secondary)] text-base font-medium mb-1">
              Hi, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[var(--text-primary)] leading-[1.08] tracking-tight mb-1">
              Mohamed Louahchi
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl font-bold text-[var(--primary)] mb-4 tracking-tight">
              Software Engineer
            </p>

            {/* Bio */}
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-[0.95rem] mb-7 max-w-[480px]">
              I build{" "}
              <strong className="text-[var(--text-primary)] font-bold">
                scalable web applications
              </strong>
              , backend systems and modern user experiences. Passionate about
              solving real-world problems and turning ideas into useful products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                View My Projects <FiArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary-soft)] font-semibold text-sm px-5 py-2.5 rounded-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Let&apos;s Talk <FiMessageCircle size={15} />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 mb-5">
              {socialLinks.map(({ icon, href, label }) => {
                const Icon = iconMap[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right — Profile Image */}
          <div className="relative flex justify-center animate-float">
            {/* Annotation */}
            <div className="hidden md:block absolute -top-4 -right-2 text-right z-10">
              <p className="font-serif italic text-[var(--text-secondary)] text-xs leading-tight">
                Good Code
                <br />
                Better
                <br />
                Tomorrow
              </p>
              {/* Hand-drawn arrow */}
              <svg
                width="50"
                height="40"
                viewBox="0 0 50 40"
                fill="none"
                className="mt-0.5 stroke-[var(--text-muted)]"
              >
                <path
                  d="M45 5 C30 10, 15 20, 5 35"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M5 35 L8 28 M5 35 L12 33"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Image Container */}
            <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[380px]">
              {/* Background blob */}
              <div className="absolute inset-[10px_0_0_10px] bg-[var(--primary-soft)] rounded-[60%_40%_55%_45%/55%_45%_60%_40%] z-0" />

              {/* Photo */}
              <div className="bg-[var(--card)] absolute inset-0 rounded-[60%_40%_55%_45%/55%_45%_60%_40%] overflow-hidden z-[1]">
                <Image
                  src="/resources/images/hero.png"
                  alt="Mohamed Louahchi — Software Engineer"
                  fill
                  className="object-cover object-top scale-110"
                  priority
                  sizes="(max-width: 640px) 280px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
