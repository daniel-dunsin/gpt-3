import React from 'react'
import './Header.css';
import hero from '../../assets/ai.png';
import people from '../../assets/people.png'
const Header = () => {
  return <header className='header section-padding section-container' id='home'>
    <div className="header-container">
      <div className="header-content">
        <h1 className="gradient-text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto labore veritatis error, quam voluptates exercitationem libero modi aliquam ratione quibusdam aliquid.</p>
        <div className="input-group">
          <input type="text" placeholder='Enter Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="people-container">
          <img src={people} alt="our users" />
          <p>1,600 people requested access to visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-img">
        <img src={hero} alt="hero" />
      </div>
    </div>
  </header>
}

export default Header