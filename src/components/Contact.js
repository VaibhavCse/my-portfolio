import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <section id="contact" className="contact-section">
       <h2>Let's Connect</h2>
       <p>Feel free to reach out through any of the platforms below:</p>
      <ul className="social-links">
        <li><a href="https://github.com/VaibhavCse" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/vaibhav-chaudhary-788259181" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="mailto:vaibhav77324@gmail.com">Email</a></li>
        <li><a href="https://topmate.io/vaibhav_chaudhary20/">Topmate</a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://discord.com/channels/723908317705142382/723908318543741010">Discord</a></li>
      </ul>

    </section>
  );
};

export default Contact;
