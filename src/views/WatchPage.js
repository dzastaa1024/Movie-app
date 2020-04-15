import React, { Component } from "react";
import MovieList from "../components/MovieList";
import styled from "styled-components";

export default class WatchPage extends Component {
  render() {
    const { addMovieToWatchList } = this.props;
    console.log("added movie", addMovieToWatchList);
    return (
      <Wrapper>
        <MovieList allMovies={addMovieToWatchList} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: calc(100% - 1 * 100px);
  padding: 2rem;
  background-color: #18171f;
  margin-left: 20rem;
  margin-top: 10rem;
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
`;
