import React, { useState, useEffect } from 'react';
import '../styles/projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className={`projects-section${isVisible ? ' animate-entry' : ''}`}>
      <h1 className={`projects-heading ${isVisible ? 'visible' : ''}`}>
        <b>Here's my Projects</b>
      </h1>
      {/* Project Cards Design Start */}
      <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
        {/* Example Project Card */}
        <div className="project-card">
          <h2 className="project-title">Portfolio Website</h2>
          <p className="project-desc">
            A personal portfolio website to showcase my skills and projects. Built with React and hosted on Netlify.
          </p>
          <div className="project-tech">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Bootstrap</span>
            <span className="tech-badge">css</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/codewithdarks/amit-portfolio" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
            <a href="https://your-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          </div>
        </div>
        {/* Add more project cards below as needed */}
        <div className="project-card">
          <h2 className="project-title">Sentiment Analysis</h2>
          <p className="project-desc">
            A RESTful API for managing daily tasks, with JWT authentication and MongoDB backend.
          </p>
          <div className="project-tech">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">flask</span>
            <span className="tech-badge">Bert AI/ML</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">MongoDB</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/Codewithdarks/sentiment-ai" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          </div>
        </div>
        <div className="project-card">
          <h2 className="project-title">Desktime Tracker</h2>
          <p className="project-desc">
            is a Software created using python tinkter and express with nodejs for a web server, this software is responsible for tracking emoployees systems and provide information of tracked data to the server.
          </p>
          <div className="project-tech">
            <span className="tech-badge">Python</span>
            <span className="tech-badge">API</span>
            <span className="tech-badge">Nodejs</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/Codewithdarks/desktime" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          </div>
        </div>
        <div className="project-card">
          <h2 className="project-title">API Collections</h2>
          <p className="project-desc">
            API collection is project in which I have integrated multiple API's to use the or to practice them.
          </p>
          <div className="project-tech">
            <span className="tech-badge">nodejs</span>
            <span className="tech-badge">python</span>
            <span className="tech-badge">java</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/your-username/weather-app" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          
          </div>
        </div>
        <div className="project-card">
          <h2 className="project-title">Composable commerce Operating System</h2>
          <p className="project-desc">
            CCOS is my personal project, with I am working it's a operating system for ecommerce businesses, like analysis, customer service, billing application interface.
          </p>
          <div className="project-tech">
            <span className="tech-badge">nodejs</span>
            <span className="tech-badge">API</span>
            <span className="tech-badge">python</span>
            <span className="tech-badge">ci|cd</span>
            <span className="tech-badge">docker</span>
          </div>
          <div className="project-links">
          </div>
        </div><div className="project-card">
          <h2 className="project-title">Enterprise App Collections</h2>
          <p className="project-desc">
            Enterprise app colleciton is collection of git repo's of CRM, ERP, CMS like system API to demonstrate their work and desing approach followed by Amit Tiwari.
          </p>
          <div className="project-tech">
            <span className="tech-badge">nodejs</span>
            <span className="tech-badge">API</span>
            <span className="tech-badge">express</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/your-username/weather-app" target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
           
          </div>
        </div>
      </div>
      {/* Project Cards Design End */}
    </section>
  );
}

export default Projects;