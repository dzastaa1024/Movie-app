import React from "react";
import styled, { css } from "styled-components";
//import { AiFillStar } from "react-icons/ai";
import { Star } from "@styled-icons/boxicons-solid/Star";

const MovieItem = ({ movie, sidebarNews, handleClick, slide }) => {
  return (
    <Item slide={slide} onClick={() => handleClick(movie)}>
      <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <Title sidebarNews>{movie.title}</Title>
      {!sidebarNews && (
        <Average>
          {" "}
          <GoldStar /> {movie.vote_average}
        </Average>
      )}
      {sidebarNews && (
        <ReleaseDate sidebarNews={sidebarNews}>
          {movie.release_date}
        </ReleaseDate>
      )}
    </Item>
  );
};

export default MovieItem;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 1 25%;
  padding: 0 2rem;
  cursor: pointer;

  ${(props) =>
    props.slide &&
    css`
      flex: 0 0 25%;
    `}
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  padding-top: 2rem;
  color: #fff;

  ${(props) =>
    props.sidebarNews &&
    css`
      font-size: 1.5rem;
    `}
`;

const Average = styled.p`
  padding-top: 1rem;
  color: white;
`;

const ReleaseDate = styled.p`
  display: none;

  ${(props) =>
    props.sidebarNews &&
    css`
      display: block;
      font-size: 1.5rem;
      color: white;
      padding: 1rem 0;
      font-size: 1rem;
    `}
`;

const GoldStar = styled(Star)`
  color: gold;
  width: 1.5rem;
`;
