import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ name, image, hours, id , phone, address}) => {
  return (
    <Link to={`/${id}`} className="card-containers">
      <div className="card" key={id}>
        <div className="img-container">
          <img className="card-img" src={image} alt="Restaurant logo" />
        </div>
        <p className="description">Name </p>
        <p className="card-name">{name}</p>
        <p className="description">Phone </p>
        <p className="card-name">{phone}</p>
        <p className="description">Address </p>
        <p className="card-name">{address}</p>
      </div>
    </Link>
  );
}

export default Card
