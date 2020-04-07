import React, { Component } from "react";
import * as fetcher from "../fetcher";
import MovieList from "../components/MovieList";
import styled from "styled-components";
import MovieModal from "../components/Modal/MovieModal";

export default class MainPage extends Component {
  state = {
    moviesToRender: [],
    popularMovies: [],
    allMoviesAndTvShows: [],
    isModal: false,
    foundMovie: null
  };

  async componentDidMount() {
    const resRated = await fetcher.fetchTopRatedMovies();
    const resPopular = await fetcher.fetchPopularMovies();

    this.setState({
      moviesToRender: resRated,
      popularMovies: resPopular
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.keyword && this.props.keyword !== prevProps.keyword) {
      this.searchMovies(this.props.keyword);
    }
  }

  async searchMovies(keyword) {
    console.log("keyword", keyword);
    const resAllMovies = await fetcher.fetchAllMoviesAndTvShows(keyword);
    this.setState({
      allMoviesAndTvShows: resAllMovies
    });
  }

  closeModal = () => {
    this.setState({
      isModal: false
    });
  };

  handleClick = movieId => {
    const { allMoviesAndTvShows, popularMovies, moviesToRender } = this.state;
    const foundMovie = [
      ...allMoviesAndTvShows,
      ...popularMovies,
      ...moviesToRender
    ].find(movie => movie.id === movieId);

    this.setState({
      isModal: true,
      foundMovie: foundMovie
    });
  };

  render() {
    const {
      moviesToRender,
      popularMovies,
      allMoviesAndTvShows,
      foundMovie
    } = this.state;

    console.log(foundMovie);

    return (
      <>
        <MovieList
          ratedMovies={moviesToRender}
          popularMovies={popularMovies}
          allMovies={allMoviesAndTvShows}
          handleClick={this.handleClick}
        />
        {this.state.isModal && (
          <MovieModal close={this.closeModal} foundMovie={foundMovie} />
        )}
      </>
    );
  }
}
