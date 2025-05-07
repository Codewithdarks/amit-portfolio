import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  FaReact, FaNodeJs, FaAngular, FaJsSquare, FaPython,
  FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaLinux,
  FaDatabase, FaBootstrap, FaJava, FaVuejs, FaDocker,
  FaGithub, FaSwift
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../App.css';

function BackgroundIcons() {
  const [icons, setIcons] = useState([]);
  const iconRefs = useRef([]);
  const transformTimeouts = useRef([]);
  const baseTransforms = useRef([]);
  const containerRef = useRef(null);

  const iconList = [
    { Icon: FaReact, className: 'react-icon' },
    { Icon: FaNodeJs, className: 'node-icon' },
    { Icon: FaAngular, className: 'angular-icon' },
    { Icon: FaJsSquare, className: 'js-icon' },
    { Icon: FaPython, className: 'python-icon' },
    { Icon: FaHtml5, className: 'html-icon' },
    { Icon: FaCss3Alt, className: 'css-icon' },
    { Icon: FaGitAlt, className: 'git-icon' },
    { Icon: FaNpm, className: 'npm-icon' },
    { Icon: FaLinux, className: 'linux-icon' },
    { Icon: FaDatabase, className: 'db-icon' },
    { Icon: FaBootstrap, className: 'bootstrap-icon' },
    { Icon: FaJava, className: 'java-icon' },
    { Icon: FaVuejs, className: 'vue-icon' },
    { Icon: FaDocker, className: 'docker-icon' },
    { Icon: FaGithub, className: 'github-icon' },
    { Icon: FaSwift, className: 'swift-icon' }
  ];

  const generateIcons = () => {
    const newIcons = [];
    const numIcons = Math.min(iconList.length, window.innerWidth < 768 ? 10 : 16);
    const shuffledIcons = [...iconList].sort(() => 0.5 - Math.random()).slice(0, numIcons);
    const placedPositions = [];

    shuffledIcons.forEach(({ Icon, className }, i) => {
      let top, left;
      let attempts = 0;

      do {
        top = Math.random() * 90;
        left = Math.random() * 90;
        attempts++;
      } while (
        placedPositions.some(pos => Math.abs(pos.top - top) < 10 && Math.abs(pos.left - left) < 10) &&
        attempts < 50
      );

      placedPositions.push({ top, left });

      const size = Math.random() * (60 - 40) + 40;
      const rotation = Math.random() * 360;

      newIcons.push({ id: i, Icon, className, size, top, left, rotation });
    });

    setIcons(newIcons);
    baseTransforms.current = newIcons.map(({ rotation }) => `rotate(${rotation}deg)`);
  };

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    const scrollPosition = window.scrollY;
    const icons = containerRef.current.getElementsByClassName('floating-icon');
    
    Array.from(icons).forEach((icon, index) => {
      const speed = index % 2 === 0 ? 0.5 : 0.3;
      const yPos = scrollPosition * speed;
      const scale = 1 - (scrollPosition * 0.001);
      
      icon.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`;
    });
  }, []);

  useEffect(() => {
    generateIcons();

    const handleMouseMove = (e) => {
      iconRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const moveX = dx * 0.1;
          const moveY = dy * 0.1;

          ref.style.transition = 'transform 0.3s ease-out';
          ref.style.transform = `${baseTransforms.current[index]} translate(${moveX}px, ${moveY}px)`;

          clearTimeout(transformTimeouts.current[index]);
          transformTimeouts.current[index] = setTimeout(() => {
            if (ref) {
              ref.style.transition = 'transform 0.6s ease-in';
              ref.style.transform = baseTransforms.current[index];
            }
          }, 500);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      transformTimeouts.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [handleScroll]);

  return (
    <div className="background-icons" ref={containerRef}>
      {icons.map(({ id, Icon, className, size, top, left, rotation }, index) => (
        <motion.div
          key={id}
          ref={el => iconRefs.current[index] = el}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className={`background-icon-wrapper ${className} floating-icon`}
          style={{
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            zIndex: 0,
            transform: `rotate(${rotation}deg)`,
            pointerEvents: 'none'
          }}
        >
          <Icon style={{ fontSize: `${size}px`, transition: 'color 1.5s ease' }} />
        </motion.div>
      ))}
    </div>
  );
}

export default BackgroundIcons;
