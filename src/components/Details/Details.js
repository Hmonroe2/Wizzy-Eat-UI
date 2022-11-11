import React, { Component } from 'react'
import { fetchData } from '../../apiCalls';
import'./Details.css'

class Details extends Component {
  constructor(props) {
    super();
    this.state = {
      restaurant: ' ',
      id: props.id,
    };
  }
  componentDidMount = async () => {
    try {
      const result = await fetchData(`${this.state.id}`);
      const data = await result.json();
      this.setState({ restaurant: data.restaurant });
    } catch (error) {
      this.setState({ error: `There was an error retrieving the data.` });
    }
  };

  render() {
    console.log(this.state.restaurant)
    return (
      <div>
        <img src={ this.state.restaurant.image} />
        <p>I am Details</p>
      </div>
    );
  }
}

export default Details
