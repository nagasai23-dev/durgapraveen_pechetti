import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './StoreContent.css';

const StoreContent = () => {
  const [text, setText] = useState('');
  const videoRef = useRef(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const fullText = "Exciting templates and editing packs for fellow editors-Launching Soon!";

  // Text typing animation
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  // Column animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const videoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  };

  return (
    <motion.div 
      className="store-layout"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div 
        className="content-column"
        variants={itemVariants}
      >
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
          >
            Editor's Store
          </motion.h2>
          
          <motion.p 
            className="typing-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {text}
            <motion.span 
              className="cursor"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut"
              }}
            />
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="video-column"
        variants={videoVariants}
      >
        <motion.div
          className="video-container"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="template-video"
          >
            <source src="/assets/videos/template-preview.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StoreContent;