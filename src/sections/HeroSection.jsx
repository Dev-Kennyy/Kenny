import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';

function HeroSection({ portraitRef }) {
  return (
    <section className="hero-section page-width" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-kicker"><span className="status-dot" /> Full-stack developer <span className="kicker-divider">/</span> Nigeria</p>
        <h1 className="hero-title" id="hero-title">
          Building Technology<br />
          Solutions that powers <span>web.</span>
        </h1>
        <p className="hero-copy">
          I&apos;m Salimonu Kehinde, a full-stack developer focused on crafting thoughtful digital experiences with Next.js, Nest.js and TypeScript.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <FiArrowDownRight aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href="/SALIMONU,%20Kehinde%20Blessing%20-%20KennyDev.CV.pdf"
            download
          >
            View résumé <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <a className="hero-scroll-hint" href="#about">
          <span>Scroll to explore</span><span className="scroll-line" />
        </a>
      </div>
      <div className="hero-visual" aria-label="Portrait of Salimonu Kehinde">
        <div className="portrait-index">01 <span>/</span> 05</div>
        <div className="portrait-rule" />
        <div className="hero-portrait-frame" ref={portraitRef}>
          <div className="portrait-backdrop" />
          <img src="/DevK_PP-removebg-preview.png" alt="Salimonu Kehinde" fetchPriority="high" />
        </div>
        <div className="portrait-caption">
          <span>Salimonu Kehinde</span>
          <span>Software engineer</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;