import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import RollingButton from './RollingButton.jsx';

function SiteFooter() {
  return (
    <footer className="w-full bg-[#f7f7f7] dark:bg-[#111111] border-t border-[#e5e5e5] dark:border-[#1e1e1e] transition-colors duration-200">
      <div className="lg:px-10 md:px-8 px-5 py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-black uppercase tracking-tighter leading-[1.05] text-[#171717] dark:text-white mb-8">
              Have any project
              <br />
              idea? Contact me
            </h2>
            <Link to="/contact">
              <RollingButton variant="black">Contact Now</RollingButton>
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wide text-[#171717] dark:text-white">
                Main Pages
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    to="/"
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    Project
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wide text-[#171717] dark:text-white">
                Utility Pages
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    404 Page
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wide text-[#171717] dark:text-white">
                More Pages
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    to="/services"
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wide text-[#171717] dark:text-white">
                Socials
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[14px] text-[#171717]/60 dark:text-white/60 hover:text-[#171717] dark:hover:text-white transition-colors duration-300"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-[#e5e5e5] dark:border-[#1e1e1e]">
        <div className="max-w-[1400px] mx-auto lg:px-10 md:px-8 px-5 py-6 flex items-center justify-between">
          <p className="text-[13px] text-[#171717]/50 dark:text-white/40">
            Copyright @ {personalInfo.name}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
