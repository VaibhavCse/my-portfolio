import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';  // Import scroll
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  const scrollToTop = () => {
    scroll.scrollToTop();  // Scroll to top for Home
    setMenuOpen(false); // Close menu after selection
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="logo">
          <h1>Vaibhav Chaudhary</h1>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              onClick={scrollToTop}  // Scroll to top when clicking Home
            >
              Home
            </Link>
          </li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Experience</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
        <div className="theme-toggle">
          <button onClick={toggleDarkMode} className="theme-button">
            {darkMode ? <FaSun style={{ color: 'white' }} /> : <FaMoon style={{ color: 'black' }} />}
          </button>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
