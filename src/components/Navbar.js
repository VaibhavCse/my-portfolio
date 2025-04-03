import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger')) {
        setMenuOpen(false);
      }
    };
  
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);
  

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);

    // ✅ Apply dark mode class to the <body> tag
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenuOnClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="logo">
          <h1>Vaibhav Chaudhary</h1>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} onClick={closeMenuOnClick}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenuOnClick}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={closeMenuOnClick}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={closeMenuOnClick}>Experience</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={closeMenuOnClick}>Contact</Link></li>
        </ul>

        <div className="theme-toggle">
          <button onClick={toggleDarkMode} className="theme-button">
            {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          </button>
        </div>

 
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars className={`hamburger-icon ${menuOpen ? 'open' : ''}`} />
        </div>

        {isMobile && (
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            {/* Close Button Inside Sidebar */}
            <button className="close-menu" onClick={toggleMenu}>
              <FaTimes />
            </button>

            <ul>
              <li><Link to="home" smooth={true} duration={500} onClick={closeMenuOnClick}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} onClick={closeMenuOnClick}>About</Link></li>
              <li><Link to="projects" smooth={true} duration={500} onClick={closeMenuOnClick}>Projects</Link></li>
              <li><Link to="experience" smooth={true} duration={500} onClick={closeMenuOnClick}>Experience</Link></li>
              <li><Link to="contact" smooth={true} duration={500} onClick={closeMenuOnClick}>Contact</Link></li>
            </ul>
          </div>
        )}


      </div>
    </nav>
  );
};

export default Navbar;
