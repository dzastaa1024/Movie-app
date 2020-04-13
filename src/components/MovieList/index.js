import React from "react";
import styled, { css } from "styled-components";
import MovieItem from "../MovieItem";
import Button from "../Button";

export default class MovieList extends React.Component {
  render() {
    const { allMovies, handleClick, handleLoadMore, sidebarNews } = this.props;

    return (
      <Wrapper>
        {allMovies && allMovies.length > 0 && (
          <>
            <Title sidebarNews={sidebarNews}>Results</Title>
            <List sidebarNews={sidebarNews}>
              {allMovies.map((movie) => {
                return (
                  <MovieItem
                    movie={movie}
                    key={movie.id}
                    handleClick={handleClick}
                    sidebarNews={sidebarNews}
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
  flex-wrap: wrap;

  ${(props) =>
    props.keyword &&
    css`
       flex-wrap: wrap;
    `}

  ${(props) =>
    props.sidebarNews &&
    css`
       flex-direction: column;
    `}

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Title = styled.p`
  padding-bottom: 2rem;
  color: #fff;
  padding-left: 2rem;

  ${(props) =>
    props.sidebarNews &&
    css`
       display: none;
    `}
`;
