import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div>
          <h1 className="header-title">Magna Benita</h1>
          <p className="header-subtitle">ML & Data Science Enthusiast</p>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
