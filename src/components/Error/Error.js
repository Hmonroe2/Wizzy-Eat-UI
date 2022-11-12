import React from 'react'
import './Error.css'
import bird from '../../bird.png'
import { NavLink } from 'react-router-dom'

function Error({error}) {
  return (
    <div>
      <img className='error-img' src={bird} />    
      <p >There Was an Error retrieving data. Please return to <NavLink to='/home'>HOME</NavLink></p>
    </div>
  )
}

export default Error
