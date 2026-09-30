import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

function WorkSection({ projects }) {
  return (
    <section className="work-section section-band" id="work" aria-labelledby="work-heading">
      <div className="page-width section-space">
        <SectionHeading
          eyebrow="Selected work"
          title="A few things I&apos;ve built."
          description="A selection of full-stack products, each made to solve a real need with a clear, considered experience."
        />
        <h2 className="sr-only" id="work-heading">Selected work</h2>
        <div className="project-grid" role="region" aria-label="Selected project cards" tabIndex={0}>
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
        <p className="work-note" data-reveal>Designed, built, and shipped with care.</p>
      </div>
    </section>
  );
}

export default WorkSection;