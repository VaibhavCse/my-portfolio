// src/components/Home.js
import React from 'react';
import './Home.css';
import profilePic from './profile_pic.jpg'; // Import the profile image
import resume from './VaibhavChaudharyResume.pdf'; // Import the resume file

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-left">
          {/* Profile image in box shape */}
          <img 
            src={profilePic} 
            alt="Vaibhav Chaudhary" 
            className="profile-img"
          />
        </div>
        <div className="home-right">
          <h1>Welcome to my Portfolio!</h1>
          <p className="role-title">SDE 2 | Full Stack Developer</p>
          <p className="description">
            As a passionate full stack developer, I specialize in building high-performance, scalable web applications that combine efficiency with user-focused design. With hands-on expertise in modern technologies like <strong>Node.js</strong>, <strong>React.js</strong>, and <strong>MongoDB</strong>, I create dynamic and responsive solutions tailored to meet the demands of modern web development.
          </p>
         
          <a href="#contact" className="btn">Get in Touch</a>
          <a 
            href={resume} 
            download="VaibhavChaudharyResume.pdf" 
            className="btn resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
