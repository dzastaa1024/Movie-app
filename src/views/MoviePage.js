import React, { Component } from "react";
import MovieList from "../components/MovieList";
import * as fetcher from "../fetcher";
import MovieModal from "../components/Modal/MovieModal";
import { Wrapper } from "../views/MainPage";

export default class MoviePage extends Component {
  state = {
    moviesToRender: [],
    isModal: false,
    clikedMovie: null,
    page: 0,
  };

  async componentDidMount() {
    const keyword = this.props.keyword;
    if (!keyword) {
      const res = await fetcher.fetchPopularMovies();
      this.setState({
        moviesToRender: res,
      });

      return;
    }

    this.searchMovies(keyword);
  }

  componentDidUpdate(prevProps) {
    if (this.props.keyword && this.props.keyword !== prevProps.keyword) {
      this.searchMovies(this.props.keyword);
    }
  }

  async searchMovies(keyword) {
    const resAllMovies = await fetcher.fetchMoviesByKeyword(keyword);

    this.setState({
      moviesToRender: resAllMovies.results,
      page: this.state.page + 1,
    });
  }

  handleLoadMore = async () => {
    const resMovies = await fetcher.fetchMoviesByKeyword(
      this.props.keyword,
      this.state.page + 1
    );

    this.setState({
      moviesToRender: this.state.moviesToRender.concat(resMovies.results),
      page: this.state.page + 1,
    });
  };

  closeModal = () => {
    this.setState({
      isModal: false,
    });
  };

  handleClick = (movie) => {
    this.setState({
      isModal: true,
      clikedMovie: movie,
    });
  };

  render() {
    const { clikedMovie, moviesToRender, isModal } = this.state;

    const { genreFilters, languageFilters } = this.props;

    let movieToRender = moviesToRender;

    genreFilters.length > 0 &&
      genreFilters.forEach((filterId) => {
        movieToRender = movieToRender.filter((movie) => {
          return (
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
          );
        });
      });

    languageFilters.length > 0 &&
      languageFilters.forEach((filterId) => {
        movieToRender = movieToRender.filter((movie) => {
          return (
            movie.original_language && movie.original_language === filterId
          );
        });
      });
    console.log(moviesToRender);

    return (
      <Wrapper>
        <MovieList
          allMovies={movieToRender}
          handleClick={this.handleClick}
          handleLoadMore={this.handleLoadMore}
          isActiveFilter={!!languageFilters.length || !!genreFilters.length}
        />
        ;
        {isModal && (
          <MovieModal
            close={this.closeModal}
            clikedMovie={clikedMovie}
            handleSubmit={this.props.handleSubmit}
          />
        )}
      </Wrapper>
    );
  }
}
