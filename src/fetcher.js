import axios from "axios";

const baseUrl = "https://api.themoviedb.org";

export const fetchTopRatedMovies = async () => {
  const url = `${baseUrl}/3/movie/top_rated?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await axios.get(url);

  return res.data.results;
};

export const fetchPopularMovies = async () => {
  const url = `${baseUrl}/3/movie/popular?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await axios.get(url);

  return res.data.results;
};

export const fetchMoviesByKeyword = async (keyword, page = 1) => {
  const url = `${baseUrl}/3/search/movie?api_key=${process.env.REACT_APP_APIkey}&query=${keyword}&page=${page}`;

  const res = await axios.get(url);

  return res.data;
};

export const fetchMoviesUpcoming = async () => {
  const url = `${baseUrl}/3/movie/upcoming?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await axios.get(url);

  return res.data.results;
};

export const fetchTVShowsByKeyword = async (keyword, page = 1) => {
  const url = `${baseUrl}/3/search/movie?api_key=${process.env.REACT_APP_APIkey}&query=${keyword}&page=${page}`;

  const res = await axios.get(url);

  return res.data.results;
};

export const fetchTVShowsPopular = async () => {
  const url = `${baseUrl}/3/tv/popular?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await axios.get(url);

  return res.data.results;
};

export const fetchAllMoviesAndTvShows = async (keyword, page = 1) => {
  const url = `${baseUrl}/3/search/multi?api_key=${process.env.REACT_APP_APIkey}&query=${keyword}&page=${page}`;

  const res = await axios.get(url);

  return res.data.results;
};

export const fetchGenre = async () => {
  const url = `${baseUrl}/3/genre/movie/list?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await axios.get(url);

  return res.data.genres;
};

export const fetchLanguages = async () => {
  const url = `${baseUrl}/3/configuration/languages?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await axios.get(url);

  return res.data;
};
