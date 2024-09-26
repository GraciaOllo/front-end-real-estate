import React, { useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import AuthContext from './Context/AuthContext.js'

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {user} = useContext(AuthContext)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

console.log(user)

  return (
    <nav className="navbar">
      <div className="logo">
       
      </div>
      <div className="navbar-brand"></div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          <FontAwesomeIcon icon={faHome} /> Home 
        </Link>
        <Link to="/3dVisualisation" className="navbar-link">
          <FontAwesomeIcon icon={faBuilding} /> Visualisation
        </Link>
        <Link to="/signup" className="navbar-link">
          <FontAwesomeIcon icon={faUser} /> signup
        </Link>

       { user == null ?  <Link to="/Login" className="navbar-link">
          <FontAwesomeIcon icon={faSignIn} /> Login
        </Link> : 
        <Link to="/logout" className="navbar-link">
        {/* <FontAwesomeIcon icon={faSignOut} /> */}
         Log-out
        </Link>}


        {/* <div className="navbar-link" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faSignIn} /> Login
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/login/tenant" className="dropdown-item">Tenant</Link>
              <Link to="/login/admin" className="dropdown-item">Admin</Link>
              <Link to="/login/customer" className="dropdown-item">Customer</Link>

            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;