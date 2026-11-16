import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOutExpo } from '../lib/motion';

export function NotFoundPage() {
  const reduce = useReducedMotion();
  const fade = (delay, y = 20) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: easeOutExpo },
        };

  return (
    <div className="flex flex-col bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
        <section className="relative min-h-[calc(100vh-88px)] overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: easeOutExpo }}
              className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#171717]/5 dark:bg-white/5 blur-2xl"
            />
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: easeOutExpo }}
              className="absolute right-[-60px] top-[20%] h-80 w-80 rounded-full bg-[#171717]/10 dark:bg-white/10 blur-2xl"
            />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto text-center flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-5 py-20">
            <motion.span
              {...fade(0, 20)}
              className="text-[12px] font-black uppercase tracking-[0.35em] text-[#171717]/45 dark:text-white/40 mb-4"
            >
              Lost In The Build
            </motion.span>

            <motion.h1
              {...fade(0.05, 24)}
              className="text-[80px] md:text-[140px] lg:text-[180px] font-black uppercase tracking-tighter leading-none text-[#171717] dark:text-white mb-6"
            >
              404
            </motion.h1>

            <motion.h2
              {...fade(0.15)}
              className="text-[28px] md:text-[40px] font-black uppercase tracking-tight text-[#171717] dark:text-white mb-4"
            >
              This Page Took A Wrong Turn
            </motion.h2>

            <motion.p
              {...fade(0.22, 18)}
              className="text-[14px] md:text-[16px] text-[#171717]/60 dark:text-white/60 max-w-[500px] mx-auto leading-relaxed mb-10"
            >
              The URL might be outdated, moved, or never existed. Let&apos;s route you back to something useful.
            </motion.p>

            <motion.div
              {...fade(0.3, 18)}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/"
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-bold text-sm hover:bg-[#333] dark:hover:bg-[#ccc] transition-colors"
              >
                Back Home
              </Link>

              <Link
                to="/projects"
                className="px-6 py-3 border border-[#dfdfdf] dark:border-[#2a2a2a] text-[#171717] dark:text-white font-bold text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
  );
}

export default NotFoundPage;
