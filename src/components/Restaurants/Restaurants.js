import React from 'react'
import Card from '../Card/Card'
import './Restaurants.css'

const Restaurants = (restaurants) => {
  console.log(restaurants);
  const restCards = restaurants.restaurants.map((rest) => {
    return <Card key={rest.id} name={rest.name} image={rest.image} hours={rest.hours} />;
  });

  return <div className='card-container'>{restCards}</div>;
};

export default Restaurants
