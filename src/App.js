import React from "react";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import MovieList from "./components/MovieList";
import SidebarFilters from "./components/SidebarFilters";
import SidebarNews from "./components/SidebarNews";
import GlobalStyle from "./GlobalStyle";
import * as fetcher from "./fetcher";

export default class App extends React.Component {
  async componentDidMount() {
    const res = await fetcher.fetchTopRatedMovies();
    console.log(res);
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Topbar />
        <SidebarFilters />
        <MovieList />
        <SidebarNews />
      </>
    );
  }
}
