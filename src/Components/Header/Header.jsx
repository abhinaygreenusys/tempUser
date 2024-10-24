import React, { useContext, useState } from 'react';
import { FaUserCircle, FaHeart, FaShoppingCart, FaCamera, FaMicrophone, FaStore, FaPills } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faHotel, faStore, faTruck, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import { CartContext } from '../../Cart/CartContext';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const handleClick = (tab) => {setActiveTab(tab);};
  const toggleCart = () => setShowCart(!showCart);
  const handleCloseCart = () => {setShowCart(false);};
  const { getCartCount } = useContext(CartContext);

  return (
    <header className="dashoboadHeader">
      <div className="dashoboadHeader-row">
        <div className="dashoboadHeader-left">
          <img src="assets/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="dashoboadHeader-center">
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="icon-button">
              <FaCamera />
            </button>
            <button className="icon-button">
              <FaMicrophone />
            </button>
          </div>
        </div>
        <div className="dashoboadHeader-right">
          <div className="nav-text-elements">
            <div className="nav-text-element">
              <Link to="/login">
                <FaUserCircle />
                <span>Log in</span>
              </Link>
            </div>
            <div className="nav-text-element">
              <FiChevronDown />
              <span>English-IND</span>
            </div>
            <div className="nav-text-element">
              <FaHeart />
              <span>Wishlist</span>
            </div>
            <div className="nav-text-element cart-icon" onClick={toggleCart}>
              {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
              <FaShoppingCart />
              <span>Cart</span>
              {showCart && <Cart onClose={handleCloseCart} />}
            </div>
          </div>
        </div>
      </div>
      <div className="dashoboadHeader-row">
        <div className="dashoboadHeader-left">
          <div
            className={`icon-text-item ${activeTab === 'grocery' ? 'active' : ''}`}
            onClick={() => handleClick('grocery')}
          >
            <Link to="/grocery">
              <FaShoppingCart className="icon" />
              <span>Grocery</span>
            </Link>
          </div>
          <div
            className={`icon-text-item ${activeTab === 'medicine' ? 'active' : ''}`}
            onClick={() => handleClick('medicine')}
          >
            <Link to='/medicine'>
              <FaPills className="icon" />
              <span>Medicine</span>
            </Link>
          </div>
          <div
            className={`icon-text-item ${activeTab === 'food-delivery' ? 'active' : ''}`}
            onClick={() => handleClick('food-delivery')}
          >
            <Link to='/food-delivery'>
              <FontAwesomeIcon icon={faTruck} size="x" />
              <span>Food Delivery</span>
            </Link>
          </div>
          <div
            className={`icon-text-item ${activeTab === 'booking' ? 'active' : ''}`}
            onClick={() => handleClick('booking')}
          >
            <Link to='/booking'>
              <FontAwesomeIcon icon={faHotel} size="x" />
              <span>Hotel/Flight Booking</span>
            </Link>
          </div>
          <div
            className={`icon-text-item ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => handleClick('services')}
          >
            <Link to='/services'>
              <FontAwesomeIcon icon={faHandshake} size="x" />
              <span>Services</span>
            </Link>
          </div>
          <div
            className={`icon-text-item ${activeTab === 'digital-showroom' ? 'active' : ''}`}
            onClick={() => handleClick('digital-showroom')}
          >
            <Link to='/digital-showroom'>
              <FontAwesomeIcon icon={faStore} size="x" />
              <span>Digital Showroom</span>
            </Link>
          </div>
          <div
            className={`icon-text-item ${activeTab === 'dry-clean' ? 'active' : ''}`}
            onClick={() => handleClick('dry-clean')}
          >
            <Link to='/dry-clean'>
              <FontAwesomeIcon icon={faTshirt} size="x" />
              <span>Laundry/Dry Clean</span>
            </Link>
          </div>
        </div>
        <div className="dashoboadHeader-right">
          <div className={`icon-text-item ${activeTab === 'seller' ? 'active' : ''}`} onClick={() => handleClick('seller')}>
            <Link to='/become-a-seller'>
              <FaStore className="icon" />
              <span>Become a Seller</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
