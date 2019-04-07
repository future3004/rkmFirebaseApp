import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo2.png';

class NavBar extends Component {
  render() {
    return (
      <div>
          <nav>
            <div class="nav-wrapper">
              <img src={Logo}  style={{marginLeft: '50px', marginTop: '15px'}} alt="logo"/>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li style={{marginRight: '50px'}}><Link to="/">Logout</Link></li>
              </ul>
            </div>
          </nav>
      </div>
    );
  }
}

export default NavBar;
