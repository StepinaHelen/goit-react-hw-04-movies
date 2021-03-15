import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul>
        <li className="navbar-brand">
          <NavLink
            exact
            to={routes.home}
            className="current"
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
    </nav>
  );
};
export default Navigation;
