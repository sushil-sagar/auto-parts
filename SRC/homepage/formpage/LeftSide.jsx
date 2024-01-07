import React, { useState, useEffect } from 'react';
import './LeftSide.css';
import carImage from '../../assets/carImg.png'; // Import your car image

const LeftSide = () => {
  const animations = ['Upto 75% Off', 'Upto 2 Years Warranty', 'Nationwide Shipping'];
  const [typedText, setTypedText] = useState('');
  const [animationIndex, setAnimationIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (charIndex < animations[animationIndex].length) {
      timer = setTimeout(() => {
        setTypedText((prevText) => prevText + animations[animationIndex].charAt(charIndex));
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 50); // Typing speed (milliseconds)
    } else {
      setTimeout(() => {
        setTypedText('');
        setCharIndex(0);
        setAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
      }, 3000); // Wait for 3 seconds before starting the next animation
    }

    return () => clearTimeout(timer);
  }, [charIndex, animationIndex, animations]);

  return (
    <div className="left-side-container">
      <div className="left-content">
        <h1>Get Quality Used Auto Parts At An Affordable Price - Tested & Warrantied!!!</h1>
        <h2>Salvage auto parts offers</h2>
        <span className="text-on-image">{typedText}</span>
        {/* Add image after the span */}
        <img src={carImage} alt="Car" className="car-image" />
      </div>
    </div>
  );
};

export default LeftSide;
