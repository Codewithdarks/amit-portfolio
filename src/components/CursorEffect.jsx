import React, { useEffect, useState } from 'react';
import '../styles/cursor-effect.css';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.hasAttribute('data-glow')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.hasAttribute('data-glow')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
      }}
    />
  );
};

export default CursorEffect;