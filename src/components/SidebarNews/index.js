import React from "react";
import styled from "styled-components";
import MovieItem from "../MovieItem";
import MovieModal from "../Modal/MovieModal";

export default class SidebarNews extends React.Component {
  state = {
    isModal: false,
    clikedMovie: null
  };

  closeModal = () => {
    this.setState({
      isModal: false
    });
  };

  handleClick = movie => {
    this.setState({
      isModal: true,
      clikedMovie: movie
    });
  };

  render() {
    const { upComingMovies, isModal, clikedMovie } = this.props;
    return (
      <Wrapper>
        <List>
          <Title>Upcoming Movies</Title>
          {upComingMovies.map((movie, i) => {
            if (i > 1) {
              return;
            }
            return (
              <MovieItem
                movie={movie}
                sidebarNews
                key={movie.id}
                handleClick={this.handleClick}
              />
            );
          })}
        </List>
        {isModal && (
          <MovieModal close={this.closeModal} clikedMovie={clikedMovie} />
        )}
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
  padding: 1rem;
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
