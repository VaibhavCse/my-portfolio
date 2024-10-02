// src/components/About.js
import React from 'react';
import './About.css';
import aboutImage from './about_image.jpeg'; // Placeholder image (optional)

// Import technology stack images
import nodeLogo from './nodejs.png'; // Example technology images
import mongoLogo from './mongoDb.png';
import jsLogo from './javascript.png';
import reactLogo from './react.png';
import javaLogo from './java.png';
import python from './python.jpeg';
import sql from './sql.jpeg';
import salesforce from './salesforce.jpeg';
import bootstrap from './bootstrap.jpeg';
import tailwind from './tailwind.png';
import html from './html.png';
import shuftipro from './shuftiPros1.jpeg'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hello! My name is Vaibhav Chaudhary, I’m a dedicated full stack developer with 4 years of experience in building efficient, scalable, and innovative web applications. I specialize in creating user-friendly experiences with modern technologies like <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.
          </p>
          <p>
            I’m passionate about bringing ideas to life through clean, maintainable, and efficient code. From back-end architecture to front-end development, I love solving complex problems, learning new technologies, and collaborating with teams to deliver exceptional solutions.
          </p>
          <p>
            My journey as a developer has taught me the value of continuous learning, and I’m always looking for new challenges that push me to grow and evolve in my craft.
          </p>
          
          {/* Tech Stack Section */}
          <h3>Technologies I Work With:</h3>
          <div className="tech-stack">
            <img src={nodeLogo} alt="Node.js" className="tech-logo" />
            <img src={mongoLogo} alt="MongoDB" className="tech-logo" />
            <img src={jsLogo} alt="JavaScript" className="tech-logo" />
            <img src={reactLogo} alt="React" className="tech-logo" />
            <img src={javaLogo} alt="Java" className="tech-logo" />
            <img src={python} alt="Python" className="tech-logo" />
            <img src={sql} alt="Sql" className="tech-logo" />
            <img src={salesforce} alt="Salesforce" className="tech-logo" />
            <img src={html} alt="HTML" className="tech-logo" />
            <img src={bootstrap} alt="Bootstrap" className="tech-logo" />
            <img src={tailwind} alt="Tailwind" className="tech-logo" />
            <img src={shuftipro} alt="Shufti Pro" className="tech-logo" />
          </div>
        </div>
        <div className="about-left">
          <img src={aboutImage} alt="About Me" className="about-img" />
        </div>
      </div>
    </section>
  );
}

export default About;
