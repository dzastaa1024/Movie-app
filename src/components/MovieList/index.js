import React from "react";
import styled from "styled-components";
import MovieItem from "../MovieItem";

export default class MovieList extends React.Component {
  render() {
    return <Wrapper></Wrapper>;
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 60vw;
  height: 80vh;
`;
