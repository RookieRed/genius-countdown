import React from "react";
import './App.css';
import Count from "./Count";
import baneer from '../src/Genius-baneer.png';
import FB from '../src/Facebook_Logo.png';
import TW from '../src/Twitter_Logo.png';
import PI from '../src/Pinterest_Logo.png';
import IN from '../src/Instagram_Logo.png';


function App() {
  return (
    <div className="app">
      <img src={baneer} className="baneer" alt="baneer" />
      <Count/>
      <h2 className="Attends">En attendant rejoins le guide sur les réseaux</h2>
      <div class="zoom colonne">
      <a href="https://www.facebook.com/geniuscbd"><img src={FB} className="FB" alt="FB"/></a>
      <a href="https://twitter.com/genius_cbd"><img src={TW} className="TW" alt="TW"/></a>
      <a href="https://www.pinterest.fr"><img src={PI} className="PI" alt="PI"/></a>
      <a href="https://www.instagram.com/genius_cbd"><img src={IN} className="IN" alt="IN"/></a>
      </div>
    </div>
  );
}

export default App;

