import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import * as fetcher from "./fetcher";

import Topbar from "./components/Topbar";
import SidebarFilters from "./components/SidebarFilters";
import SidebarNews from "./components/SidebarNews";
import Scroll from "./Scroll";

import MainPage from "./views/MainPage";
import MoviePage from "./views/MoviePage.js";
import TvPage from "./views/TvPage";
import WatchPage from "./views/WatchPage";

export default class App extends React.Component {
  state = {
    keyword: "",
    upComingMovies: [],
    addMovieToWatchList: []
  };

  async componentDidMount() {
    const resUpComing = await fetcher.fetchMoviesUpcoming();

    this.setState({
      upComingMovies: resUpComing
    });
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = movie => {
    const watchList = {
      moviesAddedToWatchList: this.state.moviesAddedToWatchList
    };

    this.setState({
      addMovieToWatchList: this.state.addMovieToWatchList.concat(movie)
    });
  };

  render() {
    const { keyword, upComingMovies, addMovieToWatchList } = this.state;

    return (
      <>
        <GlobalStyle />
        <Router>
          <>
            <Topbar handleChange={this.handleChange} keyword={keyword} />
            <SidebarFilters />
            <Route
              exact
              path="/"
              render={() => (
                <Scroll>
                  <MainPage
                    keyword={keyword}
                    handleSubmit={this.handleSubmit}
                  />
                </Scroll>
              )}
            />
            <Route
              path="/movies"
              render={() => (
                <Scroll>
                  <MoviePage
                    keyword={keyword}
                    handleSubmit={this.handleSubmit}
                  />
                </Scroll>
              )}
            />
            <Route
              path="/tvshows"
              render={() => (
                <Scroll>
                  <TvPage keyword={keyword} handleSubmit={this.handleSubmit} />
                </Scroll>
              )}
            />
            <Route
              path="/watchlists"
              render={() => (
                <Scroll>
                  <WatchPage addMovieToWatchList={addMovieToWatchList} />
                </Scroll>
              )}
            />
          </>
        </Router>
        <Scroll>
          <SidebarNews upComingMovies={upComingMovies} />
        </Scroll>
      </>
    );
  }
}
