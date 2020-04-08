import React, { Component } from "react";
import MovieList from "../components/MovieList";
import * as fetcher from "../fetcher";
import styled from "styled-components";
import MovieModal from "../components/Modal/MovieModal";

export default class TvPage extends Component {
  state = {
    moviesToRender: [],
    isModal: false,
    clikedMovie: null
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
