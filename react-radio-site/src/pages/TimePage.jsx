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
 const times = ['9:50-10:00','11:20-11:40','13:00-13:30','14:50-15:00','16:20-16:30','17:50-18:00'];
 const [selectedTime, setSelectedTime] = useState(null);
 return(
  <div className = "Main">
   <Header/>
  
    <img src = { two} className = "number-two-svg"></img>
    <img src = { TextForTime } className = "text-svg"></img>
 
   <div className = "Button-time">
    <div className = "Time-line-one">
    {times.slice(0, 3).map((time) => (
   <button key = {time} className = {`time-button ${selectedTime === time ? 'active' : ''}`} onClick ={() => setSelectedTime(time)}>{time}</button>
     ))}
    </div>
    <div className = "Time-line-two">
     {times.slice(3, 6).map((time) => (
    <button key = {time} className = {`time-button ${selectedTime === time ? 'active' : ''}`} onClick ={() => setSelectedTime(time)}>{time}</button> 
    ))}
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