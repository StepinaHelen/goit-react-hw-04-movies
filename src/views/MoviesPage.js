import React, { Component } from 'react';
import MovieList from '../Components/MovieList';
import api from '../api';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  async componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      api.fetchMoviesSearch(query).then(results =>
        this.setState({
          movies: results,
        }),
      );
    }
  }
  async componentDidUpdate(prevProps, _) {
    const parsed = queryString.parse(this.props.location.search);
    const stringified = queryString.stringify(parsed);

    const prevParsed = queryString.parse(prevProps.location.search);
    const prevStringified = queryString.stringify(prevParsed);

    if (stringified !== prevStringified) {
      const results = await api.fetchMoviesSearchparsed(stringified);
      this.setState({ movies: results });
    }
  }

  getValue = event => {
    this.setState({ query: event.currentTarget.value });
  };
  movieSearch = () => {
    const { query } = this.state;
    api.fetchMoviesSearch(query).then(results =>
      this.setState({
        movies: results,
        query: '',
      }),
    );
  };

  submitHandler = e => {
    const { history, location } = this.props;
    const { query } = this.state;
    e.preventDefault();
    this.setState({ query: '' });
    history.push({
      ...location,
      search: `?query=${query}`,
    });
  };

  render() {
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

          <button type="submit" className="btn btn-dark">
            Search
          </button>
        </form>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
