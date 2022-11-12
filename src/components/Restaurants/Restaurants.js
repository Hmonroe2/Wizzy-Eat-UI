import React from 'react';
import Card from '../Card/Card';
import './Restaurants.css';
import PropTypes from 'prop-types';

const Restaurants = ({ restaurants, filtered }) => {
  let data = restaurants;
  if (filtered.length) {
    data = filtered;
  } else {
    filtered = [];
    data = restaurants;
  }

  const restCards = data.map((rest) => {
    return (
      <Card
        id={rest.id}
        key={rest.id}
        name={rest.name}
        image={rest.image}
        hours={rest.hours}
        phone={rest.phone}
        address={rest.address}
      />
    );
  });

  return <div className="card-container">{restCards}</div>;
};

export default Restaurants;

Restaurants.propTypes = {
  restaurants: PropTypes.array,
  favorites: PropTypes.array,
};
