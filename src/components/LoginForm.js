import React, { useState } from 'react';
import './LoginForm.css';
import { FaSignInAlt } from 'react-icons/fa'; // Importing login icon

const LoginForm = () => {
  const [role, setRole] = useState('tenant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic
    if (email === 'admin@example.com' && password === 'admin123' && role === 'admin') {
      alert('Admin logged in successfully!');
    } else if (email === 'agent@example.com' && password === 'agent123' && role === 'agent') {
      alert('Agent logged in successfully!');
    } else if (email === 'tenant@example.com' && password === 'tenant123' && role === 'tenant') {
      alert('Tenant logged in successfully!');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
  
     
      
         <div className="login-form" >
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <b>Name: </b>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          <b>Role:</b>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="agent">Agent</option>
            <option value="tenant">Tenant</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <label>
          <b>Email: </b>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          <b>Password: </b>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">
          <FaSignInAlt className="login-icon" />
          Login
        </button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
      </div>
    </div>
    
     
   
   
  );
};

export default LoginForm;
