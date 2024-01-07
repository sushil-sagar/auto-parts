import React from 'react';
import './Card.css'; // Create a CSS file for Card styling

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
