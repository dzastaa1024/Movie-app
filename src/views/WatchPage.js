import React, { Component } from "react";
import MovieList from "../components/MovieList";

export default class WatchPage extends Component {
  render() {
    const { addMovieToWatchList } = this.props;
    console.log("added movie", addMovieToWatchList);
    return <MovieList allMovies={addMovieToWatchList} />;
  }
}
