import React from "react";
import styled from "styled-components";
import * as fetcher from "../../fetcher";

export default class SidebarFilters extends React.Component {
  state = {
    genres: []
  };

  async componentDidMount() {
    const res = await fetcher.fetchGenre();
    console.log(("moj res", res));
    this.setState({
      genres: res
    });
  }

  render() {
    const { genres } = this.state;
    const { handleFilter } = this.props;
    return (
      <Wrapper>
        <Title>Genres</Title>
        <List>
          {genres.map(genre => (
            <Genre onClick={() => handleFilter(genre.id)}>{genre.name}</Genre>
          ))}
        </List>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  background-color: black;
  width: 20rem;
  position: fixed;
  top: 10rem;
  bottom: 0;
  left: 0;
`;

const List = styled.ul``;

const Genre = styled.li`
  cursor: pointer;
`;

const Title = styled.h2``;
