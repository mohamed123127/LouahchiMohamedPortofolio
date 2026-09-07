"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";
import ContactForm from "./ContactForm";
import type { IconType } from "react-icons";
import { contactInfo } from "@/constants";

const iconMap: Record<string, IconType> = {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FiMapPin,
  FiPhone,
  FaPhone,
};

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20 bg-[var(--card)]">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-2">
            CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-2">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you!
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10">
          {/* Left — Contact Info */}
          <div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value }) => {
                const Icon = iconMap[icon];
                return (
                  <div key={label} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/15 flex items-center justify-center text-[var(--primary)] shrink-0">
                      {Icon && <Icon size={16} />}
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] font-medium">{label}</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">
                        {value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-7 shadow-lg md:-mt-20">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
