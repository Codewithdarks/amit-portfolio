import React from 'react';

const AvatarSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="150"
    height="150"
    className="avatar"
  >
    {/* Background Circle */}
    <circle cx="50" cy="50" r="45" fill="#6a11cb" />
    
    {/* Initials or Text */}
    <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="24" dy=".3em">
      AT
    </text>
    
    {/* Optional border circle */}
    <circle cx="50" cy="50" r="50" fill="none" stroke="#2575fc" strokeWidth="4" />
  </svg>
);

export default AvatarSVG;
