import { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from './ProjectCard';
import VideoLightbox from './VideoLightbox';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const projectCategories = [
    'all',
    ...new Set(projectsData.map(project => project.category))
  ];

  return (
    <section id="work" className="projects-section">
      <div className="section-header">
        <h2>My Portfolio</h2>
        <p>Selected projects showcasing my video editing and design skills</p>
      </div>

      <div className="filter-buttons">
        {projectCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={activeFilter === category ? 'active' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <VideoLightbox 
          videoSrc={selectedProject.video}
          thumbnail={selectedProject.thumbnail}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;