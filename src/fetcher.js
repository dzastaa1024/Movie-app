import axios from "axios";

const baseUrl = "https://api.themoviedb.org";

export const fetchMovies = async keyword => {
  const url = `${baseUrl}/3/search/movie?api_key=${process.env.REACT_APP_APIkey}&query=${keyword}`;

  const res = await axios.get(url);
  console.log(res);
  return res;
};

export const fetchTopRatedMovies = async () => {
  const url = `${baseUrl}/3/movie/top_rated?api_key=${process.env.REACT_APP_APIkey}&page=20`;

  const res = await axios.get(url);
  console.log(res);
  return res;
};
