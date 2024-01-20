// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Create this file for styling

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li className="dropdown" onClick={toggleMenu}>
          Services <span className="down-arrow">&#9660;</span>
          <ul className={`dropdown-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/service1">Service 1</a></li>
            <li><a href="/service2">Service 2</a></li>
            <li><a href="/service3">Service 3</a></li>
          </ul>
        </li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
