import React from 'react'
import './FilteredRest.css'
import Card from '../Card/Card'

function FilteredRest(data) {
  console.log('this is filtered :' , data.restaurant)

  const restCards = data.restaurant.map((rest) => {
   
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
  return (
    <div>
      {restCards}
    </div>
  )
}

export default FilteredRest
