import React, { Component } from 'react';
import Details from '../Details/Details';
import Restaurants from '../Restaurants/Restaurants';
import { fetchData } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import RandomRest from '../RandomRest/RandomRest';
import FilteredRest from '../FilteredRest/FilteredRest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: '',
      filtered: [],
      error: ' ',
    };
  }

  filterRestaurants = (value) => {
    this.setState({ filtered: '' });
    console.log(value);
    const byType = this.state.restaurants.filter(
      (rest) => rest.location === value
    );
    return this.setState({ filtered: byType });
  };

  generateRandom = () => {
    const randomRest = this.state.restaurants[Math.floor(Math.random() * 9)];
    return randomRest;
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
    this.setState({ filtered: [] })
  }

  render() {
    console.log('this.state.favorites::',this.state.filtered);
    if (!this.state.restaurants) {
      return <p> {this.state.error}</p>;
    }
    return (
      <div className="App">
        <Navbar filter={this.filterRestaurants} clear={this.clearFiltered} />
        <Switch>
          <Route exact path="/home">
            <Restaurants
              restaurants={this.state.restaurants}
              favorites={this.state.filtered}
            />
            {/* {!this.state.filtered && (
              <Restaurants restaurants={this.state.filtered} />
            )} */}
          </Route>
          <Route exact path="/randomRestaurant">
            <RandomRest data={this.generateRandom()} />
          </Route>
          <Route
            path="/:id"
            render={({ match }) => {
              return <Details id={match.params.id} name={match.params.name} />;
            }}
          />
          <Route exact path="/denver">
            {/* <FilteredRest data={this.state.filtered} />  */}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
