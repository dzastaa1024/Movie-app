import React, { Component } from "react";
import MovieList from "../components/MovieList";
import * as fetcher from "../fetcher";
import styled from "styled-components";

export default class TvPage extends Component {
  state = {
    moviesToRender: []
  };

  async componentDidMount() {
    const keyword = this.props.keyword;
    if (!keyword) {
      const res = await fetcher.fetchTVShowsPopular();
      console.log(res);
      this.setState({
        moviesToRender: res
      });
      return;
    }
    this.searchTVShhows(keyword);
  }

  componentDidUpdate() {
    this.searchTVShhows(this.props.keyword);
  }

  async searchTVShhows(keyword) {
    const resAllMovies = await fetcher.fetchTVShowsByKeyword(keyword);

    this.setState({
      moviesToRender: resAllMovies
    });
  }

  render() {
    return <MovieList allMovies={this.state.moviesToRender} />;
  }
}
