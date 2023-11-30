// SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Logo.png'; // Import your logo image here
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <img src={logoImage} alt="Emo AI Logo" className="signup-logo" /> {/* Add this line */}
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="last name" placeholder="Last Name" />
        <input type="first name" placeholder="First Name" />
        <select name="gender" className="signup-dropdown">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <select name="mbti" className="signup-dropdown">
        <option value="">Select Your MBTI Type</option>
        {/* Analysts */}
        <optgroup label="Analysts">
            <option value="INTJ">INTJ</option>
            <option value="INTP">INTP</option>
            <option value="ENTJ">ENTJ</option>
            <option value="ENTP">ENTP</option>
        </optgroup>
        {/* Diplomats */}
        <optgroup label="Diplomats">
            <option value="INFJ">INFJ</option>
            <option value="INFP">INFP</option>
            <option value="ENFJ">ENFJ</option>
            <option value="ENFP">ENFP</option>
        </optgroup>
        {/* Sentinels */}
        <optgroup label="Sentinels">
            <option value="ISTJ">ISTJ</option>
            <option value="ISFJ">ISFJ</option>
            <option value="ESTJ">ESTJ</option>
            <option value="ESFJ">ESFJ</option>
        </optgroup>
        {/* Explorers */}
        <optgroup label="Explorers">
            <option value="ISTP">ISTP</option>
            <option value="ISFP">ISFP</option>
            <option value="ESTP">ESTP</option>
            <option value="ESFP">ESFP</option>
        </optgroup>
        </select>

        <select name="mbti_variant" className="signup-dropdown">
        <option value="">Select Variant</option>
        <option value="A">Assertive (A)</option>
        <option value="T">Turbulent (T)</option>
        </select>
        <button type="submit">Sign Up</button>
        <div className="signup-links">
          <Link to="/signin">Already have an account? Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;




