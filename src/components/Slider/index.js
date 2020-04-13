import React from "react";
import styled, { css } from "styled-components";
import MovieItem from "../MovieItem";

const Slider = (props) => {
  return (
    <>
      <Title>{props.sliderTitle}</Title>
      <SliderList>
        {props.movies.map((movie) => (
          <MovieItem
            slide
            movie={movie}
            key={movie.id}
            handleClick={props.handleClick}
          />
        ))}
      </SliderList>
    </>
  );
};

export default Slider;

const SliderList = styled.ul`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

const Title = styled.h1`
  padding-bottom: 1rem;
  padding-left: 2rem;
  color: #fff;
`;
