import { useRef, useState } from 'react';
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from './lib/gsap.js';
import Stats from './Stats.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import AboutSection from './sections/AboutSection.jsx';
import CapabilitiesSection from './sections/CapabilitiesSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import RecommendationsSection from './sections/RecommendationsSection.jsx';
import WorkSection from './sections/WorkSection.jsx';
import {
  capabilities,
  contactEmail,
  contactHref,
  metrics,
  navigation,
  projects,
  recommendations,
  technologies,
} from './data/portfolio.js';

function PortfolioApp() {
  const pageRef = useRef(null);
  const portraitRef = useRef(null);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'white' ? 'white' : 'original';
  });

  useGSAP(
    () => {
      const navigationTriggers = [];
      const navTrigger = ScrollTrigger.create({
        start: 32,
        end: 'max',
        onUpdate: (self) => setIsScrolled(self.scroll() > 32),
      });

      navigation.forEach(({ id }) => {
        navigationTriggers.push(ScrollTrigger.create({
          trigger: `#${id}`,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        }));
      });

      const page = pageRef.current;
      const refreshAfterAssetLoad = (event) => {
        if (event.target instanceof HTMLImageElement) ScrollTrigger.refresh();
      };
      page.addEventListener('load', refreshAfterAssetLoad, true);
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 300);

      const cleanupTriggers = () => {
        navTrigger.kill();
        navigationTriggers.forEach((trigger) => trigger.kill());
      };

      if (prefersReducedMotion()) {
        return () => {
          cleanupTriggers();
          page.removeEventListener('load', refreshAfterAssetLoad, true);
          window.clearTimeout(refreshTimer);
        };
      }

      const mobileScreen = window.matchMedia('(max-width: 760px)').matches;
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .fromTo('.site-header', { y: -18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65 })
        .fromTo('.hero-kicker', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, '-=0.2')
        .fromTo('.hero-title', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.1')
        .fromTo('.hero-copy', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 }, '-=0.3')
        .fromTo('.hero-actions', { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, '-=0.25')
        .fromTo('.hero-portrait-frame', { x: 24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8 }, '-=0.65');

      const revealStart = mobileScreen ? 'top 94%' : 'top 86%';
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: revealStart, once: true },
          },
        );
      });

      gsap.utils.toArray('[data-text-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 26, autoAlpha: 0, clipPath: 'inset(0 0 35% 0)' },
          {
            y: 0,
            autoAlpha: 1,
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: revealStart, once: true },
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
          scrollTrigger: { trigger: '.project-grid', start: revealStart, once: true },
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
          scrollTrigger: { trigger: '.capability-list', start: revealStart, once: true },
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
          scrollTrigger: { trigger: '.recommendation-grid', start: revealStart, once: true },
        },
      );

      let removePointerListeners = () => {};
      if (!mobileScreen && portraitRef.current) {
        const frame = portraitRef.current;
        const stage = frame.parentElement;
        const moveX = gsap.quickTo(frame, 'x', { duration: 0.7, ease: 'power3.out' });
        const moveY = gsap.quickTo(frame, 'y', { duration: 0.7, ease: 'power3.out' });
        const handlePointerMove = (event) => {
          const bounds = stage.getBoundingClientRect();
          moveX(((event.clientX - bounds.left) / bounds.width - 0.5) * 9);
          moveY(((event.clientY - bounds.top) / bounds.height - 0.5) * 9);
        };
        const resetPointer = () => {
          moveX(0);
          moveY(0);
        };
        stage.addEventListener('pointermove', handlePointerMove);
        stage.addEventListener('pointerleave', resetPointer);
        removePointerListeners = () => {
          stage.removeEventListener('pointermove', handlePointerMove);
          stage.removeEventListener('pointerleave', resetPointer);
        };
      }

      return () => {
        cleanupTriggers();
        removePointerListeners();
        page.removeEventListener('load', refreshAfterAssetLoad, true);
        window.clearTimeout(refreshTimer);
      };
    },
    { scope: pageRef },
  );

  useGSAP(
    () => {
      if (!menuOpen || prefersReducedMotion()) return;
      gsap.fromTo(
        '.mobile-navigation a',
        { y: 12, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.06, ease: 'power2.out' },
      );
    },
    { scope: pageRef, dependencies: [menuOpen], revertOnUpdate: true },
  );

  const selectTheme = (theme) => {
    setActiveTheme(theme);
    window.localStorage.setItem('portfolio-theme', theme);
  };

  return (
    <div className="portfolio" data-theme={activeTheme} ref={pageRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader
        activeSection={activeSection}
        activeTheme={activeTheme}
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        navigation={navigation}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onToggleTheme={() => selectTheme(activeTheme === 'white' ? 'original' : 'white')}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <main id="main-content">
        <HeroSection portraitRef={portraitRef} />
        <Stats metrics={metrics} />
        <AboutSection contactHref={contactHref} />
        <CapabilitiesSection capabilities={capabilities} technologies={technologies} />
        <WorkSection projects={projects} />
        <RecommendationsSection recommendations={recommendations} />
        <ContactSection contactEmail={contactEmail} contactHref={contactHref} />
      </main>
      <SiteFooter contactHref={contactHref} />
    </div>
  );
}

export default PortfolioApp;
