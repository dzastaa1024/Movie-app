import React from "react";
import styled, { css } from "styled-components";
import MovieItem from "../MovieItem";

export default class MovieList extends React.Component {
  render() {
    const { topRatedMovies, popularMovies, allMovies } = this.props;

    return (
      <Wrapper>
        {allMovies.length === 0 && (
          <div>
            <Title>Weekly Top Rated Movies</Title>
            <List>
              {topRatedMovies.map((movie, i) => {
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
            <Title>Popular Movies</Title>
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
          </div>
        )}

        <List keyword>
          {allMovies.map(movie => {
            return (
              <MovieItem
                movie={movie}
                key={movie.id}
                title="Weekly Top Rated Movies"
              />
            );
          })}
        </List>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
  height: calc(100% - 100px);
  margin-left: 20rem;
  overflow-y: scroll;
  margin-top: 10rem;
  overflow-x: hidden;
  padding: 3rem;
  background-color: #18171f;
  overflow: hidden;
`;

const List = styled.ul`
  display: flex;
  margin-bottom: 5rem;

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
`;
