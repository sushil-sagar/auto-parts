import React, { useRef, useEffect } from 'react';
import { Card, Col, Container } from 'react-bootstrap';

// Import your brand logo images
import brandLogo1 from '../assets/acura.png'; // Replace with your image paths
import brandLogo2 from '../assets/audi.png';
import brandlogo3 from "../assets/benz.png";
import brandLogo4 from '../assets/bmw.png';
import brandLogo5 from '../assets/buick.png';
import brandLogo6 from '../assets/chevrolet.png';
import brandLogo7 from '../assets/chrysler.png';
import brandLogo8 from '../assets/codilac.png';
import brandLogo9 from '../assets/dodge.png';
import brandLogo10 from '../assets/ford.png';
import brandLogo11 from "../assets/hond.png";
import brandLogo12 from "../assets/hondai.png";
import brandLogo13 from "../assets/infinity.png";
import brandLogo14 from "../assets/jaguar.png";
import brandLogo15 from "../assets/jeep.png";
import brandLogo16 from "../assets/kia.png";
import brandLogo17 from "../assets/lexas.png";
import brandLogo18 from "../assets/lincoln.png";
import brandLogo19 from "../assets/mazda.png";
import brandLogo20 from "../assets/mercury.png";
import brandLogo21 from "../assets/Mitsubishi.png";
import brandLogo22 from "../assets/Nissan.png";
import brandLogo23 from "../assets/Pontiac.png";
import brandLogo24 from "../assets/Scion.png";
import brandLogo25 from "../assets/Subaru.png";
import brandLogo26 from "../assets/Suzuki.png";
import brandLogo27 from "../assets/Toyota.png";
import brandLogo28 from "../assets/Volkswagen.png";
import brandLogo29 from "../assets/volvo.png";
import brandLogo30 from "../assets/jaguar.png";


const images = [brandLogo1, brandLogo2, brandlogo3, brandLogo4, brandLogo5, brandLogo6, brandLogo7, brandLogo8, brandLogo9, brandLogo10,brandLogo11,brandLogo12,brandLogo13,brandLogo14, brandLogo15,brandLogo16, brandLogo17, brandLogo18,brandLogo19,brandLogo20,brandLogo21,brandLogo22,brandLogo23,brandLogo24,brandLogo25,brandLogo26,brandLogo27,brandLogo28,brandLogo29,brandLogo30]; 
    
const CardCarousels = () => {
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
    return (
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
              width: '150px',
              height: '120px',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
           
              <div
                style={{
                  backgroundColor: 'white', // Grey background for title
                  width: '80%',
                  height: '80%',
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
                  }}
                />
                
              </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default CardCarousels;
  