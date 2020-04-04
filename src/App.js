import React from "react";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import MovieList from "./components/MovieList";
import SidebarFilters from "./components/SidebarFilters";
import SidebarNews from "./components/SidebarNews";
import GlobalStyle from "./GlobalStyle";
import * as fetcher from "./fetcher";

export default class App extends React.Component {
  state = {
    topRatedMovies: [],
    popularMovies: [],
    keyword: "",
    allMovies: [],
    upComingMovies: []
  };

  async componentDidMount() {
    const resRated = await fetcher.fetchTopRatedMovies();
    const resPopular = await fetcher.fetchPopularMovies();
    const resUpComing = await fetcher.fetchMoviesUpcoming();

    this.setState({
      topRatedMovies: resRated,
      popularMovies: resPopular,
      upComingMovies: resUpComing
    });
  }

  async searchMovies(keyword) {
    const resAllMovies = await fetcher.fetchMoviesByKeyword(keyword);
    console.log(resAllMovies);
    this.setState({
      allMovies: resAllMovies.results
    });
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    this.searchMovies(value);
  };

  render() {
    const {
      topRatedMovies,
      popularMovies,
      keyword,
      allMovies,
      upComingMovies
    } = this.state;

    return (
      <>
        <GlobalStyle />
        <Topbar handleChange={this.handleChange} keyword={keyword} />
        <SidebarFilters />
        <MovieList
          topRatedMovies={topRatedMovies}
          popularMovies={popularMovies}
          allMovies={allMovies}
        />
        <SidebarNews upComingMovies={upComingMovies} />
      </>
    );
  }
}
