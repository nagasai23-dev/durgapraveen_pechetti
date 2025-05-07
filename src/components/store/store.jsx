import './StoreComingSoon.css';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const Store = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id="store"
      className="store-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      <motion.div
        className="store-container"
        variants={{
          hidden: { scale: 0.8 },
          visible: { scale: 1, transition: { duration: 1.2, delay: 0.3 } },
        }}
      >
        <motion.h2
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
          }}
        >
          Editing Tool-Kit
        </motion.h2>
        <motion.div
          className="store-message"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 1.2, duration: 1 } },
          }}
        >
          <p className="typing">
            Store coming soon... Stay tuned for amazing Editing Materials! ➡️
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Store;
