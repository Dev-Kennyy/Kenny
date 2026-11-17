import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LetterReveal from '../components/LetterReveal.jsx';
import Reveal from '../components/Reveal.jsx';
import RollingButton from '../components/RollingButton.jsx';
import { capabilities } from '../data/portfolio.js';
import { easeOutExpo } from '../lib/motion';

export function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="flex flex-col bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
        <section className="w-full pt-16 pb-10 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto text-center">
            <LetterReveal
              lines={["What's", 'Available?']}
              className="text-[50px] md:text-[80px] lg:text-[110px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717] dark:text-white"
            />
          </div>
        </section>

        <section className="w-full py-32 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] border-t border-[#f0f0f0] dark:border-[#1e1e1e] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-5">
              <Reveal
                as="h2"
                className="text-[60px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-tighter leading-none text-[#171717] dark:text-white sticky top-32"
              >
                Choose
                <br />
                Services
              </Reveal>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              {capabilities.map((cap, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <Reveal
                    key={cap.number}
                    y={20}
                    delay={0.08 * idx}
                    duration={0.6}
                    className="border-t border-[#f0f0f0] dark:border-[#1e1e1e] first:border-t-0 py-10 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                      className="w-full text-left group cursor-pointer"
                    >
                      <div className="grid grid-cols-12 items-center gap-4">
                        <span className="col-span-3 sm:col-span-2 text-[13px] font-black text-black/70 dark:text-white/70 tracking-widest">
                          [ {cap.number} ]
                        </span>
                        <h3 className="col-span-9 sm:col-span-10 text-[22px] sm:text-[28px] md:text-[32px] font-bold tracking-tighter text-[#171717] dark:text-white leading-none text-right group-hover:translate-x-[-8px] transition-transform duration-500">
                          {cap.title}
                        </h3>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: easeOutExpo }}
                          className="overflow-hidden"
                        >
                          <div className="mt-8 pt-6 border-t border-[#f5f5f5] dark:border-[#1e1e1e] space-y-6">
                            <p className="text-[14px] md:text-[15px] text-[#171717]/70 dark:text-white/70 leading-relaxed max-w-xl">
                              {cap.description}
                            </p>

                            <div className="space-y-2">
                              <p className="text-[11px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                                Deliverables & Capabilities
                              </p>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#171717] dark:text-white/90">
                                {cap.deliverables.map((item) => (
                                  <li key={item} className="flex items-start gap-2">
                                    <FiCheck size={14} className="mt-1 shrink-0 text-black dark:text-white" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <p className="text-[12px] font-medium text-[#171717]/50 dark:text-white/50">
                                Stack: {cap.tools}
                              </p>
                              <Link to="/contact">
                                <RollingButton variant="outline" size="sm">
                                  Inquire About This
                                </RollingButton>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </div>
  );
}

export default ServicesPage;
