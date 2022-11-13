import React, { Component } from 'react';
import { fetchData } from '../../apiCalls';
import './Details.css';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Error from '../Error/Error';
import giphy from '../../giphy.gif'

class Details extends Component {
  constructor(props) {
    super();
    this.state = {
      restaurant: [],
      id: props.id,
      props: props,
      error: [],
    };
  }
  componentDidMount = async () => {
    try {
      this.setState({ loading: true });
      const result = await fetchData(`${this.state.id}`);
      const data = await result.json();
      this.setState({ restaurant: data.restaurant, loading: false });
    } catch (error) {
      this.setState({ error: `There was an error retrieving the data.` });
    }
  };

  render() {
    if (this.state.error.length) {
      return <Error />;
    }

    const rest = this.state.restaurant;

    return (
      <section className="detail-section">
        <Navbar
          filter={this.props.filter}
          clear={this.state.props.clear}
          random={this.state.props.random}
        />
        {this.state.loading === true && (
          <div className="loading-gif">
            <img src={giphy} alt="old man and dog" />
            <p> Loading </p>
          </div>
        )}
        <div className="detail-container">
          <div className="detail-img-container">
            <img className="detail-img" src={rest.image} alt={rest.name} />
          </div>
          <p className="description">Name </p>
          <p className="card-name">{rest.name}</p>{' '}
          <p className="description">Address </p>
          <p className="card-name">{rest.address}</p>{' '}
          <p className="description">Phone </p>
          <p className="card-name">{rest.phone}</p>
          <p className="description" href={rest.website}>
            Website{' '}
          </p>
        </div>
      </section>
    );
  }
}

export default Details;

Details.propTypes = {
  restaurant: PropTypes.array,
  id: PropTypes.string,
  props: PropTypes.string,
  error: PropTypes.array,
};
