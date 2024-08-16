import React, { useState } from 'react';
import ApiService from '../../controllers/ApiService';

const Complaints = () => {
  const [complaintData, setComplaintData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setComplaintData({ ...complaintData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const complaint = await ApiService.submitComplaint(complaintData);
      alert('Complaint submitted successfully!');
    } catch (error) {
      console.error('Error submitting complaint', error);
      alert('Failed to submit the complaint.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={complaintData.title}
        onChange={handleChange}
        placeholder="Complaint Title"
        required
      />
      <textarea
        name="description"
        value={complaintData.description}
        onChange={handleChange}
        placeholder="Describe your issue"
        required
      />
      <button type="submit">Submit Complaint</button>
    </form>
  );
};

export default Complaints;
