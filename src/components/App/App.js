import React, { Component } from 'react';
import logo from '../../logo.svg';
import Card from '../Card/Card';
import Details from '../Details/Details';
import Restaurants from '../Restaurants/Restaurants';
// import Navbar from '../NavBar/Navbar';
import { fetchData } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from '../Navbar/Navbar';
import RandomRest from '../RandomRest/RandomRest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: '',
      error: ' '
    };
  }
  generateRandom = () => {
    const randomRest = this.state.restaurants[Math.floor(Math.random() * 9)]
    console.log('i am random+++++++', randomRest)
    return randomRest
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
    // console.log(this.generateRandom());
    if (!this.state.restaurants) {
      return <p> { this.state.error }</p>
    }
    return (
      <div className="App">
        <Navbar generateRandom />
        <Switch>
          <Route exact path="/home">
            <Restaurants restaurants={this.state.restaurants} />
          </Route>
          <Route exact path='/randomRestaurant'>
            <RandomRest data={this.generateRandom()} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
