import React, { useState } from 'react';
import './Contact.css'; // Ensure this CSS file is created for styling
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service for sending emails
    emailjs
      .send(
        'service_t0reigc', // Replace with your EmailJS service ID
        'template_nityvrh', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'sHa5018nyQdQNwHrJ' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSent(true);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-row">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><FaMapMarkerAlt className='icon' /> <strong>Address:</strong> P.O. BOX 147, Sampa-Jaman North-Ghana</p>
          <p><FaEnvelope className='icon' /> <strong>Email:</strong> fountaincare1@gmail.com</p>
          <p><FaPhone className='icon' /> <strong>Phone:</strong> +233 244 473 4233</p>
          <p><FaClock className='icon' /> <strong>Hours:</strong> Monday - Sunday, We work all days</p>
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          {sent && <p className="success-msg">Your message has been sent successfully!</p>}
        </div>
      </div>

      <div className="map-container">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.9461594997774!2d-2.6987860268688673!3d7.954301504888721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfcfee00e1519c91%3A0xe5ec3eadd0fb6035!2sFountain%20Care%20Hospital%20Ltd!5e1!3m2!1sen!2sgh!4v1727091015062!5m2!1sen!2sgh"
          title="Hospital Location"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
