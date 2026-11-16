import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

function WorkSection({ projects }) {
  return (
    <section
      className="work-section py-20 sm:py-32 border-b border-[var(--color-line)] bg-[var(--color-bg)]"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="page-width">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Engineered for real-world impact."
            description="A selection of full-stack products, interactive platforms, and AI assistants designed to solve real operational needs with speed and clarity."
            id="work-heading"
            className="mb-0"
          />

          <Link
            className="button button-primary self-start md:self-end shrink-0"
            to="/projects"
          >
            Browse all projects <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        {/* Project Grid */}
        <div
          className="project-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          role="region"
          aria-label="Selected project cards"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index < 2}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-[var(--color-line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[var(--color-muted)]">
          <span>[TOTAL PROJECTS]: 04 PRODUCTION CASE STUDIES AVAILABLE</span>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span>View complete portfolio repository</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
