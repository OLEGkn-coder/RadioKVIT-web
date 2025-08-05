import React from 'react';
import Header from '../components/Header';
import './HomePage.css';


function HomePage(){
 return(
  <div className = "Main">
  <Header className = "Header"/>
  <div className = "MainText">
   <p className = "Text">DONATE TO</p>
   <p className = "Text">UKRAINIAN ARMY</p>
   <p class = "AnotherText"></p>
  </div>
  <div className = "AnotherText">Закликаємо зробити це ще приємнішим способом. Ваше Radio KVIT</div>
  <div className = "MainButton">
   <button>ЗАМОВИТИ ПІСНЮ</button>
  </div>
  <div className = "Info">
   <p className = "InfoText">**Все просто: замовляєш пісню, донатиш, і вона звучатиме на плацу - спеціально для тебе</p>
  </div>
</div>
 )
}

export default HomePage;