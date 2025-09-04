import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

import Header from './Section1/Header.jsx';
import Sect1 from './Section1/Sect1.jsx';
import Sect2 from './Section2/Sect2.jsx';
import Sect3 from './Section3/Sect3.jsx';
import Sect4 from './Section4/Sect4.jsx';
import Sect5 from './Section5/Sect5.jsx';
import Sect6 from './Section6/Sect6.jsx';
import Sect7 from './Section7/Sect7.jsx';

function FadeOnScroll({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="relative bg-[rgb(249,245,242)]">
      {/* ✅ Fixed Header */}
      <div className="fixed left-0 right-0 top-0 z-50 bg-[rgb(249,245,242)] shadow-md">
        <Header />
      </div>

      {/* ✅ Top padding to push down content below fixed header */}
      <div className="relative space-y-10 pt-[120px]">
        <FadeOnScroll>
          <Sect1 />
        </FadeOnScroll>
        <FadeOnScroll>
          <Sect2 />
        </FadeOnScroll>
        <FadeOnScroll>
          <Sect3 />
        </FadeOnScroll>
        <FadeOnScroll>
          <Sect4 />
        </FadeOnScroll>
        <FadeOnScroll>
          <Sect5 />
        </FadeOnScroll>
        <FadeOnScroll>
          <Sect6 />
        </FadeOnScroll>
        {/* <FadeOnScroll>
          <Sect7 />
        </FadeOnScroll> */}
      </div>
      <div className="fixed left-0 right-0 top-0 z-50 bg-[rgb(249,245,242)] shadow-md">
        <Sect7 />
      </div>
    </div>
  );
}

export default App;
