import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p style={{ 
        marginTop: '1rem', 
        color: '#3498db',
        fontWeight: '500'
      }}>
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;