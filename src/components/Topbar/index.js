import React from "react";
import styled from "styled-components";
import TopBarList from "../TopBarList";

export default class Topbar extends React.Component {
  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <Icon></Icon>
        </LeftWrapper>
        <MiddleWrapper>
          <Input />
        </MiddleWrapper>
        <RightWrapper>
          <TopBarList />
        </RightWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 10rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
`;

const LeftWrapper = styled.div`
  width: 65%;
`;

const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  border: 1px solid black;
`;

const MiddleWrapper = styled.div`
  width: 65%;
`;

const Input = styled.input`
  width: 35rem;
  height: 3rem;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 35%;
`;
