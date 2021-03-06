import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Topbar from "./components/Topbar";
import SidebarFilters from "./components/SidebarFilters";
import SidebarNews from "./components/SidebarNews";
import Scroll from "./Scroll";

import MainPage from "./views/MainPage";
import MoviePage from "./views/MoviePage.js";
import TvPage from "./views/TvPage";
import WatchPage from "./views/WatchPage";
import SignUpForm from "./components/SignUpForm";

export default class App extends React.Component {
  state = {
    keyword: "",
    addMovieToWatchList: [],
    genreFilters: [],
    languageFilters: [],
    user: "",
  };

  componentDidMount() {
    const newState = localStorage.getItem("data");
    const parseNewState = JSON.parse(newState);

    if (parseNewState) {
      this.setState({
        user: parseNewState,
      });
    }
  }

  saveUser = (data) => {
    const addItemToLocalStorage = (name, value) => {
      return localStorage.setItem(name, JSON.stringify(value));
    };

    addItemToLocalStorage("data", data);

    if (data) {
      this.setState({
        user: data,
      });
    }
  };

  handleFilter = (id, filterType) => {
    if (this.state[filterType].includes(id)) {
      this.setState({
        [filterType]: this.state[filterType].filter(
          (filteredId) => filteredId !== id
        ),
      });
      return;
    }

    this.setState({
      [filterType]: this.state[filterType].concat(id),
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (movie) => {
    this.setState({
      addMovieToWatchList: this.state.addMovieToWatchList.concat(movie),
    });
  };

  render() {
    const {
      keyword,
      addMovieToWatchList,
      genreFilters,
      languageFilters,
      user,
    } = this.state;

    return (
      <>
        <GlobalStyle />
        <Router>
          <>
            <Topbar
              handleChange={this.handleChange}
              keyword={keyword}
              parseData={user}
            />
            <SidebarFilters
              handleFilter={this.handleFilter}
              genreFilters={genreFilters}
              languageFilters={languageFilters}
            />
            <Route
              exact
              path="/"
              render={() => (
                <Scroll>
                  <MainPage
                    keyword={keyword}
                    handleSubmit={this.handleSubmit}
                    genreFilters={genreFilters}
                    languageFilters={languageFilters}
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
                    genreFilters={genreFilters}
                    languageFilters={languageFilters}
                  />
                </Scroll>
              )}
            />
            <Route
              path="/tvshows"
              render={() => (
                <Scroll>
                  <TvPage
                    keyword={keyword}
                    handleSubmit={this.handleSubmit}
                    genreFilters={genreFilters}
                    languageFilters={languageFilters}
                  />
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
            {user ? (
              <Route
                path="/accountsettings"
                render={() => (
                  <Scroll>
                    <SignUpForm user={user} saveUser={this.saveUser} />
                  </Scroll>
                )}
              />
            ) : (
              <Route
                path="/signupform"
                render={() => (
                  <Scroll>
                    <SignUpForm saveUser={this.saveUser} />
                  </Scroll>
                )}
              />
            )}
          </>
        </Router>
        <Scroll>
          <SidebarNews />
        </Scroll>
      </>
    );
  }
}
