import React, { Component } from "react";
import Modal from "./index";
import styled from "styled-components";

export default class MovieModal extends Component {
  renderContent() {
    return (
      <Wrapper>
        <TopContent>
          <Icon />
          <Name>John Smith</Name>
        </TopContent>
        <ButtomContent>
          <List>
            <Item>
              <ItemWrapper>
                <IconWrapper>
                  <Icon></Icon>
                </IconWrapper>
                <Name></Name>
              </ItemWrapper>
            </Item>
          </List>
        </ButtomContent>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopContent = styled.div``;

const Icon = styled.div``;

const Name = styled.a``;

const ButtomContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul``;

const Item = styled.li``;

const ItemWrapper = styled.a``;

const IconWrapper = styled.span``;

// const Icon = styled.div``;

// const Name = styled.p``;
