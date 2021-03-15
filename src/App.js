import './App.css';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from './Components/Spinner';
import routes from './routes';
import AppBar from './Components/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "Home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "Movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetails-page" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "NotFound-page" */),
);

function App() {
  return (
    <div className="container">
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          {/* <Route component={NotFoundView} /> */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
