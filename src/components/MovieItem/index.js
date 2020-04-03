import React from "react";
import styled from "styled-components";

const MovieItem = ({ movie }) => {
  return (
    <Item>
      <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <Title>{movie.title}</Title>
      <Average>{movie.vote_average}</Average>
    </Item>
  );
};

export default MovieItem;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  padding-top: 2rem;
`;

const Average = styled.p`
  padding-top: 1rem;
`;
