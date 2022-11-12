import React, { useEffect } from 'react';
import './RandomRest.css';
import ballon from '../../ballon.png';

function RandomRest({ data }) {
  return (
    <section className="random-section">
      {data.length === 0 && <p> No random please push the random button!</p>}
      <div className="random-rest-container">
        <div className="random-img-container">
          <img className="random-img" src={data.image} />
        </div>
        <p className="random-name">{data.name} </p>
        <img src={ballon} className="ballon" />
      </div>
    </section>
  );
}

export default RandomRest;
