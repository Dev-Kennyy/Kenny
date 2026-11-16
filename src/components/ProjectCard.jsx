import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ProjectCard({ project, priority = false }) {
  return (
    <article
      className="project-card group relative flex flex-col justify-between border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden transition-all duration-300 hover:border-[var(--color-text)]"
      data-project-card
    >
      <div>
        {/* Card Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-line)] text-xs font-mono">
          <span className="font-bold text-[var(--color-text)]">
            [{project.number}]
          </span>
          <span className="text-[var(--color-muted)] uppercase tracking-wider text-[11px]">
            {project.category || project.type}
          </span>
        </div>

        {/* Project Image Preview */}
        <Link
          to={`/projects/${project.slug}`}
          className="project-image-link relative block overflow-hidden aspect-[16/10] bg-[var(--color-surface-raised)]"
          aria-label={`View ${project.name} case study`}
        >
          <img
            src={project.image}
            alt={project.imageAlt || `${project.name} interface preview`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-accent-ink)] font-mono text-xs font-bold uppercase tracking-wider rounded flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              View Case Study <FiArrowUpRight aria-hidden="true" />
            </span>
          </div>
        </Link>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
              <Link to={`/projects/${project.slug}`}>
                {project.name}
              </Link>
            </h3>
            <span className="text-xs font-mono text-[var(--color-dim)] shrink-0">
              {project.year || '2025'}
            </span>
          </div>

          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tech pills */}
          <ul
            className="flex flex-wrap gap-1.5"
            aria-label={`${project.name} technologies`}
          >
            {project.technologies.slice(0, 5).map((tech) => (
              <li
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 border border-[var(--color-line)] text-[var(--color-muted)] bg-[var(--color-bg)]"
              >
                {tech}
              </li>
            ))}
            {project.technologies.length > 5 && (
              <li className="text-[11px] font-mono px-2 py-1 text-[var(--color-dim)]">
                +{project.technologies.length - 5} more
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 py-4 border-t border-[var(--color-line)] bg-[var(--color-surface-raised)] flex items-center justify-between text-xs">
        <Link
          to={`/projects/${project.slug}`}
          className="font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] inline-flex items-center gap-1.5 transition-colors"
        >
          Case Study <FiArrowUpRight aria-hidden="true" />
        </Link>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[var(--color-muted)] hover:text-[var(--color-text)] inline-flex items-center gap-1 transition-colors"
            aria-label={`Visit live demo for ${project.name} (opens in new tab)`}
          >
            <span>Live Demo</span>
            <FiExternalLink size={12} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
