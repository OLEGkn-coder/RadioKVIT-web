import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import logoRadio from '../assets/Logo White.png';
import './Header.css';
function Header(){
 return(
  <header className = "Header">
   <Link to = '/homepage' className = "logo-button">
    <img src = { logoRadio } alt = "RadioKVIT-logo" className = "logo"></img>
   </Link>
  </header>
 )
}

export default Header;