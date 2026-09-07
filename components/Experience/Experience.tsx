import {
  MdSchool,
  MdWorkspacePremium,
  MdMemory,
  MdPsychology,
  MdEmojiEvents,
  MdSmartToy,
} from "react-icons/md";
import { SiMeta, SiUdemy } from "react-icons/si";
import { FaLinkedin, FaAws, FaAward } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "@/components/Certifications/CertificationCard";
import { experiences, certifications } from "@/constants";

const certIconMap: Record<string, React.ReactNode> = {
  school: <MdSchool />,
  workspace_premium: <MdWorkspacePremium />,
  memory: <MdMemory />,
  psychology: <MdPsychology />,
  emoji_events: <MdEmojiEvents />,
  smart_toy: <MdSmartToy />,
  SiAmazonwebservices: <FaAws />,
  SiMeta: <SiMeta />,
  SiUdemy: <SiUdemy />,
  FaLinkedin: <FaLinkedin />,
};

function renderCertIcon(icon: string) {
  if (!icon) return <FaAward />;
  if (certIconMap[icon]) {
    return certIconMap[icon];
  }
  if (icon.startsWith("/") || icon.match(/\.(png|svg|jpg|jpeg|webp)$/i)) {
    return <img src={icon} alt="Certificate icon" className="w-6 h-6 object-contain" />;
  }
  return <FaAward />;
}

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20 bg-[var(--surface)]">
      <div className="max-w-[1100px] md:max-h-screen mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* === WORK EXPERIENCE === */}
          <div className="col-span-3">
            <div className="mb-8">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-2">
                EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight">
                Work Experience
              </h2>
            </div>

            <div className="md:max-h-[65vh] md:overflow-y-auto p-4">
              {experiences.map((exp, idx) => (
                <ExperienceCard
                  key={idx}
                  role={exp.role}
                  company={exp.company}
                  location={exp.location}
                  period={exp.period}
                  current={exp.current}
                  bullets={exp.bullets}
                />
              ))}
            </div>
          </div>

          {/* === CERTIFICATIONS === */}
          <div className="col-span-2">
            <div className="mb-8">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--primary)] mb-2">
                CERTIFICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight">
                My Certifications
              </h2>
            </div>

            <div className="flex flex-col gap-3 md:max-h-[65vh] md:overflow-y-auto p-4">
              {certifications.map((cert) => (
                <CertificationCard
                  key={cert.name}
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  icon={renderCertIcon(cert.icon)}
                  color={cert.color}
                  url={cert.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
