import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { FaSignInAlt } from 'react-icons/fa'; // Importing login icon

const LoginForm = () => {
  const [role, setRole] = useState('tenant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     // Simple authentication check
     if (name === 'name' && password === 'password') {
      navigate('/UserDashboard'); // Redirect to patient dashboard on successful login
    } else {
      alert('Invalid credentials');
    }
  };
 


  return (

        <div>
          <div className='form-container'>
  <div className="login-form" >
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">
          <FaSignInAlt className="login-icon" />
          Login
        </button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
      </div>
    </div>
    
     
   
        </div>
        </div>
       
   
  );
};

export default LoginForm;
