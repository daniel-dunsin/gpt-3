import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri'
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => {
  return <>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#wgpt3">What Is GPT3?</a>
    </li>
    <li>
      <a href="#features">Open AI</a>
    </li>
    <li>
      <a href="#possibilites">Case Studies</a>
    </li>
    <li>
      <a href="#blogs">Library</a>
    </li>
  </>
}

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);


  return <nav className='navbar-container section-container'>
    <div className="navbar-img">
      <img src={logo} alt="logo" />
    </div>
    <ul className="navbar-links-container">
      <Menu />
    </ul>
    <div className="navbar-buttons">
      <p>Sign In</p>
      <button type='button'>Sign Up</button>
    </div>
    <div className="smaller-screens-navbar-container">
      <div className="toggle-icon" onClick={()=>{setIsNavOpen(!isNavOpen)}}>
        {isNavOpen ? <RiCloseLine /> : <RiMenu3Fill />}
      </div>
      {isNavOpen && <div className='smaller-screens-links-container'>
        <Menu />
        <div className="smaller-screens-navbar-buttons">
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
      </div>}

    </div>
  </nav>
}

export default Navbar