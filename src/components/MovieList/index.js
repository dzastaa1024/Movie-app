import React from "react";
import styled, { css } from "styled-components";
import MovieItem from "../MovieItem";
import Button from "../Button";

export default class MovieList extends React.Component {
  render() {
    const {
      allMovies,
      ratedMovies,
      popularMovies,
      handleClick,
      handleLoadMore,
      sidebarNews
    } = this.props;

    return (
      <Wrapper>
        {allMovies && allMovies.length > 0 && (
          <>
            <Title>Results</Title>
            <List sidebarNews={sidebarNews}>
              {allMovies.map(movie => {
                //  if (i > 3) {
                //    return;
                //  }
                return (
                  <MovieItem
                    movie={movie}
                    key={movie.id}
                    title="Weekly Top Rated Movies"
                    handleClick={handleClick}
                    sidebarNews
                  />
                );
              })}
            </List>
          </>
        )}

        {!allMovies.length > 0 && ratedMovies && ratedMovies.length > 0 && (
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
                    handleClick={handleClick}
                  />
                );
              })}
            </List>
          </>
        )}

        {!allMovies.length > 0 && popularMovies && popularMovies.length > 0 && (
          <>
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
                    handleClick={handleClick}
                  />
                );
              })}
            </List>
          </>
        )}

        {allMovies && allMovies.length > 0 && !sidebarNews && (
          <Button handleLoadMore={handleLoadMore} />
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const List = styled.ul`
  display: flex;
  margin-bottom: 5rem;
  flex-wrap: wrap;

  ${props =>
    props.keyword &&
    css`
       flex-wrap: wrap;
    `}

  ${props =>
    props.sidebarNews &&
    css`
       flex-direction: column;
    `}

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  padding-bottom: 2rem;
  padding-top: 2rem;
  color: #fff;
  padding-left: 2rem;
`;
