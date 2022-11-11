import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar({ generateRandom }) {
  // console.log(generateRandom());
  
  return (
    <div className="nav-container">
      <h1 className="nav-title">
        <Link to='/home'>Wizzy Eats</Link>
      </h1>
      <button className="nav-button">
        <Link to="/randomRestaurant"> Random</Link>
      </button>
      <button className="nav-button"> Winter Park </button>
      <button className="nav-button"> Denver </button>
    </div>
  );
}

export default Navbar
