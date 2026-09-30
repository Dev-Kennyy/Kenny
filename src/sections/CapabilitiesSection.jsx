import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';

function CapabilitiesSection({ capabilities, technologies }) {
  return (
    <section className="capabilities-section page-width section-space" id="capabilities" aria-labelledby="capabilities-heading">
      <SectionHeading
        eyebrow="What I do"
        title="From first commit to final detail."
        description="I work across the product stack to build experiences that feel considered and work reliably."
      />
      <h2 className="sr-only" id="capabilities-heading">What I do</h2>
      <div className="capability-list">
        {capabilities.map((capability) => (
          <article className="capability-row" data-capability key={capability.number}>
            <span className="capability-number">{capability.number}</span>
            <div className="capability-main">
              <h3 data-text-reveal>{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
            <p className="capability-tools">{capability.tools}</p>
            <FiArrowUpRight className="capability-arrow" aria-hidden="true" />
          </article>
        ))}
      </div>
      <div className="toolkit-row" data-reveal>
        <span className="toolkit-label">Toolkit</span>
        <div className="toolkit-tags">
          {technologies.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;