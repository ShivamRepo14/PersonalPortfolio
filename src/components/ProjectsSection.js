import React from 'react';
import '../css/ProjectsSection.css';

function ProjectsSection() {
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart functionality, user SignUp/Login feature and secure checkout using Stripe.",
    image: "https://placehold.co/600x400/4F46E5/FFFFFF?text=ShopNext&font=montserrat",  
    tags: ["React", "Node.js", "MongoDB", "Express", "CSS"],
    githubUrl: "https://github.com/ShivamRepo14/ShopNext",
    liveUrl: "https://shop-next-nirm.vercel.app/",
  },
  {
    id: 2,
    title: "The-Cinema-Web",
    description: "A movie discovery app that lets users browse movie details, watch trailers, and add favorites for quick access. Built with a responsive UI and real-time TMDB API integration.",
    image: "https://placehold.co/600x400/4F46E5/FFFFFF?text=The+Cinema+Web&font=montserrat", 
    tags: ["React", "vite","Node.js", "CSS", "Redux","API"],
    githubUrl: "https://github.com/ShivamRepo14/cine-web",
    liveUrl: "https://cine-web-puce.vercel.app/",
  },
];


  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-heading">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <span className="link-icon">📁</span> Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span className="link-icon">🔗</span> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-projects">
          <button className="btn btn-outline btn-lg">
            New Projects Comming Soon <span className="arrow-right">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
