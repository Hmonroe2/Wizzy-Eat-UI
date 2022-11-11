import React from 'react'
import { NavLink } from 'react-router-dom';
import './Card.css'

const Card = ({ name, image, hours, id }) => {
  console.log(id)
  return (
    <NavLink to={`/${id}`} className="card">
      <div className="card" key={id}>
        <div className="img-container">
          <img className="card-img" src={image} alt="Restaurant logo" />
        </div>
        <p className="description">Name </p>
        <p className="card.name">{name}</p>
      </div>
    </NavLink>
  );
}

export default Card
