import './Home.css';
import profilePic from './profile_pic_new_crop.jpg';
import resume from './VaibhavChaudharyResume_MERN_STACK.pdf';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <section id="home" className={`home-section ${theme}`}>
      <div className="home-container">
        
        {/* Profile Image Section */}
        <motion.div 
          className="home-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profilePic} alt="Vaibhav Chaudhary" className="profile-img" />
        </motion.div>

        {/* Text Content Section */}
        <motion.div 
          className="home-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Welcome to my Portfolio!</h1>
          <p className="role-title">SDE 2 | Full Stack Developer</p>
          <p className="description">
            As a passionate full stack developer, I specialize in building high-performance, scalable web applications that combine efficiency with user-focused design. With hands-on expertise in modern technologies like <strong>Node.js</strong>, <strong>React.js</strong>, and <strong>MongoDB</strong>, I create dynamic and responsive solutions tailored to meet the demands of modern web development.
          </p>
          <div className="btn-container">
            <motion.a 
              href="#contact" 
              className="btn primary-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href={resume} 
              download="VaibhavChaudharyResume.pdf" 
              className="btn secondary-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;
