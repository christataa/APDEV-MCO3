import React from 'react';
import '../styles/style.css';
import profileIcon from '../styles/images/profile.png';
import homeImage from '../styles/images/home.png';
import pawHeartImage from '../styles/images/paw-heart.png';
import pawImage from '../styles/images/paw.png';
import logoImage from '../styles/images/logo.png';
import searchImage from '../styles/images/search.png';
import exitImage from '../styles/images/exit.png';

function NavBarProfile() {
    return (
        <div className="nav">
            <div className="flex-div">
                <div className="nav-left flex-div">
                    <div className="sidebar-profile">
                        <div className="shortcut-links-profile">            
                            <a href="./profile"><img src={profileIcon} alt="Profile"/></a>
                            <a href="./home"><img src={homeImage} alt="Home"/></a>
                            <a href="./lost"><img src={pawHeartImage} alt="Lost"/></a>
                            <a href="./adopt"><img src={pawImage} alt="Adopt"/></a>
                            <span className="line"></span> 
                        </div>
                    </div>
                    <img src={logoImage} className="logo" alt="Logo"/>
                </div>
                <div className="nav-middle-profile flex-div-profile">
                    <div className="search-box-profile flex-div-profile">
                        <input type="text" placeholder="Search"/>
                        <img src={searchImage} alt="Search"/>
                    </div>
                </div>
                <div className="nav-right-profile flex-div-profile">    
                    <a href="/login"><img src={exitImage} className="exit-icon-profile" alt="Login/Exit"/></a>
                </div>
            </div>
        </div>
    );
}

export default NavBarProfile;
