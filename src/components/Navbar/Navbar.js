import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import snoopy from '../../up.png'
import PropTypes from 'prop-types';

function Navbar({ filter, clear, random }) {
  return (
    <div className="nav-container">
      <img src={snoopy} className="snoopy" />
      <h1 className="nav-title">
        <Link
          className="nav-title"
          to="/home"
          onClick={() => {
            clear();
          }}>
          Wizzy Eats
        </Link>
      </h1>
      <button className="nav-button">
        <Link
          className="nav-button"
          to="/randomRestaurant"
          onClick={() => {
            random();
          }}>
          {' '}
          Random
        </Link>
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
      <button className="nav-button">
        {' '}
        <Link
          className="nav-button"
          to="/home"
          onClick={() => {
            clear();
          }}>
           All
        </Link>
      </button>
    </div>
  );
}

export default Navbar

Navbar.propTypes = {
  clear: PropTypes.func,
  filter: PropTypes.func,
  random: PropTypes.func
}