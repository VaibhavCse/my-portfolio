import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:vaibhav77324@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

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

      {/* <form onSubmit={handleSubmit} className="contact-form">
        <h3>Any queries?</h3>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Send</button>
      </form> */}
    </section>
  );
};

export default Contact;
