import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">estate</div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Company</div>
          <ul className="footer-links">
            <li><a href="/About/Company">About Us</a></li>
            <li><a href="#offices">Offices</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <div className="footer-title">Legal</div>
          <ul className="footer-links">
            <li><a href="#documents">Documents</a></li>
            <li><a href="#how-to-buy">How to Buy a House</a></li>
            <li><a href="#terms">Terms & Condition</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <div className="footer-title">Social</div>
          <ul className="footer-social">
            <li><a href="#facebook"><FaFacebookF /></a></li>
            <li><a href="#twitter"><FaTwitter /></a></li>
            <li><a href="#linkedin"><FaLinkedinIn /></a></li>
            <li><a href="#instagram"><FaInstagram /></a></li>
            <li><a href="#youtube"><FaYoutube /></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Home. All rights reserved.
</div>
      </div>
  
    </footer>
  );
};




export default Footer;



