import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <div className="experience-content">
          <div className="job-card">
            <div className="job-icon">&#10004;</div> {/* Icon */}
            <div className="job-details">
              <h3>Senior Associate Software Engineer</h3>
              <p>1st June 2022 - present</p>
              <p>Formidium Technologies</p>
              <p>
                I lead full stack development projects using Sails.js and Node.js, focusing on scalable web solutions, mentoring junior developers, and ensuring timely project delivery.
              </p>
            </div>
          </div>
          <div className="job-card">
            <div className="job-icon">&#10004;</div> {/* Icon */}
            <div className="job-details">
              <h3>Software Engineer</h3>
              <p>1st July 2021 - 31st May 2022</p>
              <p>Formidium Technologies</p>
              <p>
               I worked on full stack development, building web applications with Sails.js and Node.js, and gaining expertise in system architecture, API design, and database management.
              </p>
            </div>
          </div>
          <div className="job-card">
            <div className="job-icon">&#10004;</div> {/* Icon */}
            <div className="job-details">
              <h3>Graduate Engineering Trainee</h3>
              <p>1st April 2021 - 30th June 2021</p>
              <p>Formidium Technologies</p>
              <p>
                I focused on backend development using core Java, learning best practices in coding and deployment, which laid the foundation for my future roles in full stack development.
              </p>
            </div>
          </div>
          <div className="job-card">
            <div className="job-icon">&#10004;</div>
            <div className="job-details">
              <h3>Android App development</h3>
              <p>1st Jan 2021 - 31st March 2021</p>
              <p>Rawattech</p>
              <p>
                I developed Android apps using React Native, focusing on building efficient, cross-platform mobile applications with a smooth user experience.
              </p>
            </div>
          </div>

          <div className="job-card">
            <div className="job-icon">&#10004;</div>
            <div className="job-details">
              <h3>Technical Analyst</h3>
              <p>1st Sep 2020 - 30 Dec 2020</p>
              <p>Requin solutions pvt. Ltd</p>
              <p>
                I worked remotely, designing the front-end with Tailwind CSS and developing it using Reactjs. I also collaborated with backend teams to integrate with Java-based services and optimize overall performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
