import React, { useState } from 'react';
import ApiService from '../../controllers/ApiService';
import './Booking.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    propertyId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await ApiService.createBooking(formData);
      alert('Booking successful!');
    } catch (error) {
      console.error('Error creating booking', error);
      alert('Failed to book the property.');
    }
  };

  return (
    <div className='BookingContainer' >
     
<form onSubmit={handleSubmit} className='BookingForm'>
<h1 className='BookTitle'>Booking Form</h1>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="propertyId"
        value={formData.propertyId}
        onChange={handleChange}
        placeholder="Property ID"
        required
      />
      <button type="submit">Book Now</button>
    </form>
 

    </div>
       
  );
};
    
export default BookingForm;
