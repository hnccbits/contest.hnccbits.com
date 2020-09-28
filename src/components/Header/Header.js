import React from 'react';
import HackersImage from '../../assets/header-img.svg';
import './header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <h2>
          Hackathon <span style={{ color: '#000' }}>and</span> coding club
        </h2>
        <h2>
          BIT <span style={{ color: '#000' }}>SINDRI</span>
        </h2>
        <h1>CODECHEF</h1>
        <h1>Chapter</h1>
      </div>
      <div className="header-image">
        <img src={HackersImage} alt="hackers"></img>
      </div>
    </div>
  );
}

export default Header;
