import { motion } from 'framer-motion';
import './Projects.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => project.video && onClick()}
    >
      <div className="project-image">
        <img src={project.thumbnail} alt={project.title} />
        {project.video && (
          <div className="play-icon">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-tags">
          {project.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;