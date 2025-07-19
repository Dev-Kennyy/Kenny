import { motion, AnimatePresence } from 'framer-motion';
import Sect1 from './Section1/Sect1.jsx';
import Sect2 from './Section2/Sect2.jsx';
import Sect3 from './Section3/Sect3.jsx';
import Sect4 from './Section4/Sect4.jsx';
import Sect5 from './Section5/Sect5.jsx';
import Sect6 from './Section6/Sect6.jsx';
import Sect7 from './Section7/Sect7.jsx';

const sections = [Sect1, Sect2, Sect3, Sect4, Sect5, Sect6, Sect7];

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.17, 0.67, 0.83, 0.67] },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
};

function App() {
  return (
    <>
      {sections.map((Section, i) => (
        <AnimatePresence key={i}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={fadeInUp}
            viewport={{
              once: false, // animation can trigger every time it enters viewport
              amount: 0.7, // triggers when 20% of the section is visible
            }}
            style={{ willChange: 'opacity, transform' }}
          >
            <Section />
            {i === 0 && <hr />}
          </motion.div>
        </AnimatePresence>
      ))}
    </>
  );
}

export default App;
