import React, { useEffect, useState } from 'react';
import './Iphone.css';
import iphone6 from '../assets/images/iphone6.jpg';
import iphone7 from '../assets/images/iphone7.jpg';
import iphone8 from '../assets/images/iphone8.jpg';
import iphoneX from '../assets/images/iphoneX.jpg';
import iphone11 from '../assets/images/iphone11.jpg';
import iphone12 from '../assets/images/iphone12.jpg';
import iphone13 from '../assets/images/iphone13.jpg';
import iphone14 from '../assets/images/iphone14.jpg';
import iphone15 from '../assets/images/iphone15.jpg';
import iphone16 from '../assets/images/iphone16.jpg';
import logo3 from '../assets/images/logo3.png';
import { useNavigate } from 'react-router-dom';

function Iphone() {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iphones = [
    { model: 'iPhone 6', image: iphone6 },
    { model: 'iPhone 7', image: iphone7 },
    { model: 'iPhone 8', image: iphone8 },
    { model: 'iPhone X', image: iphoneX },
    { model: 'iPhone 11', image: iphone11 },
    { model: 'iPhone 12', image: iphone12 },
    { model: 'iPhone 13', image: iphone13 },
    { model: 'iPhone 14', image: iphone14 },
    { model: 'iPhone 15', image: iphone15 },
    { model: 'iPhone 16', image: iphone16 },
    { model: 'Andra modeller', image: null }
  ];

  const handleCardClick = (model) => {
    if (model === 'iPhone 6') {
      navigate('/apple/iphone6-series');
    } else if (model === 'iPhone 7') {
      navigate('/apple/iphone7-series');
    } else if (model === 'iPhone X') {
      navigate('/apple/iphone-x-series');
    } else if (model === 'iPhone 8') {
      navigate('/apple/iphone8-series');
    } else if (model === 'iPhone 11') {
      navigate('/apple/iphone11-series');
    } else if (model === 'iPhone 12') {
      navigate('/apple/iphone12-series');
    } else if (model === 'iPhone 13') {
      navigate('/apple/iphone13-series');
    } else if (model === 'iPhone 14') {
      navigate('/apple/iphone14-series');
    } else if (model === 'iPhone 15') {
      navigate('/apple/iphone15-series');
    } else if (model === 'iPhone 16') {
      navigate('/apple/iphone16-series');
    } else if (model === 'Andra modeller') {
      setShowOverlay(true);
      return;
    }
  };

  return (
    <div className="iphone-container">
      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          <div className="overlay-content" onClick={e => e.stopPropagation()}>
            <h3>Vänligen kontakta oss för mer information om äldre iPhone-modeller</h3>
          </div>
        </div>
      )}
      <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo3} alt="Logo" className="logo-image" />
      </div>
      <h1 className="iphone-title">iPhone Models</h1>
      <div className="iphone-grid">
        {iphones.map((iphone, index) => (
          <div key={index} className="iphone-card" onClick={() => handleCardClick(iphone.model)}>
            <div className="iphone-image-container">
              {iphone.image ? (
                <img src={iphone.image} alt={iphone.model} className="iphone-image" />
              ) : (
                <div className="placeholder-image">Andra iPhone modeller</div>
              )}
            </div>
            <h2 className="iphone-model">{iphone.model}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;
