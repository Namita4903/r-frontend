import React from 'react';
import { NavLink } from 'react-router';
import Facebook from "../assets/images/facebook.png";
import Instagram from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import Twitter from "../assets/images/twitter.png";
import "../index.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company">
            <h1>Medical History Tracker</h1>
            <p>We are dedicated to providing seamless and secure platforms for managing your healthcare needs.</p>
            <div className="social-links">
              <a href="#"><img src={Facebook} alt="Facebook" /></a>
              <a href="#"><img src={Twitter} alt="Twitter" /></a>
              <a href="#"><img src={Linkedin} alt="LinkedIn" /></a>
              <a href="#"><img src={Instagram} alt="Instagram" /></a>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h1>Company</h1>
            <ul>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/faq">FAQ</NavLink></li>
            </ul>
          </div>

          <div className="footer-section services">
            <h1>Our Services</h1>
            <ul>
              <li><NavLink to="#">Personalized Dashboards</NavLink></li>
              <li><NavLink to="#">Doctor Collaboration</NavLink></li>
              <li><NavLink to="#">Encrypted Reports</NavLink></li>
              <li><NavLink to="#">Appointment Scheduling</NavLink></li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h1>Contact Information</h1>
            <p><strong>Address:</strong> 123 Health Lane, MedCity</p>
            <p><strong>Email:</strong> contact@medicaltracker.com</p>
            <p><strong>Phone:</strong> +1 800-555-0100</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Medical History Tracker. All rights reserved. | <NavLink to="/terms">Terms of Service</NavLink> | <NavLink to="/privacy">Privacy Policy</NavLink></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
