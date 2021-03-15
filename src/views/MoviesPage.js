import React, { Component } from 'react';
import MovieList from '../Components/MovieList';
import api from '../api';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  getValue = event => {
    this.setState({ query: event.currentTarget.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { query } = this.state;
    api.fetchMoviesSearch(query).then(results =>
      this.setState({
        movies: results,
        query: '',
      }),
    );
  };

  render() {
    const { history } = this.props;
    const { query, movies } = this.state;
    return (
      <>
        <form
          className="form-inline mt-4 mb-4 align-items-center justify-content-center "
          onSubmit={this.submitHandler}
        >
          <input
            value={query}
            onChange={this.getValue}
            className="form-control col-6"
            placeholder="Search movie"
          />

          <button
            type="submit"
            className="btn btn-dark"
            onClick={() =>
              history.push({
                search: `?query=${query}`,
              })
            }
          >
            Search
          </button>
        </form>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
