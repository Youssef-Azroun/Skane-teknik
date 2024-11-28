import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import omOss from './assets/images/om oss.png'
import phone1 from './assets/images/phone 1.png'
import phone2 from './assets/images/phone 2.png'
import protectop from './assets/images/protectop.png'
import watch from './assets/images/watch.png'
import watch2 from './assets/images/watch 2.png'
import apple from './assets/images/apple.png'
import huawei from './assets/images/huwawi.png'
import samsung from './assets/images/samsung.png'
import sony from './assets/images/sony.png'
import andra from './assets/images/andra.png'
import slogan from './assets/images/slogan.png'
import { useState, useEffect } from 'react'
import OmOss from './pages/OmOss'
import Iphone from './pages/Iphone'
import Samsung from './pages/Samsung'
import Sony from './pages/Sony'
import Huawei from './pages/Huawei'
import SpecificPhoneInfo from './pages/specificPhoneInfo'
import logo3 from './assets/images/logo3.png'
import ap from './assets/images/ap.png';
import mi from './assets/images/mi.png';
import one from './assets/images/one.png';
import op from './assets/images/op.png';
import sa from './assets/images/sa.png';
import so from './assets/images/so.png';
import vi from './assets/images/vi.png';

function App() {
  const images = [phone1, phone2, protectop, watch, watch2]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [key, setKey] = useState(0)
  const navigate = useNavigate()
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
      setKey(prev => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleOmOssClick = () => {
    navigate('/om-oss')
  }

  const handleBrandClick = (brand) => {
    navigate(`/${brand.toLowerCase()}`)
  }

  const handleAndraClick = () => {
    setShowOverlay(true);
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="App">
          <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src={logo3} alt="Logo" className="logo-image" />
          </div>
          <div className="slogan-container">
            <img src={slogan} alt="Slogan" className="slogan-image" />
          </div>
          <div className="main-content-box">
            <div className="expertise-section">
              <h2 className="expertise-title">Expertis inom mobilreparation</h2>
              <p className="expertise-description">
                Med över ett decennium av erfarenhet erbjuder vårt certifierade team professionell 
                service för alla ledande smartphonemodeller. Vi använder endast originaldelar och 
                moderna verktyg för att garantera högsta kvalitet på våra reparationer med full garanti.
              </p>
              <div className="brand-logos">
                <img src={ap} alt="Apple" className="brand-logo" />
                <img src={mi} alt="Xiaomi" className="brand-logo" />
                <img src={one} alt="OnePlus" className="brand-logo" />
                <img src={op} alt="Oppo" className="brand-logo" />
                <img src={sa} alt="Samsung" className="brand-logo" />
                <img src={so} alt="Sony" className="brand-logo" />
                <img src={vi} alt="Vivo" className="brand-logo" />
              </div>
            </div>
            <div className="big-square">
              <div className="brands-container">
                <h2 className="brands-title">Huvudsakliga telefonmodeller</h2>
                <div className="brands-row">
                  <img 
                    src={apple} 
                    alt="Apple" 
                    className="brand-image" 
                    onClick={() => handleBrandClick('iphone')}
                    style={{ cursor: 'pointer' }}
                  />
                  <img 
                    src={huawei} 
                    alt="Huawei" 
                    className="brand-image" 
                    onClick={() => handleBrandClick('huawei')}
                    style={{ cursor: 'pointer' }}
                  />
                  <img 
                    src={samsung} 
                    alt="Samsung" 
                    className="brand-image" 
                    onClick={() => handleBrandClick('samsung')}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="brands-row">
                  <img 
                    src={sony} 
                    alt="Sony" 
                    className="brand-image" 
                    onClick={() => handleBrandClick('sony')}
                    style={{ cursor: 'pointer' }}
                  />
                  <img 
                    src={andra} 
                    alt="Andra" 
                    className="brand-image"
                    onClick={handleAndraClick}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="small-squares-container">
            <div className="small-square bluish-square">
              <div className="square-content">
                <img 
                  key={key}
                  src={images[currentImageIndex]} 
                  alt="Product" 
                  className="carousel-image" 
                />
                <div className="text-container">
                  <span className="catalog-text">Bläddra i vår katalog</span>
                </div>
              </div>
            </div>
            <div className="small-square" onClick={handleOmOssClick} style={{ cursor: 'pointer' }}>
              <div className="square-content">
                <img src={omOss} alt="Om oss" className="square-image" />
                <div className="text-container">
                  <span className="om-oss-text">Om oss</span>
                </div>
              </div>
            </div>
          </div>
          {showOverlay && (
            <div className="overlay" onClick={() => setShowOverlay(false)}>
              <div className="overlay-content" onClick={e => e.stopPropagation()}>
                <p className="overlay-message">Vänligen kontakta oss för mer detaljer</p>
                <button className="close-button" onClick={() => setShowOverlay(false)}>
                  Stäng
                </button>
              </div>
            </div>
          )}
        </div>
      } />
      <Route path="/om-oss" element={<OmOss />} />
      <Route path="/iphone" element={<Iphone />} />
      <Route path="/samsung" element={<Samsung />} />
      <Route path="/sony" element={<Sony />} />
      <Route path="/huawei" element={<Huawei />} />
      <Route path="/samsung/a-series" element={<SpecificPhoneInfo brand="samsung" series="aSeries" />} />
      <Route path="/samsung/note-series" element={<SpecificPhoneInfo brand="samsung" series="noteSeries" />} />
      <Route path="/samsung/s7-series" element={<SpecificPhoneInfo brand="samsung" series="s7Series" />} />
      <Route path="/samsung/s8-series" element={<SpecificPhoneInfo brand="samsung" series="s8Series" />} />
      <Route path="/samsung/s9-series" element={<SpecificPhoneInfo brand="samsung" series="s9Series" />} />
      <Route path="/samsung/s10-series" element={<SpecificPhoneInfo brand="samsung" series="s10Series" />} />
      <Route path="/samsung/s20-series" element={<SpecificPhoneInfo brand="samsung" series="s20Series" />} />
      <Route path="/samsung/s21-series" element={<SpecificPhoneInfo brand="samsung" series="s21Series" />} />
      <Route path="/samsung/s22-series" element={<SpecificPhoneInfo brand="samsung" series="s22Series" />} />
      <Route path="/samsung/s23-series" element={<SpecificPhoneInfo brand="samsung" series="s23Series" />} />
      <Route path="/huawei/p9-series" element={<SpecificPhoneInfo brand="huawei" series="p9Series" />} />
      <Route path="/huawei/honor8-series" element={<SpecificPhoneInfo brand="huawei" series="honor8Series" />} />
      <Route path="/huawei/p10-series" element={<SpecificPhoneInfo brand="huawei" series="p10Series" />} />
      <Route path="/huawei/mate10-series" element={<SpecificPhoneInfo brand="huawei" series="mate10Series" />} />
      <Route path="/huawei/honor9-series" element={<SpecificPhoneInfo brand="huawei" series="honor9Series" />} />
      <Route path="/huawei/p30-series" element={<SpecificPhoneInfo brand="huawei" series="p30Series" />} />
      <Route path="/huawei/p20-series" element={<SpecificPhoneInfo brand="huawei" series="p20Series" />} />
      <Route path="/huawei/p40-series" element={<SpecificPhoneInfo brand="huawei" series="p40Series" />} />
      <Route path="/huawei/psmart-series" element={<SpecificPhoneInfo brand="huawei" series="pSmartSeries" />} />
      <Route path="/sony/xz-series" element={<SpecificPhoneInfo brand="sony" series="xzSeries" />} />
      <Route path="/sony/x-series" element={<SpecificPhoneInfo brand="sony" series="xSeries" />} />
      <Route path="/sony/xperformance-series" element={<SpecificPhoneInfo brand="sony" series="xPerformanceSeries" />} />
      <Route path="/sony/legacy-series" element={<SpecificPhoneInfo brand="sony" series="legacySonySeries" />} />
      <Route path="/apple/iphone6-series" element={<SpecificPhoneInfo brand="apple" series="iphone6Series" />} />
      <Route path="/apple/iphone7-series" element={<SpecificPhoneInfo brand="apple" series="iphone7Series" />} />
      <Route path="/apple/iphone8-series" element={<SpecificPhoneInfo brand="apple" series="iphone8Series" />} />
      <Route path="/apple/iphone-x-series" element={<SpecificPhoneInfo brand="apple" series="iphoneXSeries" />} />
      <Route path="/apple/iphone11-series" element={<SpecificPhoneInfo brand="apple" series="iphone11Series" />} />
      <Route path="/apple/iphone12-series" element={<SpecificPhoneInfo brand="apple" series="iphone12Series" />} />
      <Route path="/apple/iphone13-series" element={<SpecificPhoneInfo brand="apple" series="iphone13Series" />} />
      <Route path="/apple/iphone14-series" element={<SpecificPhoneInfo brand="apple" series="iphone14Series" />} />
    </Routes>
  )
}

export default App
