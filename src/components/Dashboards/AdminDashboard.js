import React, { useEffect, useState } from 'react';
import ApiService from '../../controllers/ApiService';
import { Bar, Line } from 'react-chartjs-2';
import { FaHome, FaBuilding, FaUsers, FaCog } from 'react-icons/fa';
import './Dashboards.css';

const AdminDashboard = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [bookingData, setBookingData] = useState([]);

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

  const propertyChartData = {
    labels: propertyData.map((property) => property.name),
    datasets: [
      {
        label: 'Property Prices',
        data: propertyData.map((property) => property.price),
        backgroundColor: 'rgba(139, 69, 19, 0.8)', // SaddleBrown
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
        backgroundColor: 'rgba(139, 69, 19, 0.8)', // SaddleBrown
        borderColor: '#FFFFFF', // White
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <h2>Real Estate Dashboard</h2>
        <div className="nav-item">
          <FaHome className="nav-icon" /> Dashboard
        </div>
        <div className="nav-item">
          <FaBuilding className="nav-icon" /> Properties
        </div>
        <div className="nav-item">
          <FaUsers className="nav-icon" /> Applications
        </div>
        <div className="nav-item">
          <FaCog className="nav-icon" /> Settings
        </div>
      </div>

      <div className="content">
        <div className="header-container">
          <h1>Dashboard Overview</h1>
          <div className="user-profile">
            <img src="user-profile-image-url" alt="User" />
            <span>Admin</span>
          </div>
        </div>

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
    </div>
  );
};

export default AdminDashboard;
