import React, {useState} from 'react';
import Header from '../components/Header';
import './Main.css';
import one from '../assets/1.svg';
import vector from '../assets/Vector.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from '../components/NavBar';
import Text1 from '../assets/Text1.svg';
import './CustomDatepicker.css';
import { Link } from 'react-router-dom';
function DatePage(){
 const [selectedDate, setSelectedDate] = useState(null);
 return(
  <div className = "Main">
   <Header/>
   <div className = "Choosing">
    <img src = { Text1 } className = "text-svg"></img>
    <img src = { one } className = "number-svg"></img>
   </div>
   <div className = "Choosing-date">
    <DatePicker className = "react-datepicker"
    selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    dateFormat="dd.MM.yyyy"
    inline
    minDate = { new Date() }

    dayClassName = { date => { 
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    const currentDate = new Date(date);
    currentDate.setHours(0, 0, 0, 0);
    if(currentDate < today) {
     return "date-disabled";
    }
    if(date.getDay() === 0){
    return  "sunday";
   }
  
    return null;
   }}
    />
    
   </div>
  
   <div className = "nav-buttons-first-page">
    <Link to = '/timepage' className = "nextPage">
     ДАЛІ<img src = { vector } className = "vector-button"></img>
    </Link>
   </div>
   <NavBar className ="navbar"/>
  </div>
 )
}
 
export default DatePage;