// Page.js

import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/bg1.jpg'; // Replace with your background image path
import './Page.css'; // Create a CSS file for styling
import '../Images/images.css';

const Page = () => {
  return (
    <div className="page-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="content">
      <h1 className="welcome-text" style={{ color: '#ffffff' }}>WELCOME TO OUR STORE ! !</h1>
        <p>
          Quality Auto Salvage is dedicated to providing the highest quality recycled and used auto parts in the United States and Canada. We cooperate with the best junkyards and salvage yards around the country, to provide our customers with only top-notch services. We also provide unparalleled customer service, on-time delivery, and treat our clients with kindness, honesty, and respect.
        </p>
        <p>
          Repairing your vehicle can be a total bummer. It can be so daunting and confusing—not to mention expensive. With Quality Auto Salvage, you can find the best-used parts for your vehicle at the lowest prices. If you're looking for the best auto parts at the lowest prices, you've come to the right place.
        </p>
        <p>
          Quality Auto Salvage offers a highly competent service to its purchasers, with excellent offers but with the best excellency and a large variety of inventory. We pride ourselves on providing our customers with a quality part as described with the highest level of customer service.
        </p>
        <div className="center-button">
          {/* Link to the home page */}
          <Link to="/about">
            <button className="read-more-button">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
