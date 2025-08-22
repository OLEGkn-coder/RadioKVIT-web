import React, { useEffect } from 'react';
import Header from '../components/Header';
import './Main.css';
import NavBar from '../components/NavBar';
import five from '../assets/5.svg';
import TextForComment from '../assets/TextForComment.svg';
import backpage from '../assets/backpage.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

function ComponentPage() {
  const { bookingData, setBookingData, bookedSlots, addBooking } = useBooking();
  const navigate = useNavigate();

  // EmailJS init
  useEffect(() => {
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser/dist/email.min.js';
      script.onload = () => {
        window.emailjs.init('XYkiRdWDDl3GG3Gkn'); 
      };
      document.body.appendChild(script);
    } else {
      window.emailjs.init('XYkiRdWDDl3GG3Gkn');
    }
  }, []);

  const handleConfirm = async () => {
  if (!bookingData.date || !bookingData.time) {
    alert("Оберіть дату та час перед підтвердженням!");
    return;
  }

  if (!bookingData.receipt) {
    alert("Завантажте квитанцію перед підтвердженням!");
    return;
  }

  const templateParams = {
    song: bookingData.song || '',
    date: bookingData.date || '',
    time: bookingData.time || '',
    comment: bookingData.comment || '',
    receipt: bookingData.receipt || '', 
  };

  try {
    await window.emailjs.send(
      'service_twcdbwr',
      'template_lj70xc9',
      templateParams
    );

    addBooking(bookingData.date, bookingData.time);
    alert("Ваше бронювання підтверджено ✅");
    navigate('/finalpage');
  } catch (error) {
    console.error('Помилка відправки повідомлення:', error);
    alert('Сталася помилка при відправці. Спробуйте ще раз.');
  }
};

  return (
    <div className="Main">
      <Header/>
      <img className="number-five-svg" src={five} alt="" />
      <img className="text-svg" src={TextForComment} alt="" />

      <div className="info-comment-div">
        <p className="InfoText">Якщо у вас є специфічні побажання з приводу</p>
        <p className="InfoText">чого завгодно, ви можете залишити їх тут:</p>
      </div>

      <div className="input-comment-div">
        <input
          type="text"
          placeholder="Пачку дзиґар і хмільне міцне літрове..."
          className="input-comment"
          value={bookingData.comment}
          onChange={(e) =>
            setBookingData({ ...bookingData, comment: e.target.value })
          }
        />
      </div>

      <div className="nav-buttons">
        <Link to="/donatepage" className="back"><img src={backpage} alt="" /></Link>
        <button className="next" onClick={handleConfirm}>ПІДТВЕРДИТИ</button>
      </div>

      <NavBar/>
    </div>
  );
}

export default ComponentPage;
