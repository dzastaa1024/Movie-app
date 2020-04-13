import React from "react";
import styled, { css } from "styled-components";
import MovieItem from "../MovieItem";

const Slider = (props) => {
  return (
    <>
      <h2>{props.sliderTitle}</h2>
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
  margin-bottom: 5rem;
  /* flex-wrap: wrap; */
  overflow: hidden;
  overflow-x: scroll;


  /* ${(props) =>
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
  } */
`;
