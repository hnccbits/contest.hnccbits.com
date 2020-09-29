import React from 'react';
import CCLogo from '../../assets/cc-logo.png';
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
        <img className="nav-logo cc-logo" src={CCLogo} alt="CodeChef-Logo" />
        <img src={HNCCLogo} className="nav-logo hncc-logo" alt="HNCC-Logo" />

        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>
    );
  }
}

export default Nav;
