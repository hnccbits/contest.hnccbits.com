import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <h2 className="header-title-1">
          HnCC, BIT Sindri
        </h2>
        <h1 className="header-title-2">CODECHEF</h1>
        <h1 className="header-title-2">CHAPTER</h1>
      </div>
      {/* <div className="header-image">
        <img src={HackersImage} alt="hackers"></img>
      </div> */}
    </div>
  );
}

export default Header;
