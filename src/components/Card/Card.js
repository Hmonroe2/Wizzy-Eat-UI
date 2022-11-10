import React from 'react'
import './Card.css'

const Card = ({name, image, hours}) => {
  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img" src={image} alt="Restaurant logo" />
      </div>
      <p className="description">Name </p>
      <p className="card.name">{name}</p>
      
    </div>
  );
}

export default Card
