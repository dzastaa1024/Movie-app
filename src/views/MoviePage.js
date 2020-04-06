import React, { Component } from "react";
import MovieList from "../components/MovieList";
import * as fetcher from "../fetcher";
import styled from "styled-components";

export default class MoviePage extends Component {
  state = {
    moviesToRender: []
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

  render() {
    return <MovieList allMovies={this.state.moviesToRender} />;
  }
}
