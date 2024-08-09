import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import './LoginForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding,  faSignIn } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => ( 


  <nav className="navbar">
  <div className='logo'>
      <img src="assets/images/logo.png" alt=""/>
    </div>
    <div className="navbar-brand">
    </div>
  
    <div className="navbar-links">
      <Link to="/" className="navbar-link">
        <FontAwesomeIcon icon={faHome} /> Home 
      </Link>
      <Link to="/visualization" className="navbar-link">
        <FontAwesomeIcon icon={faBuilding} /> Visualization
      </Link>

      <Link to="/Login" className="navbar-link" >
        <FontAwesomeIcon icon={faSignIn} /> Login
      </Link>
     
    </div>
    
  </nav>
);
  


export default Navbar;
