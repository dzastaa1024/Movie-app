import React from "react";
import styled from "styled-components";
import TopBarList from "../TopBarList";
import CameraLogo from "../../img/camera.png";
import { Link } from "react-router-dom";

export default class Topbar extends React.Component {
  render() {
    const { handleChange, keyword } = this.props;
    return (
      <Wrapper>
        <LeftWrapper>
          <Link to={"/"}>
            <Icon src={CameraLogo}></Icon>
          </Link>
        </LeftWrapper>
        <MiddleWrapper>
          <Input
            value={keyword}
            onChange={handleChange}
            name="keyword"
            placeholder="Search any movies or tv shows"
          />
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
  padding: 0 2rem;
  align-items: center;
  background-color: black;
`;

const LeftWrapper = styled.div`
  flex: 0 0 6.5rem;
`;

const Icon = styled.img`
  width: 6rem;
  height: 6rem;
`;

const MiddleWrapper = styled.div`
  flex: 0 0 10rem;
  margin-left: auto;
`;

const Input = styled.input`
  width: 35rem;
  height: 3.4rem;
  border-radius: 20px;
  border: none;
  background-color: #17161f;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
  color: white;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 35%;
`;
