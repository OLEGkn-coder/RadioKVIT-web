import React, { createContext, useState, useContext, useEffect} from "react";

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);


export const BookingProvider = ({ children }) => {
 const [bookingData, setBookingData] = useState(() => {
  const saved = localStorage.getItem("bookingData");
  return saved ? JSON.parse(saved) : {
   date: null,
   time: null,
   song: null,
   receipt: null,
   comment: ""
  };
 });
 useEffect(() => {
  localStorage.setItem("bookingData", JSON.stringify(bookingData));
 }, [bookingData]);
 return (
  <BookingContext.Provider value= {{ bookingData, setBookingData}}>
   { children }
  </BookingContext.Provider>
 );
};