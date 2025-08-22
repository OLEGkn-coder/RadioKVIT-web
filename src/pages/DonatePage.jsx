import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import './Main.css';
import NavBar from '../components/NavBar';
import four from '../assets/4.svg';
import TextForDonate from '../assets/TextForDonate.svg';
import vector from '../assets/Vector.svg';
import backpage from '../assets/backpage.svg';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function DonatePage(){
  const { bookingData, setBookingData } = useBooking();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const storageRef = ref(storage, `receipts/${Date.now()}-${file.name}`);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        setFileName(file.name);
        setBookingData({ ...bookingData, receipt: downloadURL }); 
        alert("Квитанцію завантажено ✅");
      } catch (err) {
        console.error("Помилка завантаження:", err);
        alert("Не вдалося завантажити квитанцію 😢");
      }
    } else {
      setFileName('');
      setBookingData({ ...bookingData, receipt: '' });
    }
  };

  const handleUploadClick = () => fileInputRef.current.click();

  return(
    <div className="Main">
      <Header/>
      <img src={four}  className="number-four-svg"/>
      <img src={TextForDonate} className="text-svg"/>
      <div className="info-div-one">
        <p className="InfoText">
          Щоб замовити пісню, вам необхідно задонатити 
          на постійну банку за посиланням нижче
          номіналом від 20 гривень:
        </p>
      </div>
      <div className="reference-div">
        <button className="reference-button"
          onClick={() => {
            const newWindow = window.open('https://send.monobank.ua/jar/5LwGSp9NNj', '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
          }}
        >
          ПОСИЛАННЯ НА АКТУАЛЬНИЙ ЗБІР 
        </button>
      </div>
      <div className="info-div-two">
        <p className="InfoText">Зібрані кошти підуть на потреби </p>
        <p className="InfoText">військових-могилянців на збір від KMA Help</p>
      </div>
      <div className="input-img">
        <input 
          className="upload-img" 
          type="file" 
          accept="image/*,.pdf" 
          ref={fileInputRef} 
          required 
          onChange={handleFileChange}
        />
        <button 
          className="upload-button" 
          type="button" 
          onClick={handleUploadClick}
        >
          Завантажити квитанцію
        </button>
        {fileName && <p className="InfoText">Файл: {fileName}</p>}
      </div>
      <div className="nav-buttons">
        <Link to="/songpage" className="backPage">
          <img src={backpage} className="vector-back-button"/>НАЗАД
        </Link>
        <Link to="/commentpage" className="nextPage">
          ДАЛІ <img src={vector} className="vector-next-button"/>
        </Link>
      </div>
      <NavBar/>
    </div>
  ) 
}

export default DonatePage;
