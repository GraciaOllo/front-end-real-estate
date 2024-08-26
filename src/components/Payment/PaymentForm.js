import React, { useState } from 'react';
import ApiService from '../../controllers/ApiService';
import './Payment.css';

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
      const response = await fetch('http://localhost:8086/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        amount:paymentData
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      console.log('Response data:', data);
      alert('Pay successful!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div align='center'  className='PaymentContainer'>
 <div>
      
      <form onSubmit={handleSubmit} className='PaymentForm'>
        <h1 className='PayTitle'>Payment Form</h1>
        <label >
          <b> Amount:</b>
        </label>
      <input
        type="decimal"
        name="amount"
        value={paymentData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      /><br/>
      <label >
          <b> Method:</b>
        </label>
      <input
        type="text"
        name="method"
        value={paymentData.method}
        onChange={handleChange}
        placeholder="Payment Method"
        required
      /><br/>
      <label>
          <b> Method:</b>
        </label>
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
      </div>
    </div>
   
   
  );
};

export default PaymentForm;
