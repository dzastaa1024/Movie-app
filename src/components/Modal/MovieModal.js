import React, { Component } from "react";
import Modal from "./index";
import styled, { css } from "styled-components";

export default class MovieModal extends Component {
  renderContent() {
    return (
      <Wrapper>
        <LeftContent>
          <Image />
        </LeftContent>
        <RightContent>
          <Title></Title>
          <Average></Average>
          <ReleaseDate></ReleaseDate>
          <Overview></Overview>
        </RightContent>
        <Action>
          <AddToWatchListBtn></AddToWatchListBtn>
          <ClosingBtn onClick={this.props.close}></ClosingBtn>
        </Action>
      </Wrapper>
    );
  }

  render() {
    return (
      <div>
        <Modal modalContent={this.renderContent()} close={this.props.close} />
      </div>
    );
  }
}
const Wrapper = styled.div``;

const LeftContent = styled.div``;

const Image = styled.img``;

const RightContent = styled.div``;

const Title = styled.h1``;

const Overview = styled.p``;

const Average = styled.p``;

const ReleaseDate = styled.p``;

const AddToWatchListBtn = styled.button``;

const ClosingBtn = styled.button``;

const Action = styled.div``;
