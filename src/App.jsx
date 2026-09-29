import { useRef, useState } from 'react';
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from './lib/gsap';
import Stats from './Stats';
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from 'react-icons/fi';

const navigation = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Recommendations', href: '#recommendations', id: 'recommendations' },
];

const themes = [
  { id: 'original', label: 'Original', color: '#101215' },
  { id: 'white', label: 'White', color: '#ffffff' },
];

const contactEmail = 'kehindesalimonu1@gmail.com';
const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;

const projects = [
  {
    number: '00',
    name: 'LappyTech E-commerce',
    type: 'Full-stack platform',
    description:
      'A comprehensive e-commerce platform with interactive product browsing, secure checkout, and inventory management.',
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Paystack'],
    image: '/lappytech.png',
    imageAlt: 'LappyTech E-commerce platform preview',
    href: 'https://lappytech.vercel.app/',
  },

  {
    number: '01',
    name: 'Impact CLM',
    type: 'Content-managed website',
    description:
      'A church website with a custom CMS for devotionals, sermons, events, books, jobs, meetings, and other ministry content.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    image: '/Screenshot%20(35).png',
    imageAlt: 'Impact CLM website preview',
    href: 'https://impactclm.org',
  },
  {
    number: '02',
    name: 'Free TCF',
    type: 'Test Exam Platform',
    description:
      'A church website with a custom CMS for devotionals, sermons, events, books, jobs, meetings, and other ministry content.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    image: '/image copy 2.png',
    imageAlt: 'Free TCF website preview',
    href: 'http://freetcf.vercel.app/',
  },
  {
    number: '03',
    name: 'AskKenny',
    type: 'AI assistant',
    description:
      'An AI-powered assistant for generating content, answering questions, solving problems, and streamlining workflows through natural language.',
    technologies: ['React', 'TypeScript', 'OpenAI'],
    image: '/image%20copy%203.png',
    imageAlt: 'AskKenny application preview',
    href: 'https://askkenny.vercel.app/',
  },
];

const capabilities = [
  {
    number: '01',
    title: 'Frontend engineering',
    description:
      'Responsive, accessible interfaces shaped around the details that make products feel clear and effortless to use.',
    tools: 'React · Next.js · TypeScript · Tailwind CSS',
  },
  {
    number: '02',
    title: 'Backend development',
    description:
      'Reliable APIs and server-side systems, from data modeling and integration to the logic that powers a product.',
    tools: 'Node.js · Express · NestJS · MongoDB · PostgreSQL',
  },
  {
    number: '03',
    title: 'End-to-end delivery',
    description:
      'Connected product experiences that bring thoughtful interfaces, useful services, and deployment together.',
    tools: 'REST APIs · Redux · React Query · Git · Vercel',
  },
];

const recommendations = [
  {
    quote:
      'Working with Kehinde was a fantastic experience. He understood our full-stack requirements clearly and delivered a robust Node.js backend integrated with a clean, responsive frontend.',
    name: 'Adedimeji Akeem',
    role: 'Multimedia Head',
    organization: 'FUTA',
  },
  {
    quote:
      'Kehinde is highly creative and always brings fresh ideas to the Frontend team. He built and integrated an excellent dashboard for our HMS during his IT placement. A reliable team player indeed.',
    name: 'Mr. Akanni Samuel',
    role: 'ICT Head',
    organization: 'BUTH Hospital',
  },
  {
    quote:
      'Kehinde is extremely skilled and dependable. Built and integrated the entire Software for our real estate company, I have recommended him twice.',
    name: 'Marcus Adebayo',
    role: 'Product Owner',
    organization: 'Eden Estates',
  },
];

const technologies = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'NestJS',
  'MongoDB', 'PostgreSQL', 'Supabase', 'Redux', 'React Query', 'Git',
];

function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-heading ${className}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

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
        <img className="project-image" src={project.image} alt={project.imageAlt} loading="lazy" />
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

