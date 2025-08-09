import React, { useState } from 'react';
import Header from '../components/Header';
import './Main.css';
import NavBar from '../components/NavBar';
import four from '../assets/4.svg';
import TextForDonate from '../assets/TextForDonate.svg';
import vector from '../assets/Vector.svg';
import backpage from '../assets/backpage.svg';
import { Link } from 'react-router-dom';
function DonatePage(){
 return(
  <div className = "Main">
   <Header/>
   <img src = { four }  className = "number-four-svg"></img>
   <img src = { TextForDonate } classNamw = "text-svg"></img>
   <NavBar/>
  </div>
 ) 
}

export default DonatePage;