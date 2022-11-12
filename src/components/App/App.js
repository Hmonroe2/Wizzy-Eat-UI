import React, { Component } from 'react';
import Details from '../Details/Details';
import Restaurants from '../Restaurants/Restaurants';
import { fetchData } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import RandomRest from '../RandomRest/RandomRest';
import PropTypes from 'prop-types';
import Welcome from '../Welcome/Welcome';
import Error from '../Error/Error';
import DenverRest from '../../FilterRest/DenverRest';


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      filtered: [],
      random: [], 
      error: [],
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
      return <div> <Error error={ this.state.error } /> </div>;
    }
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home">
            <Navbar
              filter={this.filterRestaurants}
              clear={this.clearFiltered}
              random={this.generateRandom}
            />
            <Restaurants
              restaurants={this.state.restaurants}
              filtered={this.state.filtered}
            />
          </Route>
          <Route exact path="/randomRestaurant">
            <Navbar
              filter={this.filterRestaurants}
              clear={this.clearFiltered}
              random={this.generateRandom}
            />
            <RandomRest data={this.state.random} />
          </Route>
          <Route
            path="/:id"
            render={({ match }) => {
              return (
                <Details
                  id={match.params.id}
                  name={match.params.name}
                  filter={this.filterRestaurants}
                  clear={this.clearFiltered}
                  random={this.generateRandom}
                />
              );
            }}
          />
          {/* <Route path="/denver" >
            <FilterRest data={this.state.restaurants} />
          </Route> */}
          {/* <Route exact path="/denver" >
            <DenverRest data={this.state.restaurants} /> 
          </Route> */}
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