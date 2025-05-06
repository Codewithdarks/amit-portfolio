import React from 'react';
import avatar from '../resources/amit-avtar.svg';
import BackgroundIcons from './BackgroundIcons';

function Intro() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="intro-section">
      <BackgroundIcons />

      <div className="intro-content-blur">
        <div className="intro-avatar">
          <img src={avatar} alt="Avatar" />
        </div>

        <div className="intro-text-container">
          <div className="intro-text">
            <h1 className="intro-heading">
              Hi, I am <span className="highlight">Amit Tiwari</span>
            </h1>
            <p className="intro-subtext">
              A passionate <strong>Junior MERN Stack Developer</strong> with hands-on experience in building dynamic web applications using 
              <strong> React.js, Node.js, Express.js,</strong> and <strong>MongoDB</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="scrolldown" onClick={scrollToNextSection} style={{"--color": "#333"}}>
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;