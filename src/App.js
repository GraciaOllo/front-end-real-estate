import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import LandPage from './components/LandPage';
import Footer from './components/Footer';
// import Visualisation from './components/3dVisualisation';
import LoginForm from './components/LoginForm';



import './App.css';

const App = () => {
  return (
    <div className="App">
    
    
     <Navbar />
      <Routes>
        {/* <Route path="/3dvisualisation" element={<Visualisation />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<LandPage />} />
      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;