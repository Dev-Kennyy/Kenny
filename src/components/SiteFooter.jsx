import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function SiteFooter({ contactHref }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <a className="footer-brand" href="#top">
          <img className="brand-logo" src="/logo.png" alt="Kehinde Salimonu" />
        </a>
        <p>© {new Date().getFullYear()} Kehinde Salimonu</p>
        <nav className="social-links" aria-label="Social links">
          <a href="https://github.com/Dev-Kennyy" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/kehinde-salimonu-b7a956249" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={contactHref} target="_blank" rel="noreferrer" aria-label="Email"><FiMail /></a>
        </nav>
      </div>
    </footer>
  );
}

export default SiteFooter;