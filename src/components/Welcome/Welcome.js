import React from 'react'
import { NavLink } from 'react-router-dom'
import Bird from '../../bird.png'
import './Welcome.css'

function Welcome() {
  return (
    <div className="welcome-container">
      <p className="welcome-description">Welcome to </p>
      <p className='welcome-title'> Wizzy Eats</p>
      <p className="welcome-description"> "An app for the indecisive "</p>
      <NavLink to="/home" className="click-me">
        Click Me to get started{' '}
      </NavLink>
      <img
        className="welcome-img"
        src={Bird}
        alt="Boy riding Bird from up"></img>
    </div>
  );
}

export default Welcome
