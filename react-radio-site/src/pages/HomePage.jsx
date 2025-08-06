import React from 'react';
import Header from '../components/Header';
import './HomePage.css';
import vector1 from '../assets/Vector 1.svg';
import vector2 from '../assets/Vector 2.svg';
import vector3 from '../assets/Vector 3.svg';

function HomePage(){
 return(

  <div className = "Main">
      <img src = { vector2 } alt = "vector-2" className = "vector2"></img>
      <img src = { vector1} alt = "vector-1" className  = "vector1"></img>
      <img src = { vector3 } alt  = "vector-3" className = "vector3"></img>
  <Header className = "Header"/>
  <div className = "MainText">
   <p className = "Text">DONATE TO</p>
   <p className = "Text">UKRAINIAN ARMY</p>
   <p className = "AnotherText"></p>
  </div>
  <div className = "AnotherText">
    <p className = "another1">Закликаємо зробити це ще приємнішим способом.</p>
    <p className = "another2"> Ваше Radio KVIT</p>
  </div>
  <div className = "MainButton">
   <button className = "song-button">ЗАМОВИТИ ПІСНЮ</button>
  </div>
  <div className = "Info">
    <div className = "design">
    <p className = "InfoText">**</p>
    </div>
   <p className = "InfoText">Все просто: замовляєш пісню, донатиш, і вона звучатиме на плацу - спеціально для тебе</p>
  </div>
</div>
 )
}

export default HomePage;