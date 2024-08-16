import axios from 'axios';

const BASE_URL = 'http://localhost:8085';

const ApiService = {
  // Fetch a list of properties
  getProperties: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/properties`);
      return response.data;
    } catch (error) {
      console.error('Error fetching properties', error);
      throw error;
    }
  },

  // Fetch details of a specific property
  getPropertyById: async (propertyId) => {
    try {
      const response = await axios.get(`${BASE_URL}/properties/${propertyId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching property with ID: ${propertyId}`, error);
      throw error;
    }
  },

  // Submit a new property listing
  createProperty: async (propertyData) => {
    try {
      const response = await axios.post(`${BASE_URL}/properties`, propertyData);
      return response.data;
    } catch (error) {
      console.error('Error creating property', error);
      throw error;
    }
  },

  // Fetch a list of bookings
  getBookings: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/bookings`);
      return response.data;
    } catch (error) {
      console.error('Error fetching bookings', error);
      throw error;
    }
  },

  // Create a new booking
  createBooking: async (bookingData) => {
    try {
      const response = await axios.post(`${BASE_URL}/bookings`, bookingData);
      return response.data;
    } catch (error) {
      console.error('Error creating booking', error);
      throw error;
    }
  },

  // Fetch payment history
  getPaymentHistory: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/payments/history`);
      return response.data;
    } catch (error) {
      console.error('Error fetching payment history', error);
      throw error;
    }
  },

  // Make a payment
  makePayment: async (paymentData) => {
    try {
      const response = await axios.post(`${BASE_URL}/payments`, paymentData);
      return response.data;
    } catch (error) {
      console.error('Error making payment', error);
      throw error;
    }
  },

  // User login
  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in', error);
      throw error;
    }
  },

  // User registration
  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user', error);
      throw error;
    }
  },

  // Fetch user profile
  getUserProfile: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/profile`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile', error);
      throw error;
    }
  },

  // Submit a complaint
  submitComplaint: async (complaintData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/complaints`, complaintData);
      return response.data;
    } catch (error) {
      console.error('Error submitting complaint', error);
      throw error;
    }
  }
};

export default ApiService;
