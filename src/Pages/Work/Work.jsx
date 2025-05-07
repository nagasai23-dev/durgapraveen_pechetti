import { motion } from 'framer-motion';
import Projects from '../../components/Projects/Projects';
import './Work.css';

const Work = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="work-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="work-hero">
        <div className="container">
          <motion.h1 
            variants={itemVariants}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My Work
          </motion.h1>
          <motion.p 
            className="subtitle"
            variants={itemVariants}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A selection of projects showcasing my video editing and design skills
          </motion.p>
        </div>
      </section>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <Projects />
      </motion.div>
      
      {/* Uncomment these when ready */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <BeforeAfter />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Testimonials />
      </motion.div> */}
    </motion.div>
  );
};

export default Work;