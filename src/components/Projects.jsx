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
    <section id="projects" className="projects-section">
      <h1 className={`projects-heading ${isVisible ? 'visible' : ''}`}>
        <b>Here's What I Did</b>
      </h1>
    </section>
  );
}

export default Projects;