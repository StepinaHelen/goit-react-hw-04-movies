import React, { Component } from 'react';
import MovieList from '../Components/MovieList';
import api from '../api';
class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const results = await api.fetchMovies();
    this.setState({ movies: results });
  }

  render() {
    // console.log(this.props.match.url);
    return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage;
