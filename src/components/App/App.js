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
import giphy from '../../giphy.gif'

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
  
  componentDidMount = async () => {
    try {
      this.setState({ loading:true })
      const result = await fetchData('');
      const data = await result.json();
      this.setState({ restaurants: data.restaurants, loading: false });
    } catch (error) {
      this.setState({ error: `There was an error retrieving the data.`});
    }
  };

  filterRestaurants = (value) => {
    this.setState({ filtered: [] });
    const byType = this.state.restaurants.filter(
      (rest) => rest.location === value
    );
    return this.setState({ filtered: byType });
  };

  generateRandom = () => {
    this.setState({ random: [] });
    const randomRest =
      this.state.restaurants[
        Math.floor(Math.random() * this.state.restaurants.length)
      ];
    return this.setState({ random: randomRest });
  };


  clearFiltered = () => {
    this.setState({ filtered: [] });
  };

  render() {
    if (this.state.error.length) {
      return (
        <div>
          <Error />
        </div>
      );
    }
    return (
      <main className="App">
        <Switch>
          {/* {this.state.loading === false && (
            <div className="loading-gif">
              <img src={giphy} alt="old man and dog" />
            </div>
          )} */}
          <Route exact path="/" component={Welcome} />
          {this.state.loading === true && (
            <div className="loading-gif">
              <img src={giphy} alt="old man and dog" />
              <p> Loading </p>
            </div>
          )}
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
        </Switch>
      </main>
    );
  }
}

export default App;

App.propTypes = {
  restaurants: PropTypes.array,
  filtered: PropTypes.array,
  random: PropTypes.array,
};
