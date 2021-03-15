import axios from 'axios';
const key = `bf08c0c07642287cbabe383c02818eb3`;
axios.defaults.baseURL = 'https://api.themoviedb.org';

const fetchCast = id => {
  return axios
    .get(`/3/movie/${id}/credits?api_key=${key}&language=en-US`)
    .then(response => response.data.cast);
};

const fetchReviews = id => {
  return axios
    .get(`/3/movie/${id}/reviews?api_key=${key}&language=en-US`)
    .then(response => response.data.results);
};

const fetchMoviesDetails = id => {
  return axios
    .get(`/3/movie/${id}?api_key=${key}&language=en-US`)
    .then(response => response.data);
};

const fetchMovies = () => {
  return axios
    .get(`/3/trending/movie/day?api_key=${key}`)
    .then(response => response.data.results);
};
const fetchMoviesSearch = value => {
  return axios
    .get(
      `/3/search/movie?api_key=${key}&query=${value}&language=en-US&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};
const fetchMoviesSearchparsed = value => {
  return axios
    .get(
      `/3/search/movie?api_key=${key}&${value}&language=en-US&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};
const api = {
  fetchCast,
  fetchReviews,
  fetchMoviesDetails,
  fetchMovies,
  fetchMoviesSearch,
  fetchMoviesSearchparsed,
};
export default api;
