import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import logoRadio from '../assets/Logo White.svg';
import './Header.css';
function Header(){
 return(
  <header className = "Header">
   <Link to = '/' className = "logo-button" >
    <img src = { logoRadio } alt = "RadioKVIT-logo" className = "logo"></img>
   </Link>
  </header>
 )
}

export default Header;