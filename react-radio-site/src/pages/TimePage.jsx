import React, { useState } from 'react';
import Header from '../components/Header';
import './Main.css';
import NavBar from '../components/NavBar';
import two from '../assets/2.svg';
import TextForTime from '../assets/TextForTime.svg';
import vector from '../assets/Vector.svg';
import backpage from '../assets/backpage.svg';
import { Link } from 'react-router-dom';
function TimePage(){
 return(
  <div className = "Main">
   <Header/>
   <div className = "Choosin">
    <img src = { two} className = "number-two-svg"></img>
    <img src = { TextForTime } className = "text-svg"></img>
   </div>
   <div className = "Button-time">
    <div className = "Time-line-one">
    <button className = "time-button">9:50-10:00</button>
    <button className = "time-button">11:20-11:40</button>
    <button className = "time-button">13:00-13:30</button>
    </div>
    <div className = "Time-line-two">
    <button className = "time-button">14:50-15:00</button>
    <button className = "time-button">16:20-16:30</button>
    <button className = "time-button">17:50-18:00</button>
    </div>
   </div>
   <div className = "Info-time-page">
    <div className = "design-time-page">
    <p className = "InfoText-time-page">**</p>
    </div>
   <p className = "InfoText-time-page">Просимо звернути увагу! Доступні для букінга дані позначено білим кольором</p>
  </div>
  <div className = "nav-buttons">
   <Link to = '/datepage' className = "backPage"><img src = { backpage } className = "vector-back-button"></img>НАЗАД</Link>
   <Link to = '/songpage' className = "nextPage">ДАЛІ <img src = { vector } className = "vector-next-button"></img></Link>
  </div>
  <NavBar/>
  </div>
 )
}

export default TimePage;