import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ name, image, id, phone, address }) => {
  return (
    <Link to={`/${id}`} className="card-containers" aria-label={name}>
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
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
