import React, { useEffect, useState } from 'react';
import ApiService from '../../controllers/ApiService';
import './Dashboards.css';

const AgentDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const propertiesData = await ApiService.getProperties();
        const bookingsData = await ApiService.getBookings();
        setProperties(propertiesData);
        setRecentBookings(bookingsData.slice(0, 5));
      } catch (error) {
        console.error('Error fetching agent dashboard data', error);
      }
    };

    fetchAgentData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Agent Dashboard</h1>
      <div className="dashboard-section">
        <h2>Your Properties</h2>
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              {property.name} - ${property.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard-section">
        <h2>Recent Bookings</h2>
        <ul>
          {recentBookings.map((booking) => (
            <li key={booking.id}>
              Property: {booking.propertyId}, Date: {booking.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgentDashboard;
