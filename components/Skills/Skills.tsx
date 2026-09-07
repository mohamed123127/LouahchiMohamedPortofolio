"use client";

import { useState } from "react";
import {
  SiTypescript,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiMui,
  SiShadcnui,
  SiDjango,
  SiLaravel,
  SiDotnet,
  SiTypeorm,
  SiJsonwebtokens,
  SiMysql,
  SiElectron,
  SiPytorch,
  SiLangchain,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiFigma,
  SiJira,
} from "react-icons/si";
import {
  FaBrain,
  FaLanguage,
  FaEye,
  FaRobot,
  FaCubes,
  FaLayerGroup,
  FaProjectDiagram,
  FaServer,
  FaCode,
  FaTools,
  FaCheckDouble,
  FaNetworkWired,
  FaSyncAlt,
} from "react-icons/fa";
import { GiBearHead } from "react-icons/gi";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandOpenai } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import SkillCard from "./SkillCard";
import { favoriteSkills, allSkills, principles, categoryTabs, type SkillCategory } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  SiTypescript: <SiTypescript />,
  SiNestjs: <SiNestjs />,
  SiNextdotjs: <SiNextdotjs />,
  SiReact: <SiReact />,
  SiNodedotjs: <SiNodedotjs />,
  SiPostgresql: <SiPostgresql />,
  SiDocker: <SiDocker />,
  SiGit: <SiGit />,
  SiTailwindcss: <SiTailwindcss />,
  SiRedux: <SiRedux />,
  SiReactquery: <SiReactquery />,
  SiMui: <SiMui />,
  SiShadcnui: <SiShadcnui />,
  SiDjango: <SiDjango />,
  SiLaravel: <SiLaravel />,
  SiDotnet: <SiDotnet />,
  SiTypeorm: <SiTypeorm />,
  SiJsonwebtokens: <SiJsonwebtokens />,
  SiMysql: <SiMysql />,
  SiElectron: <SiElectron />,
  SiPytorch: <SiPytorch />,
  SiLangchain: <SiLangchain />,
  SiGithub: <SiGithub />,
  SiGitlab: <SiGitlab />,
  SiPostman: <SiPostman />,
  SiFigma: <SiFigma />,
  SiJira: <SiJira />,
  GiBearHead: <GiBearHead />,
  DiMsqlServer: <DiMsqlServer />,
  TbBrandOpenai: <TbBrandOpenai />,
  VscAzureDevops: <VscAzureDevops />,
  FaBrain: <FaBrain />,
  FaLanguage: <FaLanguage />,
  FaEye: <FaEye />,
  FaRobot: <FaRobot />,
  FaCubes: <FaCubes />,
  FaLayerGroup: <FaLayerGroup />,
  FaProjectDiagram: <FaProjectDiagram />,
  FaServer: <FaServer />,
  FaCode: <FaCode />,
  FaTools: <FaTools />,
  FaCheckDouble: <FaCheckDouble />,
  FaNetworkWired: <FaNetworkWired />,
  FaSyncAlt: <FaSyncAlt />,
};

function renderSkillIcon(icon: string, name: string) {
  if (iconMap[icon]) {
    return iconMap[icon];
  }
  if (icon.startsWith("/")) {
    return <img src={icon} alt={name} className="w-7 h-7 object-contain" />;
  }
  return <FaTools size={20} />;
}

export default function Skills() {
  const [showAllCatalog, setShowAllCatalog] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | SkillCategory>("all");

  const filteredSkills =
    activeFilter === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-14 md:py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Section Header with Title and Toggle Button */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-2">
              SKILLS & EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight">
              {showAllCatalog ? "All Skills & Tools" : "My Favorite Skills"}
            </h2>
          </div>

          {/* Toggle Button */}
          <button
            type="button"
            onClick={() => setShowAllCatalog((prev) => !prev)}
            className={`inline-flex items-center justify-center font-semibold text-xs md:text-sm px-5 py-2.5 rounded-lg cursor-pointer transition-all duration-200 shadow-sm ${
              showAllCatalog
                ? "bg-[var(--primary)] text-white border border-[var(--primary)] hover:bg-[var(--primary-hover)] shadow-md"
                : "bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary-soft)]"
            }`}
          >
            {showAllCatalog ? "Show Preferred Skills" : "Show All Skills"}
          </button>
        </div>

        {/* View 1: Favorite Skills + Architecture & Principles */}
        {!showAllCatalog && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start animate-fadeInUp">
            {/* Left Column: Favorite Skills */}
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3.5">
                {favoriteSkills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={renderSkillIcon(skill.icon, skill.name)}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Architecture & Principles List */}
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] mb-1">
                Architecture & Principles
              </h3>
              <ul className="flex flex-col gap-3 list-none p-0 m-0 mt-4">
                {principles.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)] px-3.5 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* View 2: Full Skills Catalog with Divided Filters */}
        {showAllCatalog && (
          <div
            id="full-skills-catalog"
            className="bg-[var(--card-elevated)] border border-[var(--border)] rounded-2xl p-6 sm:p-7 animate-fadeInUp shadow-md"
          >
            {/* Filter Tabs */}
            <div className="flex flex-col gap-3 mb-7">
              <p className="text-xs text-[var(--text-secondary)] font-medium">
                Filter by category:
              </p>
              <div className="flex flex-wrap gap-2">
                {categoryTabs.map((tab) => {
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveFilter(tab.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-all duration-200 ${
                        isActive
                          ? "bg-[var(--primary)] border-[var(--primary)] text-white shadow-xs"
                          : "bg-[var(--card)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filtered Grid */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-3.5 mb-8 max-h-[310px] overflow-y-auto">
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={renderSkillIcon(skill.icon, skill.name)}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
