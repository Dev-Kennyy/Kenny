import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

function SiteHeader({
  activeSection,
  activeTheme,
  isScrolled,
  menuOpen,
  navigation,
  onToggleMenu,
  onToggleTheme,
  onCloseMenu,
}) {
  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label="Kehinde Salimonu, home">
          <img className="brand-logo" src="/logo.png" alt="" />
        </a>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a className={activeSection === item.id ? 'active' : ''} href={item.href} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
        </a>
        <button
          className="theme-toggle"
          type="button"
          aria-label={activeTheme === 'white' ? 'Switch to original dark theme' : 'Switch to white theme'}
          title={activeTheme === 'white' ? 'Switch to original dark theme' : 'Switch to white theme'}
          onClick={onToggleTheme}
        >
          {activeTheme === 'white' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
        </button>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={onToggleMenu}
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
          <a href={item.href} key={item.id} onClick={onCloseMenu} tabIndex={menuOpen ? 0 : -1}>
            {item.label}<FiArrowUpRight aria-hidden="true" />
          </a>
        ))}
        <a href="#contact" onClick={onCloseMenu} tabIndex={menuOpen ? 0 : -1}>
          Contact<FiArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;