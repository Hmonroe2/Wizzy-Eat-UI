import React, { Component } from 'react';
import Details from '../Details/Details';
import Restaurants from '../Restaurants/Restaurants';
import { fetchData } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import RandomRest from '../RandomRest/RandomRest';
import PropTypes from 'prop-types';



class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      filtered: [],
      random: [], 
      error: ' ',
    };
  }

  filterRestaurants = (value) => {
    this.setState({ filtered: [] });
    const byType = this.state.restaurants.filter(
      (rest) => rest.location === value
    );
    return this.setState({ filtered: byType });
  };

  generateRandom = () => {
    this.setState({random: []})
    const randomRest = this.state.restaurants[Math.floor(Math.random() * 9)];
    return this.setState({random: randomRest});
  };

  componentDidMount = async () => {
    try {
      const result = await fetchData('');
      const data = await result.json();
      this.setState({ restaurants: data.restaurants });
    } catch (error) {
      this.setState({ error: `There was an error retrieving the data.` });
    }
  };
  clearFiltered = () => {
    this.setState({ filtered: [] });
  };

  render() {
    if (!this.state.restaurants) {
      return <p> {this.state.error}</p>;
    }
    return (
      <main className="App">
        <Navbar filter={this.filterRestaurants} clear={this.clearFiltered} random={ this.generateRandom} />
        <Switch>
          <Route exact path="/home">
            <Restaurants
              restaurants={this.state.restaurants}
              favorites={this.state.filtered}
            />
          </Route>
          <Route exact path="/randomRestaurant">
            <RandomRest data={ this.state.random } />
          </Route>
          <Route
            path="/:id"
            render={({ match }) => {
              return <Details id={match.params.id} name={match.params.name} />;
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;

App.propTypes = {
  restaurants: PropTypes.array,
  filtered: PropTypes.array,
  random: PropTypes.array
}