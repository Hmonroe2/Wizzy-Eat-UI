import React, { Component } from 'react';
import logo from '../../logo.svg';
import Card from '../Card/Card';
import Details from '../Details/Details';
import Restaurants from '../Restaurants/Restaurants';
import { fetchData } from '../../apiCalls';
// import { Route, Switch  } from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: '',
    };
  }

  componentDidMount = async () => {
    try {
      const result = await fetchData();
      const data = await result.json();
      this.setState({ restaurants: data.restaurants });
    } catch (error) {
      this.setState({ error: `There was an error retrieving the data.` });
    }
  };

  render() {
    console.log(this.state.restaurants);
    if (!this.state.restaurants) {
      return <p> there was an error</p>
    }
    return (
      <div className="App">
        <h1 className='title'>Wizzy Eats</h1>
        <Restaurants restaurants={this.state.restaurants} />
        {/* <Details /> */}
        {/* <Card /> */}
      </div>
    );
  }
}

export default App;
