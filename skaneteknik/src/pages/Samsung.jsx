import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Samsung.css';
import samsungA from '../assets/images/samsungA.jpg';
import samsungNote from '../assets/images/samsungNote.jpg';
import samsungs7 from '../assets/images/samsungs7.jpg';
import samsungs8 from '../assets/images/samsungs8.jpg';
import samsungs9 from '../assets/images/samsungs9.jpg';
import samsungs10 from '../assets/images/samsungs10.jpg';
import samsungs20 from '../assets/images/samsungs20.jpg';
import samsungs21 from '../assets/images/samsungs21.jpg';
import samsungs22 from '../assets/images/samsungs22.jpg';
import samsungs23 from '../assets/images/samsungs23.jpg';
import logo3 from '../assets/images/logo3.png';

function Samsung() {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (model) => {
    if (model === 'Andra modeller') {
      setShowOverlay(true);
      return;
    }
    if (model === 'A Series') {
      navigate('/samsung/a-series');
    } else if (model === 'Galaxy Note Series') {
      navigate('/samsung/note-series');
    } else if (model === 'Galaxy S7') {
      navigate('/samsung/s7-series');
    } else if (model === 'Galaxy S8') {
      navigate('/samsung/s8-series');
    } else if (model === 'Galaxy S9') {
      navigate('/samsung/s9-series');
    } else if (model === 'Galaxy S10') {
      navigate('/samsung/s10-series');
    } else if (model === 'Galaxy S20') {
      navigate('/samsung/s20-series');
    } else if (model === 'Galaxy S21') {
      navigate('/samsung/s21-series');
    } else if (model === 'Galaxy S22') {
      navigate('/samsung/s22-series');
    } else if (model === 'Galaxy S23') {
      navigate('/samsung/s23-series');
    }
  };

  const samsungs = [
    { model: 'A Series', image: samsungA },
    { model: 'Galaxy Note Series', image: samsungNote },
    { model: 'Galaxy S7', image: samsungs7 },
    { model: 'Galaxy S8', image: samsungs8 },
    { model: 'Galaxy S9', image: samsungs9 },
    { model: 'Galaxy S10', image: samsungs10 },
    { model: 'Galaxy S20', image: samsungs20 },
    { model: 'Galaxy S21', image: samsungs21 },
    { model: 'Galaxy S22', image: samsungs22 },
    { model: 'Galaxy S23', image: samsungs23 },
    { model: 'Andra modeller', image: null }
  ];

  return (
    <div className="samsung-container">
      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          <div className="overlay-content" onClick={e => e.stopPropagation()}>
            <h3>Vänligen kontakta oss för mer information om äldre Samsung-modeller</h3>
          </div>
        </div>
      )}
      <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo3} alt="Logo" className="logo-image" />
      </div>
      <h1 className="samsung-title">Samsung Models</h1>
      <div className="samsung-grid">
        {samsungs.map((samsung, index) => (
          <div key={index} className="samsung-card" onClick={() => handleCardClick(samsung.model)}>
            <div className="samsung-image-container">
              {samsung.image ? (
                <img src={samsung.image} alt={samsung.model} className="samsung-image" />
              ) : (
                <div className="placeholder-image">Andra Samsung modeller</div>
              )}
            </div>
            <h2 className="samsung-model">{samsung.model}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Samsung;
