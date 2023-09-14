import React from 'react';
import HNCCLogo from '../../assets/hncclogo.png';
import MenuItems from './menuItems';
import './Nav.css';

class Nav extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className='main'>
      <nav className="navbar">
        <div id="bg"></div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.class} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <img src={HNCCLogo} alt="HNCC-Logo" className="nav-logo hncc-logo"/>

        <a href='https://docs.google.com/forms/d/13-tZ1XsTAdMy2gy1EJo7sxCCUTZL1XNFtf6zEGPsmhs' target='_blank' className='btn' rel="noopener noreferrer"><button className='bit-code-register'>Register Now</button></a>

        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>
      </div>
    );
  }
}

export default Nav;
