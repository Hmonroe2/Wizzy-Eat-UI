import React from 'react';
import Card from '../Card/Card';
import './Restaurants.css';

const Restaurants = ({ restaurants, favorites }) => {
  console.log(favorites)
 let data = restaurants
  if (favorites.length > 0) {
    data = favorites
  } else {
    favorites = []
    data = restaurants
  }

  const restCards = data.map((rest) => {
    return (
      <Card
        id={rest.id}
        key={rest.id}
        name={rest.name}
        image={rest.image}
        hours={rest.hours}
      />
    );
  });

  return <div className="card-container">{restCards}</div>;
};

export default Restaurants;
