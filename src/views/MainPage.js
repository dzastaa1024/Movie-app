import React, { Component } from "react";
import * as fetcher from "../fetcher";
import styled from "styled-components";

import MovieList from "../components/MovieList";
import MovieModal from "../components/Modal/MovieModal";
import Slider from "../components/Slider";
import Scroll from "../Scroll";

export default class MainPage extends Component {
  state = {
    moviesToRender: [],
    popularMovies: [],
    allMoviesAndTvShows: [],
    isModal: false,
    clikedMovie: null,
    page: 0,
  };

  async componentDidMount() {
    const resRated = await fetcher.fetchTopRatedMovies();
    const resPopular = await fetcher.fetchPopularMovies();

    this.setState({
      moviesToRender: resRated,
      popularMovies: resPopular,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { keyword } = this.props;
    if (keyword && keyword !== prevProps.keyword) {
      this.searchMovies(keyword);
    }
  }

  async searchMovies(keyword) {
    const resAllMovies = await fetcher.fetchAllMoviesAndTvShows(keyword);
    this.setState({
      allMoviesAndTvShows: resAllMovies,
      page: this.state.page + 1,
    });
  }

  handleLoadMore = async () => {
    const resAllMovies = await fetcher.fetchAllMoviesAndTvShows(
      this.props.keyword,
      this.state.page + 1
    );
    console.log(resAllMovies);
    this.setState({
      allMoviesAndTvShows: this.state.allMoviesAndTvShows.concat(resAllMovies),
      page: this.state.page + 1,
    });
  };

  closeModal = () => {
    this.setState({
      isModal: false,
    });
  };

  handleClick = (movie) => {
    // const { allMoviesAndTvShows, popularMovies, moviesToRender } = this.state;
    // const foundMovie = [
    //   ...allMoviesAndTvShows,
    //   ...popularMovies,
    //   ...moviesToRender
    // ].find(movie => movie.id === movieId);

    this.setState({
      isModal: true,
      clikedMovie: movie,
    });
  };

  render() {
    const {
      moviesToRender,
      popularMovies,
      allMoviesAndTvShows,
      clikedMovie,
      isModal,
    } = this.state;

    const { genreFilters, languageFilters } = this.props;

    let movieToRender = allMoviesAndTvShows;

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

    const isAnyFilterActive = !!languageFilters.length || !!genreFilters.length;
    return (
      <Wrapper>
        <Scroll>
          {!isAnyFilterActive && movieToRender.length === 0 && (
            <>
              <Slider
                movies={popularMovies}
                sliderTitle="Weekly Top Popular Movies"
                handleClick={this.handleClick}
              />
              <Slider
                movies={moviesToRender}
                sliderTitle="Weekly Top Rated Movies"
                handleClick={this.handleClick}
              />
            </>
          )}

          <MovieList
            allMovies={movieToRender}
            handleClick={this.handleClick}
            handleLoadMore={this.handleLoadMore}
          />

          {isModal && (
            <MovieModal
              close={this.closeModal}
              clikedMovie={clikedMovie}
              handleSubmit={this.props.handleSubmit}
            />
          )}
        </Scroll>
      </Wrapper>
    );
  }
}

export const Wrapper = styled.div`
  padding: 2rem;
  background-color: #18171f;
  margin-left: 20rem;
  margin-top: 10rem;
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
`;

// height: calc(100% - 100px);
