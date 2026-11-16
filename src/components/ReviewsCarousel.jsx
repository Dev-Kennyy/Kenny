import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { easeOutExpo } from '../lib/motion';
import Reveal from './Reveal.jsx';

function ReviewsCarousel({ reviews }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(2);
  const timerRef = useRef(null);
  const reduce = useReducedMotion();
  const maxIndex = Math.max(reviews.length - visible, 0);

  useEffect(() => {
    const update = () => {
      setVisible(window.innerWidth < 768 ? 1 : 2);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const next = useCallback(() => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (reduce) return undefined;
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, reduce]);

  const restart = (direction) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (direction === 'prev') prev();
    else next();
    if (!reduce) timerRef.current = setInterval(next, 4000);
  };

  const goTo = (i) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIndex(i);
    if (!reduce) timerRef.current = setInterval(next, 4000);
  };

  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] overflow-hidden transition-colors duration-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start gap-6 mb-10 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <Reveal as="h2" className="text-[clamp(2.5rem,10vw,5.625rem)] font-black uppercase tracking-tighter leading-[0.95] text-[#171717] dark:text-white">
            Client
            <br />
            Reviews
          </Reveal>
          <Reveal y={20} delay={0.2} duration={0.6} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => restart('prev')}
              className="w-12 h-12 bg-black text-white hover:bg-[#333] dark:bg-white dark:text-black dark:hover:bg-[#ccc] flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Previous review"
            >
              <FiArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => restart('next')}
              className="w-12 h-12 bg-black text-white hover:bg-[#333] dark:bg-white dark:text-black dark:hover:bg-[#ccc] flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Next review"
            >
              <FiArrowRight size={20} />
            </button>
          </Reveal>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `${-((100 / visible) * index)}%` }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.6, ease: easeOutExpo }
            }
            style={{ gap: '24px' }}
          >
            {reviews.map((rec) => {
              const initials = rec.name
                .split(' ')
                .map((word) => word[0])
                .join('')
                .slice(0, 2);

              return (
                <div
                  key={rec.name}
                  className="shrink-0 bg-[#f7f7f7] dark:bg-[#141414] border border-transparent dark:border-[#222222] p-8 md:p-10 flex flex-col justify-between"
                  style={{
                    width: `calc((100% - ${24 * (visible - 1)}px) / ${visible})`,
                  }}
                >
                  <p className="text-[18px] md:text-[22px] lg:text-[26px] font-bold tracking-tight leading-snug text-[#171717] dark:text-white mb-10">
                    &ldquo;{rec.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-[13px] font-black text-[#171717] dark:text-white">
                      {initials}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#171717] dark:text-white">
                        {rec.name}
                      </p>
                      <p className="text-[12px] text-[#171717]/50 dark:text-white/50">
                        {rec.role} at {rec.organization}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-[3px] transition-all duration-500 cursor-pointer ${
                i === index
                  ? 'w-10 bg-black dark:bg-white'
                  : 'w-5 bg-black/15 hover:bg-black/30 dark:bg-white/15 dark:hover:bg-white/30'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsCarousel;
