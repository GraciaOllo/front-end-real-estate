import React, { useState } from 'react';
import './SignupForm.css';
import { FaUserPlus } from 'react-icons/fa'; // Importing signup icon

const SignupForm = () => {
  const [role, setRole] = useState('tenant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock signup logic
    alert('Signup successful!');
  };

  return (

  <div className='form-container'>
      <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          <b>Name: </b>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          <b>Email: </b>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          <b>Password: </b>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          <b>Role: </b>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="tenant">Tenant</option>
            <option value="agent">Agent</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit">
          <FaUserPlus className="signup-icon" />
          Sign Up
        </button>
      </form>
      <div className="login-link">
        <p>Already have an account? <a href="/login">Log in here</a></p>
      </div>
    </div>
  </div>
  );
};

export default SignupForm;