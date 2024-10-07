import React from 'react';
import './CloseButton.css';

const CloseButton = ({ onClick }) => (
  <button
    className="close-button"
    onClick={(e) => {
      e.stopPropagation(); // Prevent click event from bubbling up
      onClick();
    }}
  >
    
  </button>
);

export default CloseButton;
