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
    const parsed = queryString.parse(this.props.location.search);
    // console.log(parsed);
    const stringified = queryString.stringify(parsed);
    // console.log(stringified);
    // console.log(this.props.location.search);

    if (stringified) {
      const results = await api.fetchMoviesSearchparsed(stringified);
      this.setState({ movies: results, query: '' });
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
    e.preventDefault();
    this.movieSearch();
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
