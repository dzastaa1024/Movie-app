import React from "react";
import styled from "styled-components";

const Scroll = props => {
  return <ScrollWrapper>{props.children}</ScrollWrapper>;
};

export default Scroll;

const ScrollWrapper = styled.div`
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
  height: calc(100% - 100px);
  margin-left: 20rem;
  margin-top: 10rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 3rem;
  background-color: #18171f;
`;
