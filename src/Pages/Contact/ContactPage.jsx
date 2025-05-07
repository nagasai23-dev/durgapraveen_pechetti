import { motion } from 'framer-motion';
import Contact from '../../components/Contact/Contact';
import './ContactPage.css';

const ContactPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="contact-hero">
        <div className="container">
          <motion.h1 
            variants={itemVariants}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.2,
              duration: 0.7,
              type: "spring",
              stiffness: 100
            }}
          >
            Contact Me
          </motion.h1>
          <motion.p 
            className="subtitle"
            variants={itemVariants}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.4,
              duration: 0.7,
              type: "spring",
              stiffness: 100
            }}
          >
            Let's discuss your project and how I can help bring your vision to life
          </motion.p>
        </div>
        
        {/* Animated decorative elements */}
        <motion.div 
          className="hero-circle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ delay: 0.6, duration: 1, type: "spring" }}
        />
        <motion.div 
          className="hero-dots"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ delay: 0.8, duration: 1, type: "spring" }}
        />
      </section>
      
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;