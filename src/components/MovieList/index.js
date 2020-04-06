import React from "react";
import styled, { css } from "styled-components";
import MovieItem from "../MovieItem";

export default class MovieList extends React.Component {
  render() {
    const { allMovies, ratedMovies, popularMovies } = this.props;

    return (
      <Wrapper>
        {allMovies.length > 0 && (
          <>
            <Title>Results</Title>
            <List>
              {allMovies.map(movie => {
                //  if (i > 3) {
                //    return;
                //  }
                return (
                  <MovieItem
                    movie={movie}
                    key={movie.id}
                    title="Weekly Top Rated Movies"
                  />
                );
              })}
            </List>
          </>
        )}

        {ratedMovies && ratedMovies.length > 0 && (
          <>
            <Title>Weekly Top Rated Movies</Title>
            <List>
              {ratedMovies.map((movie, i) => {
                if (i > 3) {
                  return;
                }
                return (
                  <MovieItem
                    movie={movie}
                    key={movie.id}
                    title="Weekly Top Rated Movies"
                  />
                );
              })}
            </List>
          </>
        )}

        {popularMovies && popularMovies.length > 0 && (
          <>
            <Title>Weekly Top Rated Movies</Title>
            <List>
              {popularMovies.map((movie, i) => {
                if (i > 3) {
                  return;
                }
                return (
                  <MovieItem
                    movie={movie}
                    key={movie.id}
                    title="Weekly Top Rated Movies"
                  />
                );
              })}
            </List>
          </>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  /* border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
  height: calc(100% - 100px);
  margin-left: 20rem;
  margin-top: 10rem;
  top: 10rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 3rem;
  background-color: #18171f;
  overflow: hidden; */
`;

const List = styled.ul`
  display: flex;
  margin-bottom: 5rem;
  flex-wrap: wrap;

  ${props =>
    props.keyword &&
    css`
       flex-wrap: wrap;
    `}
`;

const Title = styled.h1`
  display: flex;
  padding-bottom: 2rem;
  padding-top: 2rem;
  color: #fff;
  padding-left: 2rem;
`;
