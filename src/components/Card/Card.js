import React from 'react'
import './Card.css'

const Card = ({name, image, hours}) => {
  return (
    <div className="card">
      <img className='card-img'src={image} alt='Restaurant logo' /> 
      <p>{hours}</p>
    </div>
  )
}

export default Card
