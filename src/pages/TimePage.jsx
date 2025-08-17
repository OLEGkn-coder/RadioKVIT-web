import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './Main.css';
import NavBar from '../components/NavBar';
import two from '../assets/2.svg';
import TextForTime from '../assets/TextForTime.svg';
import vector from '../assets/Vector.svg';
import backpage from '../assets/backpage.svg';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

function TimePage() {
   const { bookingData, setBookingData, bookedSlots, addBooking } = useBooking();
  const times = ['9:50-10:00','11:20-11:40','13:00-13:30','14:50-15:00','16:20-16:30','17:50-18:00'];
  const [selectedTime, setSelectedTime] = useState(bookingData.time || null);

  const bookedTimes = bookedSlots[bookingData.date] || {};


  const handleSelectTime = (time) => {
    if ((bookedTimes[time] || 0) >= 4) return;
    setSelectedTime(time);
    setBookingData({ ...bookingData, time }); 
  };

  const isTimeBooked = (time) => (bookedTimes[time] || 0) >= 4;


  return (
    <div className="Main">
      <Header/>
      <img src={two} className="number-two-svg"/>
      <img src={TextForTime} className="text-svg"/>
      <div className="Button-time">
        <div className="Time-line-one">
          {times.slice(0,3).map(time => (
               <button key={time} className={`time-button ${selectedTime===time?'active':''} ${isTimeBooked(time)?'booked':''}`}
              onClick={()=>handleSelectTime(time)} disabled={isTimeBooked(time)}>{time}</button>
          ))}
        </div>
        <div className="Time-line-two">
          {times.slice(3,6).map(time => (
                <button key={time} className={`time-button ${selectedTime===time?'active':''} ${isTimeBooked(time)?'booked':''}`}
              onClick={()=>handleSelectTime(time)} disabled={isTimeBooked(time)}>{time}</button>
          ))}
        </div>
      </div>
      <div className="nav-buttons">
        <Link to="/datepage" className="backPage"><img src={backpage}/>НАЗАД</Link>
        <Link to="/songpage" className="nextPage">ДАЛІ <img src={vector}/></Link>
      </div>
      <NavBar/>
    </div>
  );
}

export default TimePage;
