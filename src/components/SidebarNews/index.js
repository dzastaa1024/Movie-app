import React from "react";
import styled from "styled-components";

export default class SidebarNews extends React.Component {
  render() {
    return <Wrapper> Sidebar News</Wrapper>;
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 20rem;
  height: 100%;
  position: fixed;
  right: 0;
  top: 20rem;
`;
