import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul>
        <li className="navbar-brand">
          <NavLink
            exact
            to={routes.home}
            className="current"
            id="home"
            activeClassName="selected"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-brand">
          <NavLink
            to={routes.movies}
            className="current"
            activeClassName="selected"
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <div className={styles.scrollup}>
        <a href="#home">
          <svg
            aria-hidden="true"
            width="55px"
            height="55px"
            data-prefix="fas"
            data-icon="arrow-circle-up"
            className="svg-inline--fa fa-arrow-circle-up fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"
            ></path>
          </svg>
        </a>
      </div>
    </nav>
  );
};
export default Navigation;
