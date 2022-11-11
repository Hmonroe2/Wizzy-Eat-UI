import React, { useEffect } from 'react'
import './RandomRest.css'

function RandomRest({  data }) {

  return (
    <section className= 'random-section'>
      {!data.length && <p> No random</p>}
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
