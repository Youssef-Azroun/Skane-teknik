import React, { useEffect } from 'react';
import './OmOss.css';
import map from '../assets/images/map.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import email from '../assets/images/email.png';
import phone from '../assets/images/tel.png';
import logo3 from '../assets/images/logo3.png';
import tiktok from '../assets/images/tiktok.png';
import snap from '../assets/images/snap.png';
import { useNavigate } from 'react-router-dom';

function OmOss() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="om-oss-container">
      <div className="logo-container">
        <img src={logo3} alt="Logo" className="logo-image" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
      </div>
      <h1 className="om-oss-title">Om Oss</h1>
      <p className="om-oss-description">
        Din kompletta destination för allt inom mobiler.
        Oavsett om du letar efter de senaste smarttelefonerna,
        viktiga tillbehör eller expertreparationer, så har vi det du behöver. 
        Vårt team är dedikerat till att erbjuda produkter och tjänster av
        högsta kvalitet för att hålla dig uppkopplad och igång smidigt.
        Utforska vårt breda utbud av mobila enheter och delar,
        och upplev snabba och pålitliga reparationer som får dig tillbaka
        på banan på nolltid. Gå med i vår gemenskap av nöjda kunder och
        upptäck skillnaden med Skåne teknik.
        Håll dig uppkopplad, håll dig mobil!
      </p>
      <div className="info-container">
        <div 
          className="address-section"
          onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Sk%C3%A5ne+Teknik+Helsingborg', '_blank')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
        >
          <div className="address-title-container">
            <img src={map} alt="Map icon" className="map-image" />
            <h2 className="address-title">Adress:</h2>
          </div>
          <div className="address-text-container">
            <p className="address-text">Bruksgatan 36A</p>
            <p className="address-text">252 24 Helsingborg</p>
          </div>
        </div>
        <div className="hours-section">
          <h2 className="opening-hours-title">Våra Öppettider:</h2>
          <div className="opening-hours">
            <p>Måndag: 10:00 - 18:00</p>
            <p>Tisdag: 10:00 - 18:00</p>
            <p>Onsdag: 10:00 - 18:00</p>
            <p>Torsdag: 10:00 - 18:00</p>
            <p>Fredag: 10:00 - 18:00</p>
            <p>Lördag: 11:00 - 16:00</p>
            <p>Söndag: Stängt</p>
          </div>
        </div>
        <div className="contact-section">
          <h2 className="contact-title">Kontakta oss</h2>
          <div className="contact-links">
            <div 
              className="contact-item" 
              role="button" 
              tabIndex={0}
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61569347977189', '_blank')}
            >
              <img src={facebook} alt="Facebook" className="contact-icon" />
              <span>Facebook</span>
            </div>
            <div 
              className="contact-item" 
              role="button" 
              tabIndex={0}
              onClick={() => window.open('https://www.instagram.com/skane_teknik?igsh=MThoMnN5cmQ5aDczMw==', '_blank')}
            >
              <img src={instagram} alt="Instagram" className="contact-icon" />
              <span>Instagram</span>
            </div>
            <div 
              className="contact-item" 
              role="button" 
              tabIndex={0}
              onClick={() => window.open('https://www.tiktok.com/@skaneteknik0?_t=8rjQoGoUdeQ&_r=1', '_blank')}
            >
              <img src={tiktok} alt="TikTok" className="contact-icon" />
              <span>TikTok</span>
            </div>
            <div 
              className="contact-item" 
              role="button" 
              tabIndex={0}
              onClick={() => window.open('https://www.snapchat.com/add/skaneteknik?share_id=KphjAcBE6rg&locale=en-SE', '_blank')}
            >
              <img src={snap} alt="Snapchat" className="contact-icon" />
              <span>Snapchat</span>
            </div>
            <div 
              className="contact-item" 
              role="button" 
              tabIndex={0}
              onClick={() => window.location.href = 'mailto:skaneteknik.shop@gmail.com'}
            >
              <img src={email} alt="Email" className="contact-icon" />
              <span>skaneteknik.shop@gmail.com</span>
            </div>
            <div className="contact-item" role="button" tabIndex={0}>
              <img src={phone} alt="Phone" className="contact-icon" />
              <span>Telefon: 0720222122</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OmOss;
