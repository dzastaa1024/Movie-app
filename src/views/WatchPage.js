import React, { Component } from "react";
import MovieList from "../components/MovieList";
import styled from "styled-components";

export default class WatchPage extends Component {
  render() {
    const { addMovieToWatchList } = this.props;
    console.log("added movie", addMovieToWatchList);
    return <MovieList addMovieToWatchList={addMovieToWatchList} />;
  }
}

// addMovieToWatchList.map(movie => (
//   <MovieItem movie={addMovieToWatchList}></MovieItem>
// ));
