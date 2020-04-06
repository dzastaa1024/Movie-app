import React from "react";
import styled from "styled-components";
import MovieItem from "../MovieItem";

export default class SidebarNews extends React.Component {
  render() {
    const { upComingMovies } = this.props;
    return (
      <Wrapper>
        <List>
          <Title>Upcoming Movies</Title>
          {upComingMovies.map((movie, i) => {
            if (i > 1) {
              return;
            }
            return <MovieItem movie={movie} sidebarNews key={movie.id} />;
          })}
        </List>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 20rem;
  position: fixed;
  top: 10rem;
  bottom: 0;
  right: 0;
  background-color: #232220;
  padding: 3rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.li`
  display: flex;
  padding-bottom: 2rem;
  padding-top: 2rem;
  color: #fff;
  font-size: 2rem;
`;
