import { FiArrowUpRight } from 'react-icons/fi';

function ContactSection({ contactEmail, contactHref }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="page-width contact-inner" data-reveal>
        <p className="eyebrow">Have something in mind?</p>
        <h2 id="contact-heading" data-text-reveal>Let&apos;s make<br /><span>it happen.</span></h2>
        <p className="contact-copy">I&apos;m always open to a thoughtful conversation about products, teams, and interesting problems.</p>
        <a className="button button-primary contact-button" href={contactHref} target="_blank" rel="noreferrer">
          Start a conversation <FiArrowUpRight aria-hidden="true" />
        </a>
        <a className="contact-email" href={contactHref} target="_blank" rel="noreferrer">{contactEmail}</a>
      </div>
    </section>
  );
}

export default ContactSection;