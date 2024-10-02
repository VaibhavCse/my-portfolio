// src/components/Projects.js
import React from 'react';
import './Projects.css';
import csd from './CSD.png'
import marketplace from './marketplace.png'

const Projects = () => {
  const projects = [
    {
      title: 'CommonSubDoc',
      description: 'CSD is a leading technology platform transforming investor relations in investment management',
      image: csd, // Image URL
      stack: ['Node.js', 'MongoDB', 'EJS', 'Tailwind CSS' , 'Shufti Pro'], // Stack used
      link: 'https://csd.formidium.com/'
    },
    {
      title: 'AltsMarketplace',
      description: 'Marketplace is the innovative convergence point for investors, fund managers, and service providers in the alternative investment sector.',
      image: marketplace,
      stack: ['React.js', 'Node.js', 'MongoDB'],
      link: 'https://altsmarketplace.com/'
    },
    {
      title: 'SyncPath Consulting',
      description: 'A fully responsive and dynamic single page application for SyncPath Consulting, showcasing the company’s services in Salesforce consulting.',
      image: marketplace,
      stack: ['React.js'],
      link: 'http://syncpath.in/'
    },
    {
      title: 'Organic Foods',
      description: 'An e-commerce platform focused on organic food products, offering a seamless user experience for customers to shop for organic goods.',
      image: marketplace,
      stack: ['React.js', 'Node.js', 'MongoDB'],
      link: '#'
    }
    // Add more projects here
  ];
  

  return (
    <section id="projects" className="projects-section">
      <h2 className='projectheading'>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-container">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="stack-item">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Visit</a>
          </div>
        ))}
      </div>
    </section>
  );
  
}

export default Projects;
