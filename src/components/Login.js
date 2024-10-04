import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import './Auth.css';
import '../pages/HomePage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await setPersistence(auth, browserLocalPersistence); // Set session persistence before signing in
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully!");
      navigate('/');
    } catch (error) {
      console.error("Failed to log in:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={signIn} className="auth-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="auth-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="auth-input"
        />
        <button type="submit" className="auth-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
