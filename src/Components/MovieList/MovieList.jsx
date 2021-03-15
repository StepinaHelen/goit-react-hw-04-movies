import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
const MovieList = ({ movies, location }) => {
  return (
    <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {movies.map(movie => (
        <li key={movie.id} className="col mb-4">
          <Link
            to={{
              pathname: `/movies/${movie.id}`,

              state: {
                from: location,
              },
            }}
          >
            <MoviePreview
              url={movie.backdrop_path}
              title={movie.original_title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default withRouter(MovieList);
