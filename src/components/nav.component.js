import React, { Component } from 'react';
import menuIcon from '../styles/images/menu.png'; // Make sure the path matches where you store your images
import logoIcon from '../styles/images/logo.png';
import searchIcon from '../styles/images/search.png';
import '../styles/style.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isSubMenuOpen: !prevState.isSubMenuOpen,
    }));
  };

  render() {
    return (
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <img src={menuIcon} className="menu-icon" alt="Menu" />
          <img src={logoIcon} className="logo" alt="Logo" />
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
            <img src={searchIcon} alt="Search" />
          </div>
        </div>
        <div class="nav-right flex-div">    
            <a href="/login"><img src="images/exit.png" class="exit-icon-profile"/></a>      
        </div>         
        
      </nav>
    );
  }
}

export default NavBar;
