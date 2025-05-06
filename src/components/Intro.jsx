import React from 'react';
import BackgroundIcons from './BackgroundIcons';
import amitAvatar from '../resources/amit-avtar.svg';

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
          <img 
            src={amitAvatar}
            alt="Amit Tiwari" 
          />
        </div>

        <div className="intro-text-container">
          <div className="intro-text">
            <h1 className="intro-heading">
              Hi, I am <span className="highlight animate-infinite">Amit Tiwari</span>
            </h1>
            <p className="intro-subtext">
              A passionate <strong data-glow>Junior MERN Stack Developer</strong> with hands-on experience in building dynamic web applications using 
              <strong data-glow> React.js, Node.js, Express.js,</strong> and <strong data-glow>MongoDB</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="scrolldown" onClick={scrollToNextSection}>
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;