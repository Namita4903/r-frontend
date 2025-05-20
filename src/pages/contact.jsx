import React, { useState } from 'react';
import axios from 'axios';
import "../contact.css";

import Navbar from '../../src/components/navbar';
import Footer from '../../src/components/footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post("http://localhost:5001/api/contact/addContact", formData);
      setStatus(res.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <Navbar/>

      <section className="contact-hero">
        <div className="hero-content container">
          <h2>Get in Touch with Us</h2>
          <p>If you have any questions or need assistance, feel free to reach out.</p>
        </div>
      </section>

      <section className="contact-section container">
        <div className="form-container">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
          {status && <p style={{ marginTop: "10px", color: status.includes("successfully") ? "green" : "red" }}>{status}</p>}
        </div>

        <div className="contact-info">
          <h3>Our Address</h3>
          <p>MedTrack Inc., 123 Health St, Wellness City, CA, 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: support@medtrack.com</p>
        </div>
      </section>

      <section className="map-section">
        <h3 className="map-heading">Find Us on the Map</h3>
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204500.12508255272!2d-119.95726619001438!3d36.78701030127312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1744602275562!5m2!1sen!2sin" width='100%' height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </div>
      </section>

     <Footer/>
    </div>
  );
};

export default Contact;
