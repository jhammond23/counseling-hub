// Avatar.js
import React from 'react';
import './Avatar.css'; 

// Placeholder image URL or a default user avatar
const defaultAvatar = 'https://via.placeholder.com/150';

const Avatar = ({ image = defaultAvatar }) => {
  return (
    <div className="avatar-container" onClick={() => alert('Avatar editor will be implemented here.')}>
      <img src={image} alt="User Avatar" className="user-avatar" />
    </div>
  );
};

export default Avatar;
