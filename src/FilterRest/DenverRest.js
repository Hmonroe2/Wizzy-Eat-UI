import React from 'react'
import Card from '../components/Card/Card';

function FilterRest(data) {
  console.log('filter data', data)
  const denverRestaurants = data.filter((rest) => rest.location ==='Denver')

  const restaurant = denverRestaurants.map((rest) => {
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
  })
  
  return (
    <div>
      {restaurant}
    </div>
  )
}

export default FilterRest
