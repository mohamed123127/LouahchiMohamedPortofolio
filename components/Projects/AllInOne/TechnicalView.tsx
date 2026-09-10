"use client";

import React from "react";
import { allInOneProjectData } from "@/constants/allInOneProject";

// ─── Section components ───────────────────────────────────────────────────────
import TechHero from "./TechHero";
import TechnicalOverview from "./TechnicalOverview";
import SystemArchitectureCard from "./SystemArchitectureCard";
import TechStackCard from "./TechStackCard";
import ChallengesAndCode from "./ChallengesAndCode";
import ScreenshotsGallery from "./ScreenshotsGallery";
import MetricsAndSchema from "./MetricsAndSchema";
import ProjectCTABanner from "./ProjectCTABanner";

// ─── Sidebar components ───────────────────────────────────────────────────────
import ProjectDetailsSidebar from "./ProjectDetailsSidebar";
import KeyResponsibilities from "./KeyResponsibilities";

interface TechnicalViewProps {
  onSwitchToClientView?: () => void;
  isReadyClientPreview?: boolean;
  isReadyRecruteurPreview?: boolean;
}

export default function TechnicalView({
  onSwitchToClientView,
  isReadyClientPreview = true,
  isReadyRecruteurPreview = true,
}: TechnicalViewProps) {
  const projectDetails = {
    role: allInOneProjectData.detailsGrid.myRole,
    duration: allInOneProjectData.detailsGrid.duration,
    teamSize: allInOneProjectData.detailsGrid.teamSize,
    repository: allInOneProjectData.detailsGrid.repository,
    liveDemo: allInOneProjectData.liveDemoUrl.replace(/^https?:\/\//, ""),
    liveDemoUrl: allInOneProjectData.liveDemoUrl,
    status: allInOneProjectData.detailsGrid.status,
  };

  const techStackSections = [
    { heading: "Frontend", items: allInOneProjectData.techStack.technical.frontend },
    { heading: "Backend", items: allInOneProjectData.techStack.technical.backend },
    { heading: "DevOps & Tools", items: allInOneProjectData.techStack.technical.devops },
  ];

  return (
    <div className="flex flex-col animate-fadeInUp">
      {/* ═══ HERO ═══════════════════════════════════════════════════════════════ */}
      <TechHero
        onSwitchToClientView={onSwitchToClientView}
        isReadyClientPreview={isReadyClientPreview}
        isReadyRecruteurPreview={isReadyRecruteurPreview}
      />

      {/* ═══ MAIN 2-COLUMN LAYOUT (EQUAL HEIGHT COLUMNS) ═════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
        {/* Left column: Technical Overview + System Architecture + Tech Stack */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-between space-y-4 h-full">
          <TechnicalOverview overview={allInOneProjectData.overview.technical} />
          <SystemArchitectureCard />
          <TechStackCard sections={techStackSections} />
        </div>

        {/* Right column: Project Details + Key Responsibilities */}
        <div className="col-span-12 md:col-span-4 flex flex-col justify-between space-y-4 h-full">
          <ProjectDetailsSidebar details={projectDetails} />
          <KeyResponsibilities
            responsibilities={allInOneProjectData.responsibilities}
            className="flex-1 flex flex-col justify-between"
          />
        </div>
      </div>

      {/* ═══ CODE EXAMPLES, CHALLENGES & SOLUTIONS ═════════════════════════════ */}
      <ChallengesAndCode
        className="mb-6"
        challenges={allInOneProjectData.challenges}
        whatILearned={allInOneProjectData.whatILearned}
        codeSnippets={allInOneProjectData.codeSnippets}
      />

      {/* ═══ SCREENSHOTS GALLERY ═══════════════════════════════════════════════ */}
      <ScreenshotsGallery className="mb-6" screenshots={allInOneProjectData.screenshots} />

      {/* ═══ METRICS + DB SCHEMA ═══════════════════════════════════════════════ */}
      <MetricsAndSchema className="mb-6" stats={allInOneProjectData.technicalStats} />

      {/* ═══ CTA BANNER ══════════════════════════════════════════════════════════ */}
      <ProjectCTABanner />
    </div>
  );
}
