import { toolsData } from '../../data/tools';
import ToolCard from './ToolCard';
import './Tools.css';
import { motion } from 'framer-motion';

const Tools = () => {
  return (
    <section id="tools" className="tools-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Toolkit</h2>
        <p>Professional software and hardware I use daily</p>
      </motion.div>

      <motion.div
        className="tools-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {toolsData.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </motion.div>

      {/* Optional: Uncomment this for hardware section with animation */}
      {/* <motion.div
        className="hardware-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h3>My Hardware Setup</h3>
        <ul>
          <li>MacBook Pro M1 Max (64GB RAM)</li>
          <li>Dell Ultrasharp 4K Color-Accurate Monitors</li>
          <li>WD 4TB External SSD for Storage</li>
          <li>Rode NTG Microphone for Voiceovers</li>
          <li>ColorChecker Passport for Accurate Color</li>
        </ul>
      </motion.div> */}
    </section>
  );
};

export default Tools;
