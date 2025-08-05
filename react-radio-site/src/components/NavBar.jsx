import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
 return (
  <div className = "navbar">
    <Link to = '/datepage' className = "nav-button">1</Link>
    <Link to = '/timepage' className = "nav-button">2</Link>
    <Link to = '/songpage' className = "nav-button">3</Link>
    <Link to = '/donatepage' className = "nav-button">4</Link>
    <Link to = '/commentpage' className = "nav-button">5</Link>
  </div>
 )
}

export default NavBar;