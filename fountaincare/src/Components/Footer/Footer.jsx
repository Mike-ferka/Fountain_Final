import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
      <div class="footer-column">
        <h3>Working Days</h3>
        <p>We work all days</p>
      </div>
      <div class="footer-column">
        <h3>Visiting Hours</h3>
        <p>Morning: 5:30am - 6:30am</p>
        <p>Evening: 5:30pm - 6:30pm</p>
      </div>
      <div class="footer-column">
        <h3>Contact Us</h3>
        <p><strong>Address:</strong> P.O. BOX 147, Sampa-Jaman North-Ghana</p>
        <p><strong>Hotlines:</strong>  +233 244 473 4233</p>
        <p><strong>Email:</strong> fountaincare1@gmail.com</p>
        <div class="social-icons">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Ferka Michael. All rights reserved.</p>
    </div>
  </footer>
  
  );
}

export default Footer;
