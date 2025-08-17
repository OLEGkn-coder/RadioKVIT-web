import React, { createContext, useState, useContext, useEffect } from "react";

const BookingContext = createContext();
export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState(() => {
    const saved = localStorage.getItem("bookingData");
    return saved
      ? JSON.parse(saved)
      : { date: null, time: null, song: null, receipt: null, comment: "" };
  });

  const [bookedSlots, setBookedSlots] = useState(() => {
    const saved = localStorage.getItem("bookedSlots");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  useEffect(() => {
    localStorage.setItem("bookedSlots", JSON.stringify(bookedSlots));
  }, [bookedSlots]);

  const addBooking = (date, time) => {
    setBookedSlots(prev => {
      const newSlots = { ...prev };
      if (!newSlots[date]) newSlots[date] = {};
      if (!newSlots[date][time]) newSlots[date][time] = 0;
      newSlots[date][time] += 1;
      return newSlots;
    });
  };

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData, bookedSlots, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;