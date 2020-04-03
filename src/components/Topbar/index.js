import React from "react";
import styled from "styled-components";

export default class Topbar extends React.Component {
  render() {
    return <Wrapper></Wrapper>;
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100vw;
  height: 20vh;
`;
