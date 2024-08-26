import React, { useEffect, useState } from 'react';
import ApiService from '../../controllers/ApiService';
import { FaSearch, FaHeart, FaUserCircle, FaSignOutAlt, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import './Dashboards.css';

const UserDashboard = () => {
  // Simulate user data from login
  const [user, setUser] = useState({
  username: 'Gracia Ollo', // Example user data
  email: 'olloclemencia@gmail.com',
  phone: '(237) 694803404',
  role: 'Tenant',
});

  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteProperties, setFavoriteProperties] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertiesData = await ApiService.getProperties();
        setProperties(propertiesData);
      } catch (error) {
        console.error('Error fetching properties data', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredProperties = properties.filter(property =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  const handleFavorite = (propertyId) => {
    setFavoriteProperties(prevFavorites => {
      if (prevFavorites.includes(propertyId)) {
        return prevFavorites.filter(id => id !== propertyId);
      } else {
        return [...prevFavorites, propertyId];
      }
    });
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`dashboard-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <button className="collapse-button" onClick={toggleSidebar}>
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>
        <div className="nav-item">
          <Link to="search">
            <FaSearch className="nav-icon" /> {!isCollapsed && 'Search'}
          </Link>
        </div>
        <div className="nav-item">
          <Link to="favorites">
            <FaHeart className="nav-icon" /> {!isCollapsed && 'Favorites'}
          </Link>
        </div>
        <div className="nav-item">
          <Link to="profile">
            <FaUserCircle className="nav-icon" /> {!isCollapsed && 'Profile'}
          </Link>
        </div>
        <div className="nav-item">
          <Link to="logout">
            <FaSignOutAlt className="nav-icon" /> {!isCollapsed && 'Logout'}
          </Link>
        </div>
        <div className="nav-item">
        <Link to="properties">
            <FaHome className="nav-icon" /> {!isCollapsed && 'Properties'}
          </Link>
        </div>
      </div>

      <div className="content">
        <div className="header-container">
          <h2>Welcome back, {user.username}!</h2>
          <input
            type="text"
            placeholder="Search for properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            <FaSearch />
          </button>
          <div className="user-profile">
            <FaUserCircle size={30} />
            <span>{user.username}</span>
          </div>
        </div>

        <div className="properties-container">
          <Outlet />
          {properties.map(property => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.name} className="property-image" />
              <div className="property-details">
                <h3>{property.name}</h3>
                <p>{property.location}</p>
                <p>${property.price.toLocaleString()}</p>
              </div>
              <button
                className={`favorite-button ${favoriteProperties.includes(property.id) ? 'favorited' : ''}`}
                onClick={() => handleFavorite(property.id)}
              >
                <FaHeart />
              </button>
            </div>
          ))}
        </div>

        {/* User Cards Section */}
        <div className="users-container">
          <h2>Your Profile</h2>
          <div className="user-card">
            <img src="https://via.placeholder.com/150" alt={user.username} className="user-avatar" />
            <div className="user-info">
              <h3>{user.username}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Role: {user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;



