import React from 'react';
import PropTypes from 'prop-types';
const MoviePreview = ({ title, url }) => {
  return (
    <div className={`card list`}>
      {url ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${url}`}
          className="card-img-top"
          alt={`${title}`}
          aria-hidden
        ></img>
      ) : (
        <img
          className={`card-img-top card-default`}
          src="https://cdn.dribbble.com/users/1936776/screenshots/4583365/untitled-1.png"
          alt="Not found image"
          aria-hidden
        ></img>
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

MoviePreview.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviePreview;
