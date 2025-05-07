import { motion } from 'framer-motion';
import './Tools.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ToolCard = ({ tool }) => {
  return (
    <motion.div 
      className="tool-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      <div className="tool-logo">
        <img src={tool.logo} alt={tool.name} />
      </div>
      <div className="tool-info">
        <h3>{tool.name}</h3>
        <span className="tool-category">{tool.category}</span>
        <div className="tool-meta">
          <span>Proficiency: <strong>{tool.proficiency}</strong></span>
          <span>Using since: <strong>{tool.since}</strong></span>
        </div>
        <p className="tool-description">{tool.description}</p>
      </div>
    </motion.div>
  );
};

export default ToolCard;
