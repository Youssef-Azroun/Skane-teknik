import React, { useEffect, useState } from 'react';
import './Huawei.css';
import huaweiP9 from '../assets/images/huaweiP9.jpg';
import huaweiHonor8 from '../assets/images/huaweiHonor8.jpg';
import huaweiP10 from '../assets/images/huaweiP10.jpg';
import huaweiMate10 from '../assets/images/huaweiMate10.jpg';
import huaweiHonor9 from '../assets/images/huaweiHonor9.jpg';
import huaweiP30 from '../assets/images/huaweiP30.jpg';
import huaweiP20 from '../assets/images/huaweiP20.jpg';
import huaweiP40 from '../assets/images/huaweiP40.jpg';
import huaweiPsmart from '../assets/images/huaweiPsmart.jpg';
import logo3 from '../assets/images/logo3.png';
import { useNavigate } from 'react-router-dom';

function Huawei() {
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
    if (model === 'Huawei P9') {
      navigate('/huawei/p9-series');
    } else if (model === 'Huawei Honor 8') {
      navigate('/huawei/honor8-series');
    } else if (model === 'Huawei P10') {
      navigate('/huawei/p10-series');
    } else if (model === 'Huawei Mate 10') {
      navigate('/huawei/mate10-series');
    } else if (model === 'Huawei Honor 9') {
      navigate('/huawei/honor9-series');
    } else if (model === 'Huawei P30') {
      navigate('/huawei/p30-series');
    } else if (model === 'Huawei P20') {
      navigate('/huawei/p20-series');
    } else if (model === 'Huawei P40') {
      navigate('/huawei/p40-series');
    } else if (model === 'Huawei P Smart') {
      navigate('/huawei/psmart-series');
    }
  };

  const huaweis = [
    { model: 'Huawei P9', image: huaweiP9 },
    { model: 'Huawei Honor 8', image: huaweiHonor8 },
    { model: 'Huawei P10', image: huaweiP10 },
    { model: 'Huawei Mate 10', image: huaweiMate10 },
    { model: 'Huawei Honor 9', image: huaweiHonor9 },
    { model: 'Huawei P30', image: huaweiP30 },
    { model: 'Huawei P20', image: huaweiP20 },
    { model: 'Huawei P40', image: huaweiP40 },
    { model: 'Huawei P Smart', image: huaweiPsmart },
    { model: 'Andra modeller', image: null }
  ];

  return (
    <div className="huawei-container">
      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          <div className="overlay-content" onClick={e => e.stopPropagation()}>
            <h3>Vänligen kontakta oss för mer information om äldre Huawei-modeller</h3>
          </div>
        </div>
      )}
      <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo3} alt="Logo" className="logo-image" />
      </div>
      <h1 className="huawei-title">Huawei Models</h1>
      <div className="huawei-grid">
        {huaweis.map((huawei, index) => (
          <div 
            key={index} 
            className="huawei-card"
            onClick={() => handleCardClick(huawei.model)}
            style={{ cursor: 'pointer' }}
          >
            <div className="huawei-image-container">
              {huawei.image ? (
                <img src={huawei.image} alt={huawei.model} className="huawei-image" />
              ) : (
                <div className="placeholder-image">Andra Huawei modeller</div>
              )}
            </div>
            <h2 className="huawei-model">{huawei.model}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Huawei;
