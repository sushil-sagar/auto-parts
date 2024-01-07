// CardsPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import bmw from '../../assets/bmw.png';
import kia from '../../assets/kia.png';
import Audi from '../../assets/audi.png';
import Acura from '../../assets/acura.png';
import benz from '../../assets/benz.png';
import mercury from '../../assets/mercury.png';
import nissan from '../../assets/Nissan.png';
import mitsubishi from '../../assets/Mitsubishi.png';
import pontiac from '../../assets/Pontiac.png';
import scion from '../../assets/Scion.png';
import mazda from '../../assets/mazda.png';
import linclon from '../../assets/kia.png';
import lexus from '../../assets/lexas.png';
import jeep from '../../assets/jeep.png';
import jaguar from '../../assets/jaguar.png';
import infiniti from '../../assets/infinity.png';
import hyundai from '../../assets/hondai.png';
import honda from '../../assets/hond.png';
import ford from '../../assets/ford.png';
import dodge from '../../assets/dodge.png';
import chrysler from '../../assets/chrysler.png';
import chevrolet from '../../assets/chevrolet.png';
import cadillac from '../../assets/codilac.png';
import buick from '../../assets/buick.png';
import subaru from '../../assets/Subaru.png';
import suzuki from '../../assets/Suzuki.png';
import toyota from '../../assets/Toyota.png';
import volkswagen from '../../assets/Volkswagen.png';
import volvo from '../../assets/volvo.png';

const CardsPage = () => {

 
  const images = [
    Acura,
    Audi,
    benz,
    bmw,
    buick,
    cadillac,
    chevrolet,
    chrysler,
    dodge,
    ford,
    honda,
    hyundai,
    infiniti,
    jaguar,
    jeep,
    kia,
    lexus,
    linclon,
    mazda,
    mercury,
    mitsubishi,
    nissan,
    pontiac,
    scion,
    subaru,
    suzuki,
    toyota,
    volkswagen,
    volvo,
  ];

  const titles = [
    'ACURA', 'AUDI', 'BENZ', 'B M W ','BUICK','CADILLAC','CHEVROLET', 'CHRYSLER', 'DODGE', 'FORD','HONDA','HYUNDAI','INFINITI','JAGUAR','JEEP',
    'K I A', 'LEXUS', 'LINCLON','MAZDA','MERCURY','MITSUBISHI','NISSAN','PONTIAC','SCION','SUBARU','SUZUKI','TOYOTA','VOLKSWAGEN','VOLVO',
    

    // ... add titles for all 24 cards
  ];

  const [showAllImages, setShowAllImages] = useState(false);

  const toggleImages = () => {
    setShowAllImages(!showAllImages);
  };

  const imagesToDisplay = showAllImages ? images : images.slice(0, 8); // Show all images if showAllImages is true, else show only 8 images

  const viewButton = (
    <Button variant="primary" onClick={toggleImages}>
      {showAllImages ? 'Hide Images' : 'View All Images'}
    </Button>
  );


  // Inline CSS styles
  const cardStyle = {
    width: '225px',
    height: '175px',
    //border: '1px solid #ccc',
    margin: '5px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White color with opacity
  };

  const titleStyle = {
    color: '#1A237E',
    fontWeight: 'bold',
    fontSize:'24px'
  };

  const imageStyle = {
    width: '100px', // Adjust image width
    height: '100px', // Adjust image height
    marginTop: '20px', // Adjust margin-top for the image
  };
  
  const headingStyle = {
    color: '#1A237E', // Set the color of the heading to white
  };

  return (
    <div className="page-container">
      <h1 style={headingStyle}>What Vehicle Are You Looking For?</h1>
      <Container>
        <Row xs={1} md={4} className="justify-content-center">
          {imagesToDisplay.map((image, index) => (
            <Col key={index}>
              <div style={cardStyle} className="card1">
                <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
                <p style={titleStyle}>{titles[index]}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          <Col>{viewButton}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardsPage;