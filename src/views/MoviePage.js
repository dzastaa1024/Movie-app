import React, { Component } from "react";
import MovieList from "../components/MovieList";
import * as fetcher from "../fetcher";
import styled from "styled-components";
import MovieModal from "../components/Modal/MovieModal";

export default class MoviePage extends Component {
  state = {
    moviesToRender: [],
    isModal: false,
    clikedMovie: null
  };

  async componentDidMount() {
    const keyword = this.props.keyword;
    if (!keyword) {
      const res = await fetcher.fetchPopularMovies();
      this.setState({
        moviesToRender: res
      });

      return;
    }

    this.searchMovies(keyword);
  }

  componentDidUpdate() {
    this.searchMovies(this.props.keyword);
  }

  async searchMovies(keyword) {
    const resAllMovies = await fetcher.fetchMoviesByKeyword(keyword);

    this.setState({
      moviesToRender: resAllMovies.results
    });
  }

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
    const { clikedMovie, moviesToRender, isModal } = this.state;

    return (
      <>
        <MovieList allMovies={moviesToRender} handleClick={this.handleClick} />;
        {isModal && (
          <MovieModal
            close={this.closeModal}
            clikedMovie={clikedMovie}
            handleSubmit={this.props.handleSubmit}
          />
        )}
      </>
    );
  }
}
