import React from 'react';
import './About.css';
import duodu from '../../assets/Duodu.jpg'

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="about-title">Our History</h2>
        <p className="about-description">
          We have a long-standing tradition of excellence in healthcare, having been established in 1990. Over the years, we have grown and adapted to meet the evolving needs of our community, always prioritizing patient care and innovation.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-title">Our Mission</h2>
        <p className="about-description">
          Our mission is to provide high-quality, compassionate healthcare to our community. We are committed to improving the health and well-being of our patients through exceptional care, advanced medical technology, and ongoing education.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-title">Our Vision</h2>
        <p className="about-description">
          Our vision is to be a leading healthcare provider known for our dedication to patient-centered care, innovation, and community engagement. We strive to create a healthier future for all through excellence in medical practice and service.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-title">Our Board</h2>
        <div className="board-list">
          <div className="board-member">
            <img className="board-image" src={duodu} alt="Dr. John Smith" />
            <div className="board-info">
              <h3 className="board-name">Dr. Duodu</h3>
              <h4 className="board-position">Chairman and CEO</h4>
              <p className="board-description">
                Dr. Duodu has over 20 years of experience in the healthcare sector, leading numerous successful initiatives to improve patient care and hospital operations.
              </p>
            </div>
          </div>
      
          
          {/* Add more board members as needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
