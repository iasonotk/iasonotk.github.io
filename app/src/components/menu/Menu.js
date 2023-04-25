import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

function Menu() {
    return (
      <nav>
        <ul className="menu">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }

export default Menu;
