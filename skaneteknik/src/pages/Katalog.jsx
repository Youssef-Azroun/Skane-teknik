import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../assets/firebase-config';
import './Katalog.css';
import logo3 from '../assets/images/logo3.png';

function Katalog() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const productsPerPage = 12;
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const unsubscribe = onSnapshot(collection(db, "Products"), (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    }, (error) => {
      console.error("Error fetching products:", error);
    });

    return () => unsubscribe();
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.tag === selectedCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const categories = ['all', ...new Set(products.map(product => product.tag))]
    .sort((a, b) => {
      if (a === 'all') return -1;
      if (b === 'all') return 1;
      if (a === 'övrig') return 1;
      if (b === 'övrig') return -1;
      return a.localeCompare(b);
    });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowOverlay(true);
  };

  const handleCategoryClick = () => {
    setShowCategories(!showCategories);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="katalog-container">
      <div className="logo-container" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo3} alt="Logo" className="logo-image" />
      </div>
      <h1 className="katalog-title">Våra Produkter</h1>
      
      <div className="category-filter">
        <button
          onClick={handleCategoryClick}
          className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
        >
          {selectedCategory === 'all' ? 'Alla Produkter' : selectedCategory}
          <span className={`dropdown-arrow ${showCategories ? 'open' : ''}`}></span>
        </button>
        {showCategories && (
          <div className="category-list">
            <div 
              className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => {
                handleCategoryChange('all');
                setShowCategories(false);
              }}
            >
              Alla Produkter
            </div>
            {categories.slice(1).map((category) => (
              <div
                key={category}
                className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  handleCategoryChange(category);
                  setShowCategories(false);
                }}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="products-grid">
        {currentProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => handleProductClick(product)}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-image-container">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
            </div>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price} kr</p>
          </div>
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
            disabled={currentPage === 1}
          >
            Föregående
          </button>
          <span className="page-indicator">
            Sida {currentPage} av {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
            disabled={currentPage === totalPages}
          >
            Nästa
          </button>
        </div>
      )}
      
      {showOverlay && selectedProduct && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          <div className="overlay-content" onClick={e => e.stopPropagation()}>
            <div className="product-detail">
              <div className="tag-container">
                <p className="tag">Kategori: {selectedProduct.tag}</p>
              </div>
              <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="detail-image" />
              <h2 className="product-title">{selectedProduct.name}</h2>
              <p className="description">{selectedProduct.description}</p>
              <p className="price">{selectedProduct.price} kr</p>
              <button className="close-button" onClick={() => setShowOverlay(false)}>
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Katalog;
