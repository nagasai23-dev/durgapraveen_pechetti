import { motion } from 'framer-motion';
import './Process.css';

const ProcessStep = ({ step, index, totalSteps }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="process-step"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      variants={variants}
    >
      <div className="step-header">
        <div 
          className="step-icon"
          style={{ backgroundColor: step.color }}
        >
          {step.icon}
        </div>
        <h3>{step.title}</h3>
        {index < totalSteps - 1 && (
          <div className="step-connector"></div>
        )}
      </div>
      <p>{step.description}</p>
    </motion.div>
  );
};

export default ProcessStep;