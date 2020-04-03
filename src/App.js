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
    popularMovies: []
  };

  async componentDidMount() {
    const resRated = await fetcher.fetchTopRatedMovies();
    const resPopular = await fetcher.fetchPopularMovies();

    console.log(resPopular);

    this.setState({
      topRatedMovies: resRated,
      popularMovies: resPopular
    });
  }

  render() {
    const { topRatedMovies, popularMovies } = this.state;
    return (
      <>
        <GlobalStyle />
        <Topbar />
        <SidebarFilters />
        <MovieList
          topRatedMovies={topRatedMovies}
          popularMovies={popularMovies}
        />
        <SidebarNews />
      </>
    );
  }
}
