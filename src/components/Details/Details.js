
import React, { Component } from 'react'
import { fetchData } from '../../apiCalls';
import './Details.css'
import PropTypes from 'prop-types';


class Details extends Component {
  constructor(props) {
    super();
    this.state = {
      restaurant: [],
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
    const rest = this.state.restaurant
    return (
      <section className="detail-section">
        <div className="detail-container">
          <div className="detail-img-container">
            <img className="detail-img" src={rest.image} alt={rest.name} />
          </div>
          <p className="description">Name </p>
          <p className="card-name">{rest.name}</p>{' '}
          <p className="description">Address </p>
          <p className="card-name">{rest.address}</p>{' '}
          <p className="description">Phone </p>
          <p className="card-name">{rest.phone}</p>{' '}
          <p className="description">Hours </p>
          <p className="card-name">{rest.hours}</p>
          <p className="description" href={rest.website}>Website </p>
        </div>
      </section>
    );
  }
}

export default Details

Details.propTypes = {
  restaurant: PropTypes.array,
  id: PropTypes.string,
  props: PropTypes.string
}