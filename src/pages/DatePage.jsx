import React, { useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import one from '../assets/1.svg';
import Text1 from '../assets/Text1.svg';
import './CustomDatepicker.css';

function DatePage() {
   const { bookingData, setBookingData, bookedSlots } = useBooking();
  const [selectedDate, setSelectedDate] = useState(bookingData.date ? new Date(bookingData.date) : null);

  const handleDateChange = (date) => {
    const formatted = date.toISOString().split("T")[0];
    setSelectedDate(date);
    setBookingData({ ...bookingData, date: formatted });
  };

 
  const fullyBookedDates = Object.keys(bookedSlots).filter(date => {
    const slots = bookedSlots[date];
    return Object.values(slots).every(count => count >= 4);
  });

const handleDayClassName = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  const formattedDate = date.toISOString().split("T")[0];


  if (date < today) return "date-disabled";


  if (fullyBookedDates.includes(formattedDate)) return "date-disabled";

  return "";
};



  return (
    <div className="Main">
      <Header/>
      <div className="Choosing">
        <img src={Text1} className="text-svg"/>
        <img src={one} className="number-svg"/>
      </div>
      <div className="Choosing-date">
        <DatePicker
          inline
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd.MM.yyyy"
          minDate={new Date()}
          dayClassName={ handleDayClassName }
        />
      </div>
      <div className="nav-buttons-first-page">
        <Link to="/timepage" className="nextPage">ДАЛІ</Link>
      </div>
      <NavBar/>
    </div>
  );
}

export default DatePage;
