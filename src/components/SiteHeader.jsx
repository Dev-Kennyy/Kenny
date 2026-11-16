import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { personalInfo } from '../data/portfolio.js';
import { easeMask, navRoll } from '../lib/motion';
import RollingButton from './RollingButton.jsx';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
];

const menuItem = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

const overlay = {
  closed: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.5, ease: easeMask, when: 'afterChildren' },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeMask,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-[100] flex lg:px-10 md:px-8 px-5 py-4 justify-between items-center bg-white dark:bg-[#0c0c0c] border-b border-transparent dark:border-[#1a1a1a] transition-colors duration-200">
      <Link className="z-[110]" to="/" aria-label="Kenny Portfolio Home">
        <img src="/logo.png" alt="alt" width={40} height={40} className="object-contain border p-2 rounded-full" />
      </Link>

      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((item) => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

          return (
            <motion.li
              key={item.path}
              initial="initial"
              whileHover="hover"
              className="relative overflow-hidden cursor-pointer text-[15px] font-medium h-6"
            >
              <Link to={item.path} aria-current={isActive ? 'page' : undefined}>
                <motion.div
                  className="flex flex-col"
                  variants={navRoll}
                  transition={{ duration: 0.4, ease: easeMask }}
                >
                  <span
                    className={`h-6 flex items-center ${
                      isActive
                        ? 'font-bold text-[#171717] dark:text-white underline decoration-2 underline-offset-2'
                        : 'text-[#171717] dark:text-[#ededed]'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="h-6 flex items-center text-black/40 dark:text-white/40">
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            </motion.li>
          );
        })}
      </ul>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          className="w-10 h-10 border border-[#dfdfdf] dark:border-[#2a2a2a] bg-white dark:bg-[#141414] text-[#171717] dark:text-[#ededed] flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-pointer"
        >
          {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
        </button>

        <Link className="hidden md:block" to="/contact">
          <RollingButton variant="white">Contact</RollingButton>
        </Link>

        <button
          className="md:hidden z-[130] relative p-2 overflow-hidden text-[#171717] dark:text-white"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMenu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={overlay}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 w-full h-[100dvh] bg-white dark:bg-[#0c0c0c] z-[120] md:hidden flex flex-col pt-24 px-5 pb-10"
          >
            <div className="flex flex-col h-full">
              <ul className="flex flex-col gap-6 mt-10">
                {navLinks.map((item) => {
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.path);

                  return (
                    <motion.li key={item.path} variants={menuItem} className="overflow-hidden">
                      <Link
                        to={item.path}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-[48px] font-black uppercase tracking-tighter leading-none text-[#171717] dark:text-white hover:pl-4 transition-all duration-300 ${
                          isActive ? 'underline decoration-2 underline-offset-8' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-12">
                <motion.div variants={menuItem} className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 dark:text-white/30">
                    Get in touch
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <RollingButton variant="black" className="w-full justify-between">
                      Start a Project
                    </RollingButton>
                  </Link>
                </motion.div>

                <motion.div
                  variants={menuItem}
                  className="flex justify-between items-end border-t border-black/5 dark:border-white/10 pt-8"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 dark:text-white/30">
                      Socials
                    </p>
                    <div className="flex gap-4 text-[#171717] dark:text-white">
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black/50 dark:hover:text-white/50 transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black/50 dark:hover:text-white/50 transition-colors"
                      >
                        <FiLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="text-[11px] font-medium text-black/40 dark:text-white/40"
                  >
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default SiteHeader;
