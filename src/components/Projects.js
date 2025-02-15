import React from 'react';
import './Projects.css';
import csd from './CSD.png'
import marketplace from './marketplace.png'
import syncpath from './syncpath.png'
import ecogrocer from './OrganicFoods.png'
import avocsas from './avocsas.png'
import sgb from './sgbindustries.png'
import tax from './taxowealth.png'

const Projects = () => {
  const projects = [
    {
      "title": "CommonSubDoc",
      "description": "A dynamic technology platform transforming investor relations with seamless onboarding, compliance reporting, and real-time data tracking. CSD enhances transparency and efficiency with intuitive dashboards, digital workflows, and secure API integrations.",
      "image": csd,
      "stack": ["Node.js", "MongoDB", "EJS", "Tailwind CSS", "Shufti Pro"],
      "link": "https://commonsubdoc.com/"
    },    
    {
      "title": "AltsMarketplace",
      "description": "A comprehensive platform connecting investors, fund managers, and service providers in the alternative investment sector. AltsMarketplace streamlines investment interactions, enhances market insights, and fosters an efficient ecosystem for informed decision-making.",
      "image": marketplace,
      "stack": ["React.js", "Node.js", "MongoDB"],
      "link": "https://altsmarketplace.com/"
    },    
    {
      "title": "Tax O Wealth",
      "description": "A dynamic financial advisory platform offering wealth management, tax planning, mutual funds, and insurance consultancy. Established in 2014, Tax O Wealth serves thousands of clients with smart investment strategies and seamless integrations like chatbots for enhanced user experience.",
      "image": tax,
      "stack": ["React.js", "Node.js", "MongoDB", "Chatbot Integration"],
      "link": "https://taxowealth.com/"
    },    
    {
      "title": "SyncPath Consulting",
      "description": "A dynamic platform specializing in Salesforce consulting, offering services like implementation, customization, data migration, integration, and automation. SyncPath Consulting empowers businesses with tailored Salesforce solutions for efficiency and growth.",
      "image": syncpath,
      "stack": ["React.js"],
      "link": "http://syncpath.in/"
    },
    {
      "title": "SGB Industries",
      "description": "A leading manufacturer and distributor of premium agricultural products, specializing in besan, rice, wheat, pulses, and food oils. SGB Industries is committed to quality, sustainability, and reliable supply across domestic and national markets.",
      "image": sgb,
      "stack": ["React.js"],
      "link": "https://sgbindustries.netlify.app/"
    },    
    {
      "title": "Avocsas",
      "description": "A robust platform specializing in Salesforce security and compliance, offering services like security audits, risk assessments, Salesforce Shield implementation, and compliance tracking. Avocsas helps businesses strengthen their Salesforce environment with cutting-edge security solutions.",
      "image": avocsas,
      "stack": ["React.js", "Node.js", "MongoDB"],
      "link": "https://avocsas.in/"
    },    
    {
      "title": "Ecogrocer",
      "description": "A demo e-commerce platform built to explore React, offering a seamless shopping experience for organic food products. Ecogrocer showcases a clean UI, dynamic product listings, and a smooth cart management system.",
      "image": ecogrocer,
      "stack": ["React.js", "Node.js", "MongoDB"],
      "link": "https://ecogrocer.netlify.app/"
    },         
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
