import React, { useState, useEffect } from 'react';
import ApiService from '../../controllers/ApiService';
import { Bar, Line } from 'react-chartjs-2';
import { BsThreeDots } from 'react-icons/bs';
import { FaHome, FaBuilding, FaUsers, FaCog } from 'react-icons/fa';
import { Button, Modal, Form } from 'react-bootstrap';
import Admin from '../../assets/images/Admin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Dashboards.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import PropertyMap from '../Properties/PropertyMap';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [showAddPropertyModal, setShowAddPropertyModal] = useState(false);
  const [newProperty, setNewProperty] = useState({
    name: '',
    price: '',
    location: '',
    description: '',
    image: '' // New field for image
  });
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const properties = await ApiService.getProperties();
        const bookings = await ApiService.getBookings();
        setPropertyData(properties);
        setBookingData(bookings);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);

  const handleShowAddPropertyModal = () => setShowAddPropertyModal(true);
  const handleCloseAddPropertyModal = () => setShowAddPropertyModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProperty({ ...newProperty, image: imageUrl });
    }
  };

  const handleAddProperty = async () => {
    try {
      // Save the property locally to mimic a database add.
      setPropertyData([...propertyData, newProperty]);

      // Reset the newProperty state after addition
      setNewProperty({
        name: '',
        price: '',
        location: '',
        description: '',
        image: ''
      });

      handleCloseAddPropertyModal();
    } catch (error) {
      console.error('Error adding property', error);
    }
  };

  const handleDeleteProperty = (index) => {
    const updatedProperties = propertyData.filter((_, i) => i !== index);
    setPropertyData(updatedProperties);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const propertyChartData = {
    labels: propertyData.map((property) => property.name),
    datasets: [
      {
        label: 'Property Prices',
        data: propertyData.map((property) => property.price),
        backgroundColor: '#00ccffcc', // blue
        borderColor: '#FFFFFF', // White
        borderWidth: 2,
      },
    ],
  };

  const bookingChartData = {
    labels: bookingData.map((booking) => booking.date),
    datasets: [
      {
        label: 'Bookings Per Day',
        data: bookingData.map((booking) => booking.count),
        backgroundColor: ' #60ee54e0', // green
        borderColor: '#FFFFFF', // White
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={`AdminDashboard-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <button className="collapse-button" onClick={toggleSidebar}>
            <BsThreeDots /> {/* Replaced with three dots */}
          </button>
        </div>
        <div className="nav-item">
          <Link to="/">
            <FaHome className="nav-icon" /> Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/properties">
            <FaBuilding className="nav-icon" /> Properties
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/users">
            <FaUsers className="nav-icon" /> Users
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/settings">
            <FaCog className="nav-icon" /> Settings
          </Link>
        </div>
      </div>

      <div className="content">
        <div className="header-container">
          <h1>Welcome, Gracia!!!</h1>
          <div className="user-profile">
            <img src={Admin}/>
            <span>Admin</span>
          </div>
        </div>

        <div className="cards-container">
          <div className="card" onClick={handleShowAddPropertyModal}>
            <h3>Add Property</h3>
            <p>Click to add a new property.</p>
            
          </div>
          
          
          
          <div className="card">
            <h3>Total Properties</h3>
            <p>{propertyData.length} Properties</p>
          </div>
          <div className="card">
            <h3>Total Bookings</h3>
            <p>{bookingData.length} Bookings</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>5,000,000 XAF</p>
          </div>
        </div>

        <div className="property-list">
          {propertyData.map((property, index) => (
            <div key={index} className="property-card">
              <img src={property.image} alt={property.name} className="property-image" />
              <div className="property-details">
                <h4>{property.name}</h4>
                <p>{property.location}</p>
                <p>${property.price}</p>
                <p>{property.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section remains unchanged */}
        <div className="charts-container">
          <div className="chart-item">
            <h3>Property Prices</h3>
            <Bar data={propertyChartData} />
          </div>
          <div className="chart-item">
            <h3>Bookings Over Time</h3>
            <Line data={bookingChartData} />
          </div>
        </div>


      </div>

      <Modal show={showAddPropertyModal} onHide={handleCloseAddPropertyModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPropertyName">
              <Form.Label>Property Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter property name"
                name="name"
                value={newProperty.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPropertyPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter property price"
                name="price"
                value={newProperty.price}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPropertyLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter property location"
                name="location"
                value={newProperty.location}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPropertyDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter property description"
                name="description"
                value={newProperty.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPropertyImage">
              <Form.Label>Property Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddPropertyModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProperty}>
            Add Property
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
