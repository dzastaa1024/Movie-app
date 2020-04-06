import React, { Component } from "react";
import * as fetcher from "../fetcher";
import MovieList from "../components/MovieList";
import styled from "styled-components";

export default class MainPage extends Component {
  state = {
    moviesToRender: [],
    popularMovies: [],
    allMoviesAndTvShows: []
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

  render() {
    const { moviesToRender, popularMovies, allMoviesAndTvShows } = this.state;

    return (
      <MovieList
        ratedMovies={moviesToRender}
        popularMovies={popularMovies}
        allMovies={allMoviesAndTvShows}
      />
    );
  }
}
