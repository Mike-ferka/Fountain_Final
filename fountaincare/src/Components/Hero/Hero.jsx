import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/next.png'
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
 <h1>Welcome to Fountain Care Hospital LTD</h1>
  <p>Quality health care for all</p> 
  <h3 className="blinking-text">Hotline:</h3>
  <h3> +233 244 473 4233</h3>
<br/>
        <Link to="/aboutus">
          <button className='btn'>
            Explore more <img src={dark_arrow} alt=""/>
          </button>
        </Link>
  </div>
    </div>
  )
}

export default Hero