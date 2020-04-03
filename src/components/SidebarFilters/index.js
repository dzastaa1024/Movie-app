import React from "react";
import styled from "styled-components";

export default class SidebarFilters extends React.Component {
  render() {
    return <Wrapper>Sidebar Filters</Wrapper>;
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 20rem;
  height: 100%;
  position: fixed;
  top: 20rem;
`;
