import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo3.jpg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Menu icons
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update mobile status based on window size
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMobileMenuOpen(false); // Ensure the menu is closed on large screens
      }
    };

    // Set initial value
    handleResize();

    // Listen for window resize event
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the menu for mobile screens
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className='logo-link' to='/'>
          <img className="logo" src={logo} alt="Logo" />
          <h4>Fountain Care Hospital</h4>
        </Link>

        {/* Menu icon for smaller/medium screens */}
        {isMobile && (
          <div className="menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        {/* Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen && isMobile ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to="/aboutus" onClick={toggleMobileMenu}>About Us</Link></li>
            <li><Link to="/services" onClick={toggleMobileMenu}>Our Services</Link></li>
            <li><Link to="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={toggleMobileMenu}><button className="btn">Contact Us</button></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
