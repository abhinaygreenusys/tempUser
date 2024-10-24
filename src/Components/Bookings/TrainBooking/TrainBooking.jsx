import React, { useState } from 'react';
import './TrainBooking.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaHandPointer, FaTrain, FaWallet } from 'react-icons/fa';

const TrainBooking = () => {
  const [activeTab, setActiveTab] = useState('train');
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [classType, setClassType] = useState('1A');
  const [quota, setQuota] = useState('General');
  const [journeyDate, setJourneyDate] = useState('');
  const stations = ['New Delhi','Mumbai','Chennai','Kolkata','Bangalore','Hyderabad','Ahmedabad','Pune','Jaipur','Lucknow',];
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    setShowFromSuggestions(true);
  };
  
  const handleFromFocus = () => {setShowFromSuggestions(true);};
  const handleFromBlur = () => {setTimeout(() => setShowFromSuggestions(false), 100);};
  const handleToChange = (e) => {setTo(e.target.value);setShowToSuggestions(true);};
  const handleToFocus = () => {setShowToSuggestions(true);};
  const handleToBlur = () => {setTimeout(() => setShowToSuggestions(false), 100);};
  const filteredFromStations = stations.filter((station) =>station.toLowerCase().startsWith(from.toLowerCase()));
  const filteredToStations = stations.filter((station) =>station.toLowerCase().startsWith(to.toLowerCase()));
  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to) {
      alert('Please enter both departure and destination stations.');
      return;
    }
    if (from === to) {
      alert('Departure and destination stations cannot be the same.');
      return;
    }
    if (!journeyDate) {
      alert('Please select a journey date.');
      return;
    }
    navigate('/train-details', { state: { from, to, classType, quota, journeyDate } });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'flight':
        navigate('/booking');
        break;
      case 'bus':
        navigate('/bus');
        break;
      case 'hotel':
        navigate('/hotels');
        break;
      case 'holiday':
        navigate('/holiday-packages');
        break;
      case 'train':
        navigate('/train-booking');
        break;
      default:
        break;
    }
  };
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <div className="train-booking-page">
      <div className="promotion-section">
        <p>
          Join Resia Today and Save Up to 20% on Your Flight. Use code{' '}
          <strong>TRAVEL</strong> at checkout. Promotion valid for new users only.
        </p>
      </div>
      <div className="image-section">
        <img src={`${process.env.PUBLIC_URL}/assets/mainImage.png`} alt="Main" className="main-image" />
        <div className="overlay">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="options-box">
        <div className={`option ${activeTab === 'flight' ? 'active' : ''}`}onClick={() => handleTabClick('flight')}>
          Flight
        </div>
        <div className={`option ${activeTab === 'train' ? 'active' : ''}`}onClick={() => handleTabClick('train')}>
          Train
        </div>
        <div className={`option ${activeTab === 'bus' ? 'active' : ''}`}onClick={() => handleTabClick('bus')}>
          Bus
        </div>
        <div className={`option ${activeTab === 'hotel' ? 'active' : ''}`}onClick={() => handleTabClick('hotel')}>
          Hotel
        </div>
        <div className={`option ${activeTab === 'holiday' ? 'active' : ''}`}onClick={() => handleTabClick('holiday')}>
          Holiday Package
        </div>
      </div>
      <div className="journey-box">
        <div className="journey-details">
          <div className="journey-item">
            <label htmlFor="from">From</label>
            <input type="text" id="from" name="from" value={from} 
              onChange={handleFromChange} onFocus={handleFromFocus}onBlur={handleFromBlur}
              placeholder="Enter departure station"autoComplete="off"
            />
            {from && showFromSuggestions && filteredFromStations.length > 0 && (
              <ul className="suggestions">
                {filteredFromStations.map((station, index) => (
                  <li  key={index}onMouseDown={() => { setFrom(station); setShowFromSuggestions(false); }}>
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="swap-icon" onClick={handleSwap} title="Swap From and To" role="button" tabIndex={0}
            onKeyPress={(e) => {if (e.key === 'Enter' || e.key === ' ') {handleSwap();}}}
            aria-label="Swap departure and destination stations">
            <svg  xmlns="http://www.w3.org/2000/svg"width="20" height="20" viewBox="0 0 24 24" fill="none"stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="17 11 21 15 17 19"></polyline>
              <line x1="21" y1="15" x2="9" y2="15"></line>
              <polyline points="7 5 3 9 7 13"></polyline>
              <line x1="3" y1="9" x2="15" y2="9"></line>
            </svg>
          </div>
          <div className="journey-item">
            <label htmlFor="to">To</label>
            <input type="text" id="to" name="to" value={to} onChange={handleToChange} 
              onFocus={handleToFocus}onBlur={handleToBlur}placeholder="Enter destination station"autoComplete="off"
            />
            {to && showToSuggestions && filteredToStations.length > 0 && (
              <ul className="suggestions">
                {filteredToStations.map((station, index) => (
                  <li 
                    key={index}
                    onMouseDown={() => { setTo(station); setShowToSuggestions(false); }}
                  >
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="journey-item">
            <label htmlFor="class">Class</label>
            <select  id="class" name="class" value={classType} onChange={(e) => setClassType(e.target.value)}>
              <option value="1A">AC First Class (1A)</option>
              <option value="2A">AC 2 Tier (2A)</option>
              <option value="3A">AC 3 Tier (3A)</option>
              <option value="3E">AC 3 Economy (3E)</option>
              <option value="CC">AC Chair Car (CC)</option>
              <option value="EC">Exec. Chair Car (EC)</option>
              <option value="SL">Sleeper (SL)</option>
              <option value="2S">Second Sitting (2S)</option>
            </select>
          </div>
          <div className="journey-item">
            <label htmlFor="quota">Quota</label>
            <select 
              id="quota" 
              name="quota" 
              value={quota} 
              onChange={(e) => setQuota(e.target.value)}
            >
              <option value="General">General</option>
              <option value="Tatkal">Tatkal</option>
              <option value="Ladies">Ladies</option>
              <option value="Sr. Citizen">Lower Birth/Sr. Citizen</option>
              <option value="Person With Disability">Person With Disability</option>
              <option value="Duty Pass">Duty Pass</option>
              <option value="Premium Tatkal">Premium Tatkal</option>
            </select>
          </div>
          <div className="journey-item date-item">
            <label htmlFor="journeyDate">Journey Date</label>
            <input  type="date" id="journeyDate" name="journeyDate" value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        <div className="search-button-container">
          <button className="search-button" onClick={handleSearch}>
            Search Train
          </button>
        </div>
        
      </div>
      <div className="product-section1">
        <div className="product-header1">
          <h2>Score the best price to Top Travel Spot</h2>
          <Link to="/see-all" className="see-all-link1">See All</Link>
        </div>
        <div className="product-row">
          <div className="product-item">
            <img src={`${process.env.PUBLIC_URL}/assets/image1.png`} alt="Product 1" />
            <div className="product-info">
              <span>The Forbidden City, China</span>
              <span className="price">₹20,000</span>
            </div>
            <p>Massive Place Complex, Home of emperor,Rich<br/>Architecture,History</p>
          </div>
          <div className="product-item">
            <img src={`${process.env.PUBLIC_URL}/assets/image2.png`} alt="Product 2" />
            <div className="product-info">
              <span>The Temple of Heaven in China</span>
              <span className="price">₹21,000</span>
            </div>
            <p>A Stunning example of Ming Dynasty Architecture<br/>and a place of great historical and spiritual<br/>importance</p>
          </div>
          <div className="product-item">
            <img src={`${process.env.PUBLIC_URL}/assets/image3.png`} alt="Product 3" />
            <div className="product-info">
              <span>The Temple of Heaven in India</span>
              <span className="price">₹32,222</span>
            </div>
            <p>An architecture marmarvel that provide beautiful<br/>views of Manhattan and Brooklyn</p>
          </div>
          <div className="product-item">
            <img src={`${process.env.PUBLIC_URL}/assets/image4.png`} alt="Product 4" />
            <div className="product-info">
              <span>The Temple of Heaven in Bhutan</span>
              <span className="price">₹12,345</span>
            </div>
            <p>The Burj Khalifa is the tallest building of the world<br/>shows the beautiful view of city</p>
          </div>
        </div>
      </div>
      <div className="train-image-container">
      <div className="trainOverlay">
        <div className="train-container">
          <p className="train-large-text">Buy Tickets in a Few Clicks</p>
          <p className="train-small-text">
            Buy tickets effortlessly in just a few clicks. Our easy process
            <br />
            ensures quick, hassle-free purchase for any event, anytime.
          </p>
          <div className="icon-text-section">
            <FaTrain className="icon" />
            <div className="text-container">
              <p className="icon-text-bold">Search train</p>
              <p className="icon-text">
                Find and book the train very quickly with real-time schedule and pricing.
              </p>
            </div>
          </div>
          <div className="gap"></div>
          <div className="icon-text-section">
            <FaHandPointer className="icon" />
            <div className="text-container">
              <p className="icon-text-bold">Select Seat</p>
              <p className="icon-text">
                Choose your preferred journey and select your seat for a comfortable trip.
              </p>
            </div>
          </div>
          <div className="gap"></div>
          <div className="icon-text-section">
            <FaWallet className="icon" />
            <div className="text-container">
              <p className="icon-text-bold">Instant Buy and Pay</p>
              <p className="icon-text">
                Find and book trains quickly with real-time schedule and pricing.
              </p>
            </div>
          </div>
          <div className="gap"></div>
          {/* <button className="explore-button" onClick={handleExploreClick}>Explore</button> */}
        </div>
      </div>
      <img src="assets/holidayTrain.png" alt="train" className="train-image" />
    </div>
    <div className="great-deals-section">
        <div className="section-header">
          <h2>Great Deals on Bus from New Delhi</h2>
          <Link to="/see-all" className="see-all-link">See All</Link>
        </div>
        <div className="destination-row">
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group1.png`} alt="Destination 1" />
          </div>
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group2.png`} alt="Destination 2" />
          </div>
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group3.png`} alt="Destination 3" />
          </div>
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group4.png`} alt="Destination 4" />
          </div>
          <div className="destination-item">
            <img src={`${process.env.PUBLIC_URL}/assets/group5.png`} alt="Destination 5" />
          </div>
        </div>
      </div>
      <div className="why-resia-section">
        <h2>Why Resia is the Smart Way to Book Flights</h2>
        <div className="why-resia-row">
          <div className="why-resia-box light-green">
            <img src={`${process.env.PUBLIC_URL}/assets/img3.png`} alt="Unmatched Price Guarantee" />
            <div className="why-resia-info">
              <h3>Unmatched Price Guarantee</h3>
              <p>Resia’s algorithm guarantees best<br/> prices, often surpassing <br/>competitors significantly.</p>
            </div>
          </div>
          <div className="why-resia-box light-grey">
            <img src={`${process.env.PUBLIC_URL}/assets/vector4.png`} alt="Airline Partnership" />
            <div className="why-resia-info">
              <h3>Airline Partnership</h3>
              <p>Resia partners with 200+ airlines,<br/> offering more flights and destinations.</p>
            </div>
          </div>
          <div className="why-resia-box light-pink">
            <img src={`${process.env.PUBLIC_URL}/assets/img5.png`} alt="Secure Transactions" />
            <div className="why-resia-info">
              <h3>Secure Transactions</h3>
              <p>Top-notch encryption ensures<br/> your personal and payment<br/> information remains secure.</p>
            </div>
          </div>
          <div className="why-resia-box light-green">
            <img src={`${process.env.PUBLIC_URL}/assets/table-hours-24.png`} alt="24/7 Dedicated Support" />
            <div className="why-resia-info">
              <h3>24/7 Dedicated Support</h3>
              <p>24/7 customer support resolves<br/> issues and answers questions<br/> promptly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainBooking;