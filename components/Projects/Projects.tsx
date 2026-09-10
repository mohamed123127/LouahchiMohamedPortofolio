import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import { projects, socialLinks } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-2">
              PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight">
              Featured Projects
            </h2>
          </div>
          <a
            href={socialLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--primary)] font-semibold text-xs md:text-sm hover:underline mt-4 shrink-0"
          >
            View All Projects <FiArrowRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pt-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              period={project.period}
              isFeatured={project.featured}
              isBuilding={project.isBuilding}
              isReadyClientPreview={project.isReadyClientPreview}
              isReadyRecruteurPreview={project.isReadyRecruteurPreview}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
