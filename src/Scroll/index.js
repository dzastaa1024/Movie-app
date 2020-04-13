import React from "react";
import styled from "styled-components";

const Scroll = (props) => {
  return <ScrollWrapper>{props.children}</ScrollWrapper>;
};

export default Scroll;

const ScrollWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
`;
