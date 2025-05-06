import React, { useEffect, useState } from 'react';
import sentimentImage from '../resources/sentiment-analysis.jpeg'; // Import the image

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  // Detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when section is visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: 'Sentiment Analysis',
      description: 'This project uses natural language processing techniques to analyze sentiments from text.',
      imageUrl: sentimentImage, // Using the imported image
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of project 2. It includes all the important features.',
      imageUrl: '/path/to/project2-image.jpg',
    },
    {
      title: 'Project 3',
      description: 'This is a brief description of project 3. It includes all the important features.',
      imageUrl: '/path/to/project3-image.jpg',
    },
  ];

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'animate' : ''}`}>
      <h2 className="projects-heading">My Projects</h2>
      {projects.map((project, index) => (
        <div
          className="project-item"
          key={index}
          style={{ transitionDelay: `${index * 0.2}s` }} // Sequential delay for each item
        >
          <div className="project-image">
            <img src={project.imageUrl} alt={project.title} />
          </div>
          <div className="project-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;