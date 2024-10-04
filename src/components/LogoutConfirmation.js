import React from 'react';
import { Link } from 'react-router-dom';
import './LogoutConfirmation.css';

const LogoutConfirmation = () => {
  return (
    <div className="logout-confirmation-container">
      <div className="logout-message-box">
        <h1>You have been logged out</h1>
        <p>Thank you for visiting Counseling Hub. You can log in again or return to the homepage.</p>
        <div className="logout-links">
          <Link to="/login" className="logout-link">Log in again</Link>
          <Link to="/" className="logout-link">Return to homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
