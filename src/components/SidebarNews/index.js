import React from "react";
import styled from "styled-components";
import MovieModal from "../Modal/MovieModal";
import MovieList from "../MovieList";
import * as fetcher from "../../fetcher";

export default class SidebarNews extends React.Component {
  state = {
    isModal: false,
    clikedMovie: null,
    upComingMovies: []
  };

  async componentDidMount() {
    const resUpComing = await fetcher.fetchMoviesUpcoming();

    this.setState({
      upComingMovies: resUpComing
    });
  }

  closeModal = () => {
    this.setState({
      isModal: false
    });
  };

  handleClick = movie => {
    this.setState({
      clikedMovie: movie,
      isModal: true
    });
  };

  render() {
    const { clikedMovie, upComingMovies, isModal } = this.state;
    return (
      <Wrapper>
        <List>
          <Title>Upcoming Movies</Title>
          <MovieList
            allMovies={upComingMovies}
            handleClick={this.handleClick}
            sidebarNews
          />
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
