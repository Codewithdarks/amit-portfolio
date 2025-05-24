import React, { useState, useEffect } from 'react';
import '../styles/about.css';
import rollerSkating from '../resources/rollerskatingwave.png';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPhp, 
  FaPython, 
  FaJava, 
  FaGithub, 
  FaDatabase 
} from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';

function About() {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <svg className={`background-shape ${isVisible ? 'visible' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700">
        <defs>
          <linearGradient id="two-83" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(265, 55%, 30%)" stopOpacity="1"/>
            <stop offset="100%" stopColor="hsl(265, 55%, 60%)" stopOpacity="1"/>
          </linearGradient>
        </defs>
        <g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1">
          <path transform="matrix(1 0 0 1 350 350)" id="two-82" d="M 204.443031 60.02989 C 195.502332 94.073434 248.426513 123.070582 246.156718 158.195317 C 244.30493 186.851457 229.097127 223.449389 202.100505 233.236416 C 164.42655 246.894274 125.416021 206.04581 87.794711 192.243602 C 66.755169 184.524781 44.833782 159.61811 24.210705 168.389153 C -31.396177 192.03889 11.847144 341.396229 -48.381114 336.498035 C -98.873562 332.391627 -39.345319 208.094437 -85.665866 187.58208 C -134.76587 165.838882 -184.277965 293.964217 -229.111799 264.40911 C -263.42912 241.786639 -227.705308 180.343655 -218.343698 140.320974 C -211.394335 110.611108 -172.668202 82.278762 -184.650971 54.218416 C -203.105372 11.003294 -293.347572 40.992135 -316.320524 0 C -330.814874 -25.863214 -324.836555 -69.645728 -302.134991 -88.714838 C -259.680698 -124.376063 -183.469006 -60.893523 -134.140149 -86.206639 C -120.530478 -93.190445 -116.865365 -112.035118 -107.674872 -124.263426 C -97.419834 -137.908152 -87.394329 -152.601267 -75.096136 -164.4376 C -61.295186 -177.720253 -44.803563 -188.956437 -28.647192 -199.245593 C -9.056436 -211.72193 11.008501 -226.332731 33.418982 -232.434131 C 57.034008 -238.863476 87.228545 -249.122729 107.523356 -235.443309 C 130.422887 -220.008215 129.689112 -183.605648 135.749282 -156.663024 C 140.49957 -135.543943 130.526648 -109.615857 142.197135 -91.38455 C 153.828248 -73.214752 180.411241 -69.930116 198.588641 -58.310887 C 227.009684 -40.143789 281.726906 -33.72146 282.540708 -0.000001 C 283.324949 32.496518 212.699926 28.590068 204.443031 60.02989 Z" fill="url(#two-83)"/>
        </g>
      </svg>
      <div className="content-wrapper">
        <img 
          src={rollerSkating} 
          alt="Roller Skating Wave" 
          className={`emoji-overlay ${isVisible ? 'visible' : ''}`}
        />
        <h1 className={`about-subheading ${isVisible ? 'visible' : ''}`}>
          Full Stack Development
        </h1>
        <div className={`tech-stack ${isVisible ? 'visible' : ''}`}>
          {/* First row - 7 icons */}
          <FaHtml5 className="tech-icon" data-tooltip="HTML" />
          <FaCss3Alt className="tech-icon" data-tooltip="CSS" />
          <FaJs className="tech-icon" data-tooltip="JavaScript" />
          <FaReact className="tech-icon" data-tooltip="React" />
          <FaPhp className="tech-icon" data-tooltip="PHP" />
          <FaPython className="tech-icon" data-tooltip="Python" />
          <FaJava className="tech-icon" data-tooltip="Java" />
          {/* Second row - 3 icons */}
          <div className="second-row">
            <FaGithub className="tech-icon" data-tooltip="Git" />
            <FaDatabase className="tech-icon" data-tooltip="Database" />
            <SiMysql className="tech-icon" data-tooltip="MySQL" />
          </div>
        </div>
        <div className={`skills-description ${isVisible ? 'visible' : ''}`}>
          <p>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
          <p>⚡ Building responsive website front end using ReactJS</p>
          <p>⚡ Developing mobile applications using Flutter and Android</p>
          <p>⚡ Creating application backend in Laravel, Node, Express & Flask</p>
          <p>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
        </div>
      </div>
      <h1 className={`about-heading ${isVisible ? 'visible' : ''}`}>
        <b>Here's What I Do</b>
      </h1>
    </section>
  );
}

export default About;