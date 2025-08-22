import React, { createContext, useState, useContext, useEffect } from "react";
import { db } from "../firebase";               
import { ref, onValue, runTransaction } from "firebase/database";

const BookingContext = createContext();
export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {

  const [bookingData, setBookingData] = useState({
    date: null,
    time: null,
    song: null,
    receipt: null,
    comment: "",
  });

  const [bookedSlots, setBookedSlots] = useState({});

  useEffect(() => {
    const slotsRef = ref(db, "bookedSlots");
    const unsubscribe = onValue(slotsRef, (snap) => {
      setBookedSlots(snap.val() || {});
    });
    return () => unsubscribe();
  }, []);
  const addBooking = async (date, time, currentCountHint = 0) => {
    const slotRef = ref(db, `bookedSlots/${date}/${time}`);
    const prevCount = currentCountHint;

    const result = await runTransaction(slotRef, (slot) => {
      const count = slot?.count || 0;
      if (count >= 4) return slot;       
      return { count: count + 1 };       
    });

    const newCount = result.snapshot?.val()?.count || 0;
    const ok = newCount > prevCount && newCount <= 4;
    return { ok, newCount };
  };

  return (
    <BookingContext.Provider
      value={{ bookingData, setBookingData, bookedSlots, addBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
