import { FiArrowRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';

function AboutSection({ contactHref }) {
  return (
    <section className="about-section section-band" id="about" aria-labelledby="about-heading">
      <div className="page-width about-layout">
        <SectionHeading
          eyebrow="A little about me"
          title={<>Product-minded.<br />Engineer.</>}
          className="about-heading"
        />
        <div className="about-copy" data-reveal>
          <h2 id="about-heading" className="sr-only">About me</h2>
          <p className="about-lead" data-text-reveal>I bring ideas to life by connecting thoughtful interface design with dependable engineering.</p>
          <p>
            My work spans the full stack: building responsive interfaces with React and Next.js, designing APIs with Node.js, and working with databases such as MongoDB and PostgreSQL. I care about the details that make software intuitive, maintainable, and ready for real people.
          </p>
          <a className="inline-link" href={contactHref} target="_blank" rel="noreferrer">
            A bit more about working together <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;