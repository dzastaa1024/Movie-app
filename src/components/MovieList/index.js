import React from "react";
import styled from "styled-components";
import MovieItem from "../MovieItem";

export default class MovieList extends React.Component {
  render() {
    return <Wrapper>Movie List </Wrapper>;
  }
}

const Wrapper = styled.div`
  padding-top: 20rem;
  border: 1px solid red;
  width: calc(100% - 2 * 200px);
  height: 300rem;
  margin-left: 20rem;
`;
