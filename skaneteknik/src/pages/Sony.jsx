import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sony.css';
import sonyX from '../assets/images/sonyX.jpg';
import sonyXPre from '../assets/images/sonyXPre.jpg';
import sonyXZPre from '../assets/images/sonyXZPre.jpg';
import andramodeller from '../assets/images/andramodeller.png';
import logo3 from '../assets/images/logo3.png';

function Sony() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleCardClick = (model) => {
    if (model === 'Sony XZ Premium') {
      navigate('/sony/xz-series');
    } else if (model === 'Sony X') {
      navigate('/sony/x-series');
    } else if (model === 'Sony X Performance') {
      navigate('/sony/xperformance-series');
    } else if (model === 'Andra modeller') {
      navigate('/sony/legacy-series');
    }
  };

  const sonys = [
    { model: 'Sony X', image: sonyX },
    { model: 'Sony X Performance', image: sonyXPre },
    { model: 'Sony XZ Premium', image: sonyXZPre },
    { model: 'Andra modeller', image: andramodeller }
  ];

  return (
    <div className="sony-container">
      <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo3} alt="Logo" className="logo-image" />
      </div>
      <h1 className="sony-title">Sony Models</h1>
      <div className="sony-grid">
        {sonys.map((sony, index) => (
          <div 
            key={index} 
            className="sony-card"
            onClick={() => handleCardClick(sony.model)}
          >
            <div className="sony-image-container">
              <img src={sony.image} alt={sony.model} className="sony-image" />
            </div>
            <h2 className="sony-model">{sony.model}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sony;