function App() {
  const pageRef = useRef(null);
  const portraitRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'white' ? 'white' : 'original';
  });

  useGSAP(
    () => {
      const reducedMotion = prefersReducedMotion();
      const smallScreen = window.matchMedia('(max-width: 760px)');

      const navTrigger = ScrollTrigger.create({
        start: 32,
        end: 'max',
        onUpdate: (self) => setIsScrolled(self.scroll() > 32),
      });

      navigation.forEach(({ id }) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
      });

      if (reducedMotion) return;

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .fromTo('.site-header', { y: -18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65 })
        .fromTo('.hero-kicker', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, '-=0.2')
        .fromTo('.hero-title', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.1')
        .fromTo('.hero-copy', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 }, '-=0.3')
        .fromTo('.hero-actions', { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.25')
        .fromTo('.hero-portrait-frame', { x: 24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 }, '-=0.65');

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 86%', once: true },
          },
        );
      });

      gsap.fromTo(
        '[data-project-card]',
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.project-grid', start: 'top 82%', once: true },
        },
      );

      gsap.fromTo(
        '[data-capability]',
        { x: -14, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.capability-list', start: 'top 82%', once: true },
        },
      );

      gsap.fromTo(
        '[data-quote]',
        { scale: 0.98, y: 18, autoAlpha: 0 },
        {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.recommendation-grid', start: 'top 82%', once: true },
        },
      );

      if (!smallScreen.matches && portraitRef.current) {
        const frame = portraitRef.current;
        const moveX = gsap.quickTo(frame, 'x', { duration: 0.7, ease: 'power3.out' });
        const moveY = gsap.quickTo(frame, 'y', { duration: 0.7, ease: 'power3.out' });
        const handlePointerMove = (event) => {
          const bounds = frame.parentElement.getBoundingClientRect();
          moveX(((event.clientX - bounds.left) / bounds.width - 0.5) * 9);
          moveY(((event.clientY - bounds.top) / bounds.height - 0.5) * 9);
        };
        const resetPointer = () => {
          moveX(0);
          moveY(0);
        };
        const stage = frame.parentElement;
        stage.addEventListener('pointermove', handlePointerMove);
        stage.addEventListener('pointerleave', resetPointer);
        return () => {
          stage.removeEventListener('pointermove', handlePointerMove);
          stage.removeEventListener('pointerleave', resetPointer);
          navTrigger.kill();
        };
      }

      return () => navTrigger.kill();
    },
    { scope: pageRef },
  );

  useGSAP(
    () => {
      if (!menuOpen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.fromTo(
        '.mobile-navigation a',
        { y: 12, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.06, ease: 'power2.out' },
      );
    },
    { scope: pageRef, dependencies: [menuOpen], revertOnUpdate: true },
  );

  const closeMenu = () => setMenuOpen(false);
  const selectTheme = (theme) => {
    setActiveTheme(theme);
    window.localStorage.setItem('portfolio-theme', theme);
    setThemeMenuOpen(false);
  };

  return (
    <div className="portfolio" data-theme={activeTheme} ref={pageRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Kehinde Salimonu, home">
            <span className="wordmark-mark">K</span>
            <span>kehinde<span className="wordmark-period">.</span></span>
          </a>
          <nav className="desktop-navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                className={activeSection === item.id ? 'active' : ''}
                href={item.href}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-contact" href="#contact">
            Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
          </a>
          <div
            className="theme-picker"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setThemeMenuOpen(false);
            }}
          >
            <button
              className="theme-toggle"
              type="button"
              aria-label="Choose display theme"
              aria-expanded={themeMenuOpen}
              aria-controls="theme-menu"
              title="Choose display theme"
              onClick={() => setThemeMenuOpen((open) => !open)}
            >
              {activeTheme === 'white' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
            </button>
            <div className="theme-menu" id="theme-menu" role="group" aria-label="Display themes" hidden={!themeMenuOpen}>
              {themes.map((theme) => (
                <button
                  className="theme-option"
                  type="button"
                  key={theme.id}
                  aria-pressed={activeTheme === theme.id}
                  onClick={() => selectTheme(theme.id)}
                >
                  <span className="theme-swatch" style={{ '--swatch-color': theme.color }} />
                  <span>{theme.label}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
        <nav
          className={`mobile-navigation${menuOpen ? ' is-open' : ''}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <a href={item.href} key={item.id} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              {item.label}<FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            Contact<FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="main-content">
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
              <img src="/DevK_PP-removebg-preview.png" alt="Salimonu Kehinde" />
            </div>
            <div className="portrait-caption">
              <span>Salimonu Kehinde</span>
              <span>Software engineer</span>
            </div>
          </div>
        </section>

        <Stats
          metrics={[
            { value: 24, suffix: '/7', label: 'SUPPORT' },
            { value: 4.8, decimals: 1, suffix: '/5', label: 'CLIENTS RATINGS' },
            { value: 98, suffix: '%', label: 'HAPPY CLIENT' },
          ]}
        />

        <section className="about-section section-band" id="about" aria-labelledby="about-heading">
          <div className="page-width about-layout">
<SectionHeading
  eyebrow="A little about me"
  title={
    <>
      Product-minded.
      <br />
      Engineer.
    </>
  }
  className="about-heading"
/>            <div className="about-copy" data-reveal>
              <h2 id="about-heading" className="sr-only">About me</h2>
              <p className="about-lead">I bring ideas to life by connecting thoughtful interface design with dependable engineering.</p>
              <p>
                My work spans the full stack: building responsive interfaces with React and Next.js, designing APIs with Node.js, and working with databases such as MongoDB and PostgreSQL. I care about the details that make software intuitive, maintainable, and ready for real people.
              </p>
              <a className="inline-link" href={contactHref} target="_blank" rel="noreferrer">
                A bit more about working together <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

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
                  <h3>{capability.title}</h3>
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
              {technologies.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </section>

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

        <section className="recommendations-section page-width section-space" id="recommendations" aria-labelledby="recommendations-heading">
          <SectionHeading
            eyebrow="Kind words"
            title="Good work is a team effort."
            description="A few words from people I&apos;ve had the pleasure of working with."
          />
          <h2 className="sr-only" id="recommendations-heading">Recommendations</h2>
          <div className="recommendation-grid">
            {recommendations.map((recommendation) => (
              <figure className="recommendation" data-quote key={recommendation.name}>
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>{recommendation.quote}</blockquote>
                <figcaption>
                  <span className="recommendation-name">{recommendation.name}</span>
                  <span>{recommendation.role} <span className="caption-divider">/</span> {recommendation.organization}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="page-width contact-inner" data-reveal>
            <p className="eyebrow">Have something in mind?</p>
            <h2 id="contact-heading">Let&apos;s make<br /><span>it happen.</span></h2>
            <p className="contact-copy">I&apos;m always open to a thoughtful conversation about products, teams, and interesting problems.</p>
            <a className="button button-primary contact-button" href={contactHref} target="_blank" rel="noreferrer">
              Start a conversation <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-email" href={contactHref} target="_blank" rel="noreferrer">{contactEmail}</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="footer-brand" href="#top">Kehinde Salimonu<span>.</span></a>
          <p>© {new Date().getFullYear()} Kehinde Salimonu</p>
          <nav className="social-links" aria-label="Social links">
            <a href="https://github.com/Dev-Kennyy" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/kehinde-salimonu-b7a956249" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href={contactHref} target="_blank" rel="noreferrer" aria-label="Email"><FiMail /></a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
