import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import LandPage from './components/LandPage';
import Footer from './components/Footer';
import Visualisation from './components/3dVisualisation';
import LoginForm from './components/LoginForm';
import Signup from './components/SignupForm';
import Company from './components/About/Company';
import BookingForm from './components/Booking/BookingForm';
import UserDashboard from './components/Dashboards/userDashboard';
import './App.css';
import './Responsive.css';


const App = () => {
  return (
    <div className="App">
    
    
     <Navbar />
      <Routes>
        <Route path="/3dvisualisation" element={<Visualisation />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About/Company" element={<Company />} />
        <Route path="/" element={<LandPage />} />
        <Route path="/book_now" element={<BookingForm />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />

      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;