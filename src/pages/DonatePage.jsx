import React, { useRef ,useState } from 'react';
import Header from '../components/Header';
import './Main.css';
import NavBar from '../components/NavBar';
import four from '../assets/4.svg';
import TextForDonate from '../assets/TextForDonate.svg';
import vector from '../assets/Vector.svg';
import backpage from '../assets/backpage.svg';
import { Link } from 'react-router-dom';
function DonatePage(){
const fileInputRef = useRef(null);
const [fileName, setFileName] = useState('');

const handleFileChange = (e) => {
 if(e.target.files.length > 0){
  setFileName(e.target.files[0].name);
 }else{
  setFileName('');
 }
};

const handleUploadClick = () => {
 fileInputRef.current.click();
}

 return(
  <div className = "Main">
   <Header/>
   <img src = { four }  className = "number-four-svg"></img>
   <img src = { TextForDonate } className= "text-svg"></img>
   <div className = "info-div-one">
    <p className = "InfoText">
     Щоб замовити пісню, вам необхідно задонатити 
     на постійну банку за посиланням нижче
     номіналом від 20 гривень:
    </p>
   </div>
   <div className = "reference-div">
    <button className= "reference-button"
    onClick={() => {
     const newWindow =window.open('https://send.monobank.ua/jar/5LwGSp9NNj', '_blank', 'noopener,noreferrer');
     if(newWindow) newWindow.opener = null;
    }}
     >
    ПОСИЛАННЯ НА АКТУАЛЬНИЙ ЗБІР 
    </button>
   </div>
   <div className = "info-div-two">
    <p className = "InfoText">
     Зібрані кошти підуть на потреби 
    </p>
    <p className = "InfoText">
     військових-могилянців на збір від KMA Help
    </p>
    </div>
    <div className  = "input-img">
     <input className = "upload-img" type = "file" accept='image/*,.pdf' ref  = { fileInputRef } required onChange={ handleFileChange }></input>
     <button className = "upload-button" type = "button" onClick = {handleUploadClick}>Завантажити квитанцію</button>
    </div>
    <div className = "nav-buttons">
     <Link to = '/songpage' className = "backPage"><img src = { backpage } className = "vector-back-button"></img>НАЗАД</Link>
     <Link to = '/commentpage' className = "nextPage">ДАЛІ <img src = { vector } className = "vector-next-button"></img></Link>
    </div>
     <NavBar/>
   </div>
  
 ) 
}

export default DonatePage;