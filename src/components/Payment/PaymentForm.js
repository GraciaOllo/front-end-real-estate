import React, { useState } from 'react';
import ApiService from '../../controllers/ApiService';

const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    method: '',
    propertyId: ''
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payment = await ApiService.makePayment(paymentData);
      alert('Payment successful!');
    } catch (error) {
      console.error('Error making payment', error);
      alert('Failed to make the payment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="amount"
        value={paymentData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="method"
        value={paymentData.method}
        onChange={handleChange}
        placeholder="Payment Method"
        required
      />
      <input
        type="text"
        name="propertyId"
        value={paymentData.propertyId}
        onChange={handleChange}
        placeholder="Property ID"
        required
      />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
