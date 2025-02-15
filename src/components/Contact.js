import './Contact.css';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      {/* Animated Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        Feel free to reach out through any of the platforms below:
      </motion.p>

      {/* Social Links with Animation */}
      <ul className="social-links">
        {[
          { name: "GitHub", link: "https://github.com/VaibhavCse" },
          { name: "LinkedIn", link: "https://www.linkedin.com/in/vaibhav-chaudhary-788259181" },
          { name: "Email", link: "mailto:vaibhav77324@gmail.com" },
          { name: "Topmate", link: "https://topmate.io/vaibhav_chaudhary20/" },
          { name: "Instagram", link: "https://www.instagram.com" },
          { name: "Discord", link: "https://discord.com/channels/723908317705142382/723908318543741010" },
        ].map((item, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
