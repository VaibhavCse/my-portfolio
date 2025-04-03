import React from 'react';
import './Projects.css';
import csd from './CSD.png'
import marketplace from './marketplace.png'
import syncpath from './syncpath.png'
import ecogrocer from './OrganicFoods.png'
import avocsas from './avocsas.png'
import sgb from './sgbindustries.png'
import tax from './taxowealth.png'
import lusora from './lusora.png'
import wellnessherb from './wellness_herb.png'

const Projects = () => {
  const projects = [
    {
      "title": "CommonSubDoc",
      "description": "A powerful investor relations platform that simplifies onboarding, compliance reporting, and real-time data tracking. It features intuitive dashboards, digital workflows, and secure API integrations to enhance transparency and efficiency.",
      "image": csd,
      "stack": ["Node.js", "MongoDB", "EJS", "Tailwind CSS", "Shufti Pro", "AWS"],
      "link": "https://commonsubdoc.com/"
    },    
    {
      "title": "AltsMarketplace",
      "description": "A next-generation marketplace connecting investors, fund managers, and service providers in the alternative investment sector. It streamlines deal-making, offers advanced analytics, and enhances market insights for informed decision-making.",
      "image": marketplace,
      "stack": ["React.js", "Node.js", "MongoDB", "Express.js", "AWS"],
      "link": "https://altsmarketplace.com/"
    },    
    {
      "title": "Tax O Wealth",
      "description": "A fintech advisory platform providing wealth management, tax planning, mutual funds, and insurance consultancy. It integrates AI-powered chatbots, automated portfolio tracking, and secure financial tools to help users maximize their investments.",
      "image": tax,
      "stack": ["React.js", "Node.js", "MongoDB", "Chatbot Integration", "Payment Gateway"],
      "link": "https://taxowealth.com/"
    }, 
    {
      "title": "Lusora",
      "description": "A luxury mineral water brand offering a digital experience with seamless navigation, modern UI, and real-time engagement. It features WhatsApp and email integration, Google Maps support, and a sleek mobile-friendly design.",
      "image": lusora,
      "stack": ["React.js", "Next.js", "Email Integration", "WhatsApp Integration", "Google Maps API"],
      "link": "https://lusora.in/"
    },       
    {
      "title": "SyncPath Consulting",
      "description": "A Salesforce consulting firm specializing in implementation, customization, data migration, and automation. It helps businesses optimize workflows and integrate third-party tools seamlessly for maximum efficiency.",
      "image": syncpath,
      "stack": ["React.js", "Salesforce API", "Node.js"],
      "link": "http://syncpath.in/"
    },
    {
      "title": "Wellness Herb",
      "description": "An online wellness platform offering herbal products with seamless payment and appointment booking. It includes Calendly scheduling, payment gateway integration, and an intuitive user experience.",
      "image": wellnessherb,
      "stack": ["React.js", "Node.js", "MongoDB", "Payment Integration", "Calendly API"],
      "link": "https://wellnessherb.in/"
    },
    {
      "title": "SGB Industries",
      "description": "A manufacturer and distributor of premium agricultural products like besan, rice, wheat, pulses, and oils. The digital platform offers a clean UI, product catalogs, and optimized ordering systems for efficient supply chain management.",
      "image": sgb,
      "stack": ["React.js"],
      "link": "https://sgbindustries.netlify.app/"
    },    
    {
      "title": "Avocsas",
      "description": "A security-focused Salesforce platform offering compliance tracking, risk assessments, and security audits. It features Salesforce Shield implementation and enterprise-grade security enhancements for businesses.",
      "image": avocsas,
      "stack": ["React.js", "Salesforce Integration"],
      "link": "https://avocsas.in/"
    },    
    {
      "title": "Ecogrocer",
      "description": "A modern e-commerce demo platform for organic food shopping. Built with a mobile-first approach, it features dynamic product listings, seamless cart management, and a simple checkout flow.",
      "image": ecogrocer,
      "stack": ["React.js", "Node.js", "MongoDB", "Payment Integration"],
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
