import React, { useEffect } from 'react';
import './specificPhoneInfo.css';
import phoneRepairPrices from './AllPhonesInfo';

function SpecificPhoneInfo({ brand, series }) {
  const data = phoneRepairPrices[brand]?.[series];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return <div>Information not found</div>;
  }

  return (
    <div className="phone-info-container">
      <h1 className="phone-info-title">{data.title}</h1>
      
      <div className="price-grid">
        {data.models.map((item, index) => (
          <div key={index} className="price-card">
            <h2 className="model-name">{item.model}</h2>
            <div className="repairs-list">
              {item.repairs.map((repair, repairIndex) => (
                <div key={repairIndex} className="repair-item">
                  <span className="repair-type">{repair.type}</span>
                  <span className="price">
                    {typeof repair.price === 'number' ? `${repair.price} kr` : repair.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {data.legacyModels && (
        <div className="legacy-models-section">
          <h2 className="services-title">Andra Modeller</h2>
          <div className="legacy-grid">
            {Object.entries(data.legacyModels).map(([series, seriesData]) => (
              <div key={series} className="legacy-series-card">
                <h3 className="legacy-series-title">{seriesData.title}</h3>
                <div className="legacy-models-list">
                  {seriesData.models.map((model, modelIndex) => (
                    <div key={modelIndex} className="legacy-model-card">
                      <h4 className="legacy-year">{model.year}</h4>
                      <div className="repairs-list">
                        {model.repairs.map((repair, repairIndex) => (
                          <div key={repairIndex} className="repair-item">
                            <span className="repair-type">{repair.type}</span>
                            <span className="price">
                              {typeof repair.price === 'number' ? `${repair.price} kr` : repair.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.additionalServices && (
        <div className="services-section">
          <h2 className="services-title">Ytterligare Tjänster</h2>
          <div className="services-grid">
            {data.additionalServices.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-name">{service.service}</span>
                <span className="service-price">
                  {typeof service.price === 'number' ? `${service.price} kr` : service.price + ' kr'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SpecificPhoneInfo;
