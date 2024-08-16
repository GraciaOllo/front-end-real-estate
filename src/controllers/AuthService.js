import axios from 'axios';

const API_URL = '/api/auth';

const login = (data) => axios.post(`${API_URL}/login`, data);
const register = (data) => axios.post(`${API_URL}/register`, data);
const logout = () => axios.post(`${API_URL}/logout`);

export default {
  login,
  register,
  logout
};
