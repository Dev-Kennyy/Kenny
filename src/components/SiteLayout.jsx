import SiteFooter from './SiteFooter.jsx';
import SiteHeader from './SiteHeader.jsx';

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0c0c0c] text-[#171717] dark:text-[#ededed] transition-colors duration-200">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}

export default SiteLayout;
