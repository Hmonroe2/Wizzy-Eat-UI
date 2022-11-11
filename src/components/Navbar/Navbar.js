import React from 'react'
import './Navbar.css'

function Navbar({ generateRandom }) {
  // console.log(generateRandom());
  
  return (
    <div className="nav-container">
      <h1 className="nav-title"> Wizzy Eats</h1>
      <button className="nav-button">
        Generate Random
      </button>
      <button className="nav-button"> Winter Park </button>
      <button className="nav-button"> Denver </button>
    </div>
  );
}

export default Navbar
