import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <div className='container'>
               <div className='nav-logo'> <img src="/images/logo.jpeg" alt="Hotel Logo" className='logo-img'/>
                <span className='logo-text'>Hotel De Source (Oyinade)
                     <p className='taglinne'>....where class meets comfort</p>
                </span>
            </div>

            <nav className='nav-links'>
                <Link to="/about">About Us</Link>
                <Link to="/rooms"> Our Rooms</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/gallery">Gallery</Link>
            </nav>
            </div>
        </div>
    );
}

export default Header;