import { FiArrowUpRight } from 'react-icons/fi';

function ProjectCard({ project }) {
  return (
    <article className="project-card" data-project-card>
      <a
        className="project-image-link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.name}`}
      >
        <img
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <span className="project-image-action" aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </a>
      <div className="project-details">
        <div className="project-title-row">
          <div>
            <p className="project-type">{project.type}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="project-number">{project.number}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="technology-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;