
import { useState } from 'react';
import profilepic from './images/avatar-michelle.jpg';
import share from './images/icon-share.svg';
import facebook from './images/icon-facebook.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';
import './style.css';

function App() {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <div className="App">

      <div className="wrapper">
        <div className="hero"></div>
        <div className="content">
          <h1>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home 
          </h1>
          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
          <div className="content-bottom">
            <div className={openMenu?'triangleButton show' : 'triangleButton'}></div>
            <div className={openMenu?'share-buttons show' : 'share-buttons'}>
              <p>SHARE</p>
              <a href=""><img src={facebook} alt="" /></a>
              <a href=""><img src={twitter} alt="" /></a>
              <a href=""><img src={pinterest} alt="" /></a>
            </div>
            <img src={profilepic} alt="" />
            <p>Michelle Appleton <span>28 Jun 2020</span></p>
            <button onClick={()=>setopenMenu(openMenu => !openMenu)}><img src={share}></img></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
