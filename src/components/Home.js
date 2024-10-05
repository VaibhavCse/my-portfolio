import React, { useCallback } from 'react';
import './Home.css';
import profilePic from './profile_pic.jpg';
import resume from './VaibhavChaudharyResume.pdf';
import Particles from "react-tsparticles"; // Correct import
import { loadFull } from "tsparticles";    // Import the particles engine

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load full tsparticles package
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <section className="home-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            move: {
              speed: 4,
              direction: "none",
              out_mode: "out",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="home-container">
        <div className="home-left">
          <img src={profilePic} alt="Vaibhav Chaudhary" className="profile-img" />
        </div>
        <div className="home-right">
          <h1>Welcome to my Portfolio!</h1>
          <p className="role-title">SDE 2 | Full Stack Developer</p>
          <p className="description">
            As a passionate full stack developer, I specialize in building high-performance, scalable web applications that combine efficiency with user-focused design. With hands-on expertise in modern technologies like <strong>Node.js</strong>, <strong>React.js</strong>, and <strong>MongoDB</strong>, I create dynamic and responsive solutions tailored to meet the demands of modern web development.
          </p>
          <a href="#contact" className="btn">Get in Touch</a>
          <a href={resume} download="VaibhavChaudharyResume.pdf" className="btn resume-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
