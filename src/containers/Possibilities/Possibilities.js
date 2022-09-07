import React from 'react';
import './Possibilities.css';
import image from '../../assets/possibility.png';
const Possibilities = () => {
  return <section className="section-container section-padding" id='possibilites'>
    <div className="possibilities-container">
      <div className="possibilities-image-container">
        <img src={image} alt="vr image" />
      </div>
      <div className="possibilities-content">
        <p>Request Early Access to Get Started</p>
        <h1 className='gradient-text'>The Possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aliquam ipsam. Praesentium doloribus inventore pariatur quia beatae culpa fugit. Esse.</p>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  </section>
}

export default Possibilities