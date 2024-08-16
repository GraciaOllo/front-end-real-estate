
import React, { useEffect, useState } from 'react';
import ApiService from '../../controllers/ApiService';
import { Bar, Line } from 'react-chartjs-2';
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
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const bookingChartData = {
    labels: bookingData.map((booking) => booking.date),
    datasets: [
      {
        label: 'Bookings Per Day',
        data: bookingData.map((booking) => booking.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
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
  );
};

export default AdminDashboard;
