"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ViewToggleHeader from "@/components/Projects/AllInOne/ViewToggleHeader";
import ClientView from "@/components/Projects/AllInOne/ClientView";
import TechnicalView from "@/components/Projects/AllInOne/TechnicalView";
import { projects } from "@/constants/projects";

const allInOneProject = projects.find((p) =>
  p.liveUrl.includes("All-in-OneBusinessSuiteSaas") || p.title.includes("All-in-One")
);

const isReadyClientPreview = allInOneProject?.isReadyClientPreview ?? false;
const isReadyRecruteurPreview = allInOneProject?.isReadyRecruteurPreview ?? true;

function EasyEcommerceContent() {
  const searchParams = useSearchParams();
  const [currentView, setCurrentView] = useState<"client" | "technical">("technical");

  useEffect(() => {
    const mode = searchParams ? searchParams.get("mode") : null;
    if ((mode === "recruiter" || mode === "technical") && isReadyRecruteurPreview) {
      setCurrentView("technical");
    } else if (mode === "client" && isReadyClientPreview) {
      setCurrentView("client");
    } else if (isReadyRecruteurPreview) {
      setCurrentView("technical");
    } else if (isReadyClientPreview) {
      setCurrentView("client");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300 font-sans selection:bg-[var(--primary-soft)] selection:text-[var(--primary)] pb-16">
      {/* View Toggle Header */}
      <ViewToggleHeader
        currentView={currentView}
        onToggleView={(view) => setCurrentView(view)}
        isReadyClientPreview={isReadyClientPreview}
        isReadyRecruteurPreview={isReadyRecruteurPreview}
      />

      {/* Main Content View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {currentView === "client" ? (
          <ClientView />
        ) : (
          <TechnicalView
            onSwitchToClientView={() => {
              if (isReadyClientPreview) setCurrentView("client");
            }}
            isReadyClientPreview={isReadyClientPreview}
            isReadyRecruteurPreview={isReadyRecruteurPreview}
          />
        )}
      </main>
    </div>
  );
}

export default function EasyEcommercePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center text-sm font-semibold">
          Loading project presentation...
        </div>
      }
    >
      <EasyEcommerceContent />
    </Suspense>
  );
}
