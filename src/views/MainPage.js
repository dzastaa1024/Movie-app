import React, { Component } from "react";
import * as fetcher from "../fetcher";
import MovieList from "../components/MovieList";
import MovieModal from "../components/Modal/MovieModal";

export default class MainPage extends Component {
  state = {
    moviesToRender: [],
    popularMovies: [],
    allMoviesAndTvShows: [],
    isModal: false,
    clikedMovie: null
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

  handleClick = movie => {
    // const { allMoviesAndTvShows, popularMovies, moviesToRender } = this.state;
    // const foundMovie = [
    //   ...allMoviesAndTvShows,
    //   ...popularMovies,
    //   ...moviesToRender
    // ].find(movie => movie.id === movieId);

    this.setState({
      isModal: true,
      clikedMovie: movie
    });
  };

  render() {
    const {
      moviesToRender,
      popularMovies,
      allMoviesAndTvShows,
      clikedMovie,
      isModal
    } = this.state;

    const { activeFilters } = this.props;

    let movieToRender = allMoviesAndTvShows;

    activeFilters.length > 0 &&
      activeFilters.forEach(filterId => {
        movieToRender = allMoviesAndTvShows.filter(movie => {
          return (
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
          );
        });
      });

    return (
      <>
        <MovieList
          ratedMovies={moviesToRender}
          popularMovies={popularMovies}
          allMovies={movieToRender}
          handleClick={this.handleClick}
        />
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
