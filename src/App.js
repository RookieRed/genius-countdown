import React from "react";
import './App.css';
import FB from './img/facebook.png';
import TW from './img/twitter.png';
import PI from './img/pinterest.png';
import IN from './img/instagram.png';
import Clock from "./Clock";
import {MailchimpForm} from "./MailchimpForm";


function App() {
  return (
    <div className="app">
      <div className="logo"/>
      <div className="banner"/>
      <div className="main">
        <Clock/>
        <h2 className="section-title">En attendant rejoins le guide sur les réseaux</h2>
        <div className="zoom colonne">
          <a className="social" href="https://www.facebook.com/geniuscbd">
            <img src={FB} className="FB" alt="FB"/>
          </a>
          <a className="social" href="https://twitter.com/genius_cbd">
            <img src={TW} className="TW" alt="TW"/>
          </a>
          <a className="social" href="https://www.pinterest.fr">
            <img src={PI} className="PI" alt="PI"/>
          </a>
          <a className="social" href="https://www.instagram.com/genius_cbd">
            <img src={IN} className="IN" alt="IN"/>
          </a>
        </div>
        <MailchimpForm/>
      </div>
    </div>
  );
}

export default App;

