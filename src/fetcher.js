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

export const fetchMoviesByKeyword = async keyword => {
  const url = `${baseUrl}/3/search/movie?api_key=${process.env.REACT_APP_APIkey}&query=${keyword}`;

  const res = await axios.get(url);

  return res.data;
};
