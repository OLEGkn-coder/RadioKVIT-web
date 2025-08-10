import React, { useRef ,useState } from 'react';
import Header from '../components/Header';
import './Main.css';
import NavBar from '../components/NavBar';
import five from '../assets/5.svg';
import TextForComment from '../assets/TextForComment.svg';
import vector from '../assets/Vector.svg';
import backpage from '../assets/backpage.svg';
import { Link } from 'react-router-dom';
function ComponentPage(){
 return (
  <div className = "Main">
   <Header/>
    <img className = "number-five-svg" src = { five }></img>
    <img className =  "text-svg" src = { TextForComment }></img>
    <div className = "info-comment-div">
     <p className = "InfoText">
      Якщо у вас є специфічні побажання з приводу
     </p>
     <p className = "InfoText">
      чого завгодно, ви можете залишити їх тут:
     </p>
    </div>
    <div className = "input-comment-div">
     <input type = "text" placeholder='Пачку дзиґар і хмільне міцне літрове...' className = "input-comment"></input>
    </div>
    <div className = "nav-buttons">
     <Link to = '/donatepage' className = "back"><img src = { backpage }></img></Link>
     <Link to = '/finalpage' className = "next">ПІДТВЕРДИТИ</Link>
    </div>
   <NavBar/>
  </div>
 )
}

export default ComponentPage;