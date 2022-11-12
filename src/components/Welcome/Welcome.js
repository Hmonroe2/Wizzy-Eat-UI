import React from 'react'
import { NavLink } from 'react-router-dom'
import Bird from '../../bird.png'
import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome-container'>
      <NavLink className='welcome-title'to="/home" > Wizzy Eats </NavLink>
      <img className='welcome-img'src={Bird} alt='Boy riding Bird from up'></img>
    </div>
  )
}

export default Welcome
