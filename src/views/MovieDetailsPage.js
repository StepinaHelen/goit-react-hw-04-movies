import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Components/Cast';
import Reviews from '../Components/Reviews';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import routes from '../../src/routes';
import api from '../api';

class MoviesDetailsView extends Component {
  state = {
    id: '',
    title: '',
    poster_path: '',
    release_date: '',
    genres: [],
    overview: '',
    popularity: '',
    vote_average: '',
    backdrop_path: '',
  };
  async componentDidMount() {
    const { MovieId } = this.props.match.params;
    const data = await api.fetchMoviesDetails(MovieId);
    this.setState({ ...data });
  }
  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }
    history.push(routes.home);
    // альтернатива:
    // history.push(location?.state?.from || routes.home);
  };
  render() {
    const {
      title,
      genres,
      overview,
      vote_average,
      release_date,
      poster_path,
      id,
    } = this.state;

    return (
      <div>
        <button
          className="btn btn-dark mt-4"
          type="button"
          onClick={this.handleGoBack}
        >
          <ArrowBackIcon />
          Go back
        </button>

        <div className="card mb-3">
          <div className="row no-gutters">
            {poster_path && (
              <img
                className="col-md-6  mr-4 col-lg-4"
                src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                alt={title}
              ></img>
            )}

            <div className="col-lg-7 col-md-5 pr-2">
              <h2>
                {title} ({release_date.slice(0, 4)})
              </h2>
              <p>User Score:{`${vote_average * 10}%`} </p>

              <h3>Overview</h3>
              <p> {overview} </p>
              <h3>Genres</h3>
              <ul>
                {genres.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <hr />
              <div>
                <h4>Additional information</h4>
                <NavLink to={`/movies/${id}/cast`}>
                  <p className="font-italic">
                    <u>Cast</u>
                  </p>
                </NavLink>
                <NavLink to={`/movies/${id}/reviews`}>
                  <p className="font-italic">
                    <u>Reviews</u>
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <Route
          path={`${this.props.match.path}/cast`}
          // path="/movies/:MovieId/cast"
          render={props => <Cast {...props} />}
        />
        <Route
          path={`${this.props.match.path}/reviews`}
          render={props => <Reviews {...props} />}
        />
      </div>
    );
  }
}

export default MoviesDetailsView;
