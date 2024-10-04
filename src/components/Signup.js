// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection after signup
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Auth.css'; // Make sure the path to your CSS file is correct
import '../pages/HomePage.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For redirecting the user after successful signup

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Account created successfully');
      navigate('/'); // Redirect to homepage or a specific path after successful signup
    } catch (error) {
      console.error('Failed to create an account:', error.message);
      setError(error.message); // Display error message
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignup} className="auth-form">
        <h2>Sign Up</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          type="email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
