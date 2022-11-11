import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ name, image, hours, id }) => {
  console.log(id)
  return (
    <Link to={`/${id}`}  className="card-containers">
      <div className="card" key={id}>
        <div className="img-container">
          <img className="card-img" src={image} alt="Restaurant logo" />
        </div>
        <p className="description">Name </p>
        <p className="card.name">{name}</p>
      </div>
    </Link>
  );
}

export default Card
