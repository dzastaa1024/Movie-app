import React from "react";
import styled from "styled-components";

export const Button = ({ handleLoadMore }) => {
  return <LoadBtn onClick={handleLoadMore}>Load more</LoadBtn>;
};

export default Button;

const LoadBtn = styled.button`
  height: 3.2rem;
  width: 13rem;
  background-color: #ecff34;
  color: gray;
  outline: none;
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px grey;
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;

LoadBtn.displayName = "LoadBtn";
