import React from 'react';
import BackgroundIcons from './BackgroundIcons';
import amitAvatar from '../resources/amit-avtar.svg';

function Intro() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      // Add a small delay before scrolling
      setTimeout(() => {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100); 
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
              A passionate <strong data-glow>Software Developer</strong> with hands-on 1 year experience in building dynamic web applications and softwares using 
              <strong data-glow> PHP, JAVA, JavaScript, React.js, Node.js, Express.js,</strong> and <strong data-glow>MongoDB</strong>.
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