import React, { useEffect, useRef } from 'react';

import sampleImage1 from '../../assets/1.png';
import sampleImage2 from '../../assets/2.png';
import sampleImage8 from '../../assets/8.png';
import sampleImage4 from '../../assets/4.png';
import sampleImage5 from '../../assets/5.png';
import sampleImage6 from '../../assets/6.png';
import sampleImage7 from '../../assets/7.png';
import sampleImage3 from '../../assets/hollanger.jpg';
import Axle from "../../assets/Axle.webp";
const images = [
  sampleImage1,
  sampleImage2,
  sampleImage8,
  sampleImage4,
  sampleImage5,
  sampleImage6,
  sampleImage7,
  sampleImage3,
  Axle,
];

const titles = [
  "Engine Assembly",
  "Transmission",
  "Axle Assembly",
  "Transfer case",
  "Anti lock brake system",
  "Intake Manifold",
  "Exhaust Manifold",
  'Hollander 590 & 591',
  'axle shaft'
];

const BasicCarousel = () => {
  const listRef = useRef(null);

  useEffect(() => {
    let interval;
    
    const startScrolling = () => {
      interval = setInterval(() => {
        if (listRef.current) {
          listRef.current.scrollLeft -= 250; // Scroll backward to show the last item
          const scrollRightLimit = listRef.current.scrollWidth - listRef.current.clientWidth;
          
          if (listRef.current.scrollLeft === 0) {
            listRef.current.scrollLeft = scrollRightLimit; // Reset to the end
          } else if (listRef.current.scrollLeft === scrollRightLimit) {
            listRef.current.scrollLeft = 0; // Reset to the start
          }
        }
      }, 2000); // Change interval as needed (currently set to 2 seconds)
    };

    startScrolling(); // Call the function initially

    // Clear the interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Render the carousel content
  return (<>
<h1 style={{ textAlign: 'center', color:'#000', marginTop:'10px' }}>Most Popular Products</h1>
    <ul
      ref={listRef}
      style={{
        display: 'flex',
        overflow: 'hidden',
        scrollSnapType: 'x mandatory',
      }}
    >
      {images.map((image, index) => (
        <li
          key={index}
          style={{
            backgroundColor: 'white',
            width: '250px',
            height: '250px',
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                backgroundColor: 'white', // Grey background for title
                width: '90%',
                height: '90%',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px'
              }}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  width: '80%', // Adjust image width
                  height: 'auto', // Maintain aspect ratio
                  borderRadius: '8px'
                }}
              />
              <h4
                style={{
                  color: 'black', // White color for title text
                  margin: '10px 0 0', // Adjust top margin for the title
                  textAlign: 'center'
                }}
              >
                {titles[index]}
              </h4>
            </div>
          </button>
        </li>
      ))}
    </ul>
    </>
  );
};

export default BasicCarousel;
  