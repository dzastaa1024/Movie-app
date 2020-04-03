import React from "react";
import styled from "styled-components";
import MovieItem from "../MovieItem";

export default class MovieList extends React.Component {
  render() {
    const { topRatedMovies, popularMovies } = this.props;

    return (
      <Wrapper>
        <Title>Weekly Top Rated Movies</Title>
        <List>
          {topRatedMovies.map((movie, i) => {
            if (i > 3) {
              return;
            }
            return <MovieItem movie={movie} key={movie.id} />;
          })}
        </List>
        <Title>Popular Movies</Title>
        <List>
          {popularMovies.map((movie, i) => {
            if (i > 3) {
              return;
            }
            return <MovieItem movie={movie} key={movie.id} />;
          })}
        </List>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid red;
  width: calc(100% - 2 * 200px);
  height: calc(100% - 200px);
  margin-left: 20rem;
  overflow-y: scroll;
  margin-top: 20rem;
  overflow-x: hidden;
  padding: 1rem;
  padding-left: 5rem;
`;

const List = styled.ul`
  display: flex;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  display: flex;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;
