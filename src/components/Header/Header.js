import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <h2 className="header-title-2">
          Hackathon <span style={{ color: '#000' }}>and</span> coding club
        </h2>
        <h2 className="header-title-2">
          BIT <span style={{ color: '#000' }}>SINDRI</span>
        </h2>
        <h1 className="header-title-1">CODECHEF</h1>
        <h1 className="header-title-1">Chapter</h1>
      </div>
      {/* <div className="header-image">
        <img src={HackersImage} alt="hackers"></img>
      </div> */}
    </div>
  );
}

export default Header;
