import React, { useContext, useState } from 'react';
import './DairyEggs.css';
import Header from '../Header/Header';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Cart/CartContext';

const DairyEggs = () => {
  const { addToCart, cartItems, updateCartItemQuantity } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState('');
  const navigate = useNavigate();

  const productsPerPage = 4;
  const totalProducts = 8;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const productList = [
    {
      name: 'Amul Taza Toned Milky Milk',
      image: 'assets/amul2.png',
      price: 235,
      originalPrice: 260,
      discount: '5% OFF',
      quantity: '500 ml',
    },
    {
      name: 'Amul Taza Whole Milk',
      image: 'assets/amul1.png',
      price: 300,
      quantity: '1L',
    },
    {
      name: 'Amul Skimmed Milk',
      image: 'assets/motherdairy4.png',
      price: 200,
      originalPrice: 190,
      discount: '5% OFF',
      quantity: '1L',
    },
    {
      name: 'Amul Taza Toned Milky Milk',
      image: 'assets/amul2.png',
      price: 235,
      originalPrice: 260,
      discount: '5% OFF',
      quantity: '500 ml',
    },
  ];

  const healthCareProducts = [
    {
      name: 'Amul Cow Milk',
      image: 'assets/amul3.png',
      price: 250,
      originalPrice: 300,
      discount: '20% OFF',
      quantity: '1L',
    },
    {
      name: 'Mother Dairy Low Fat Milk',
      image: 'assets/motherdairy4.png',
      price: 50,
      originalPrice: 55,
      discount: '10% OFF',
      quantity: '500ml',
    },
    {
      name: 'Paracetamol fast Acting pain-releiver',
      image: 'assets/health-product-2.png',
      price: 40,
      originalPrice: 60,
      discount: '500% OFF',
      quantity: '100ml',
    },
    {
      name: 'Amul Low Fat Milk',
      image: 'assets/amul5.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '2L',
    },
    {
      name: 'Paracetamol fast Acting pain-releiver',
      image: 'assets/health-product-1.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '10 tablets',
    },
    {
      name: 'Mother Dairy Cow Milk',
      image: 'assets/motherdairy2.png',
      price: 250,
      originalPrice: 300,
      discount: '30% OFF',
      quantity: '2L',
    },
  ];

  const currentProducts = productList.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleIncreaseQuantity = (product) => {
    updateCartItemQuantity(product, 1);
  };

  const handleDecreaseQuantity = (product) => {
    updateCartItemQuantity(product, -1);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === 'Amul') {
      navigate('/amul-products');
    }
    if (buttonName === 'Mother Dairy') {
      navigate('/mother-dairy');
    }
  };

  const handleProductClick = (productName) => {
    if (productName === 'Amul Taza Toned Milky Milk') {
      navigate('/amul2-product-description');
    }
  };

  return (
    <div className="dairy-eggs-page">
      <header className="page-header">
        <Header />
      </header>
      <div className="dairy-eggs-body">
        <div className="breadcrumb">
          <p>Home / Grocery / Dairy & Eggs</p>
        </div>
        <hr className="black-line" />
        <div className="content-wrapper">
          <Sidebar />
          <div className="content">
            <div className="left-section">
              <h2>Dairy & Eggs</h2>
              <p>Show 1-40 of 100</p>
            </div>
            <div className="right-section">
              <div className="sort-box">
                <span>Sort by: Featured</span>
                <button className="dropdown-button">▼</button>
              </div>
            </div>
            <div className="button-section">
              {[
                'Amul',
                'Mother Dairy',
                'Whole Milk',
                'Almond Milk',
                'Skim Milk',
                'Goat Milk',
                'Soya Milk',
                'Oat Milk',
                'Lactose-Free Milk',
                '2% Milk',
                '1% Milk',
              ].map((name) => (
                <button
                  key={name}
                  className={`product-button round-corners ${selectedButton === name ? 'active' : ''}`}
                  onClick={() => handleButtonClick(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="dairy-egg-product">
              <div className="product-row">
                {currentProducts.map((product, index) => (
                  <div key={index} className="product-box">
                    <span className="heart-emoji">❤️</span>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="dairy-product-image"
                      onClick={() => handleProductClick(product.name)}
                    />
                    <div className="product-rating">
                      <span>4</span><span>★★★★</span>
                    </div>
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">
                      <span>₹{product.price}</span>
                      {product.originalPrice && (
                        <>
                          {' '}
                          <span className="discount">₹{product.originalPrice}</span>
                          <span className="discount-rate">{product.discount}</span>
                        </>
                      )}
                    </div>
                    <div className="product-quantity">Quantity: {product.quantity}</div>
                    <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="pagination">
              <button
                className="page-button"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="page-button"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="health-care-section">
  <h2>Your Trusted Partner for Your Health Care Solution</h2>
  <div className="box-row">
    {healthCareProducts.map((product, index) => (
      <div key={index} className="rectangular-box">
        <img src={product.image} alt={product.name} className="box-image" />
        <div className="product-rating">
          <span>4</span><span>★★★★</span>
        </div>
        <div className="box-text">{product.name}</div>
        <div className="box-price">
          <div className="price-left">
            <span className="original-price">₹{product.originalPrice}</span>
            <span className="cancelled-price">₹{product.price}</span>
          </div>
          <div className="price-right">
            <span className="discount-rate">{product.discount}</span>
          </div>
        </div>
        <div className="box-quantity">Quantity: {product.quantity}</div>
        <button className="recent-add-to-cart" onClick={() => handleAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
        </div>
      </div>
    </div>
  );
};
export default DairyEggs;
