import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import SkillMeter from './SkillMeter';
import './Skills.css';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Professional expertise in video production and post-processing
        </motion.p>
      </div>

      <div className="skills-container">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.id}
            className="skill-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: skill.id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-info">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <SkillMeter level={skill.level} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
