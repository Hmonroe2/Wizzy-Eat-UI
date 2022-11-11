import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import snoopy from '../../up.png'

function Navbar({ filter, clear}) {
  // console.log(generateRandom());
  console.log(clear)
  
  return (
    <div className="nav-container">
      <img src={snoopy} className="snoopy" />
      <h1 className="nav-title">
        <Link className="nav-title" to="/home" onClick={() => { clear()}}> 
          Wizzy Eats
        </Link>
      </h1>
      <button className="nav-button">
        <Link to="/randomRestaurant"> Random</Link>
      </button>
      <button
        value="Winter Park"
        onClick={(event) => {
          filter(event.target.value);
        }}
        className="nav-button">
        Winter Park
      </button>
      <button
        value="Denver"
        onClick={(event) => {
          filter(event.target.value);
        }}
        className="nav-button">
        Denver
      </button>
    </div>
  );
}

export default Navbar
