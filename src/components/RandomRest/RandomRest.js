import React from 'react'
import './RandomRest.css'

function RandomRest({ data }) {
  console.log(data.address)
  return (
    <section className= 'random-section'>
      <div className="random-rest-container">
        <div className="random-img-container">
          <img className="random-img" src={data.image} />
        </div>
        <p className='random-name'> {data.name} </p>
        <ul>
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default RandomRest
