import React from 'react';
import './Navbar.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className='navbar-link' to='/' >Home </Link>
        </li>
        <li className="navbar-item">
          <Link className='navbar-link' to='/cards' >Cards </Link>
        </li>
        <li className="navbar-item">
          <Link className='navbar-link' to='/star' >Star Rating </Link>
        </li>
        <li className="navbar-item">
          <Link className='navbar-link' to='/comments' >Comments</Link>
        </li>
        <li className="navbar-item">
          <Link className='navbar-link' to='/share' >Share</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
