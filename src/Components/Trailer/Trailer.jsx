import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
const key = `bf08c0c07642287cbabe383c02818eb3`;
axios.defaults.baseURL = 'https://api.themoviedb.org';

// import api from '../../api';

class Trailer extends Component {
  state = {
    results: [],
  };
  async componentDidMount() {
    const { MovieId } = this.props.match.params;
    const response = await axios
      .get(`/3/movie/${MovieId}/videos?api_key=${key}&language=en-US`)
      .then(response => response.data.results);
    this.setState({ results: response });
  }

  render() {
    const { results } = this.state;

    return (
      <div className="d-flex justify-content-between mb-5">
        {results.slice(0, 2).map(item => (
          <iframe
            width="550"
            height="305"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    );
  }
}

export default Trailer;
