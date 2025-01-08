// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import { retryInitialization } from './components/chatbot'; // Import the chatbot initialization logic
import './App.css';

function App() {
  useEffect(() => {
    // Retry chatbot initialization when the app mounts
    retryInitialization();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />

        {/* Chatbot Icon is already included in index.html */}
      </div>
    </Router>
  );
}

export default App;
