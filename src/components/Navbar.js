import React from 'react';
import Logo from './Logo'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
    <Logo />
        <div className="header">
        Header
        </div>
    </div>
  )
}

export default Navbar;