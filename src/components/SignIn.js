// SignIn.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import logoImage from '../assets/Logo.png'; // Adjust the path if necessary
import './SignIn.css';

function SignIn() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic goes here
    // On successful authentication:
    navigate('/dashboard'); // This will navigate to the dashboard
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <img src={logoImage} alt="Emo AI" className="signin-logo" />
        <h1>Sign In</h1>
        <input type="text" placeholder="Username or E-mail" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <div className="signin-links">
          <Link to="/forgot">Forgot Password?</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
