import React, { Component } from "react";
import MovieList from "../components/MovieList";
import * as fetcher from "../fetcher";
import MovieModal from "../components/Modal/MovieModal";

export default class TvPage extends Component {
  state = {
    moviesToRender: [],
    isModal: false,
    clikedMovie: null,
    page: 0
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

  componentDidUpdate(prevProps) {
    if (this.props.keyword && this.props.keyword !== prevProps.keyword) {
      this.searchTVShhows(this.props.keyword);
    }
  }

  async searchTVShhows(keyword) {
    const resAllMovies = await fetcher.fetchTVShowsByKeyword(keyword);

    this.setState({
      moviesToRender: resAllMovies,
      page: this.state.page + 1
    });
  }

  handleLoadMore = async () => {
    const resMovies = await fetcher.fetchTVShowsByKeyword(
      this.props.keyword,
      this.state.page + 1
    );

    this.setState({
      moviesToRender: this.state.moviesToRender.concat(resMovies),
      page: this.state.page + 1
    });
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
    const { clikedMovie, moviesToRender, isModal } = this.state;

    const { genreFilters, languageFilters } = this.props;
    let movieToRender = moviesToRender;

    genreFilters.length > 0 &&
      genreFilters.forEach(filterId => {
        movieToRender = movieToRender.filter(movie => {
          return (
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
          );
        });
      });

    languageFilters.length > 0 &&
      languageFilters.forEach(filterId => {
        movieToRender = movieToRender.filter(movie => {
          return (
            movie.original_language && movie.original_language === filterId
          );
        });
      });

    return (
      <>
        <MovieList
          allMovies={movieToRender}
          handleClick={this.handleClick}
          handleLoadMore={this.handleLoadMore}
        />
        ;
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
