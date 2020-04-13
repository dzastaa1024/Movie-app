import React from "react";
import styled from "styled-components";
import * as fetcher from "../../fetcher";
import SideBarFiltersList from "../SideBarFiltersList";
import Scroll from "../../Scroll";

export default class SidebarFilters extends React.Component {
  state = {
    genres: [],
    languages: [],
  };

  mapLanguage = (languages) =>
    languages.map((language) => ({
      id: language.iso_639_1,
      name: language.english_name,
    }));

  async componentDidMount() {
    const resGenre = await fetcher.fetchGenre();
    const resLanguages = await fetcher.fetchLanguages();

    const languages = this.mapLanguage(resLanguages);

    this.setState({
      genres: resGenre,
      languages: languages,
    });
  }

  render() {
    const { genres, languages } = this.state;
    const { handleFilter, genreFilters, languageFilters } = this.props;
    return (
      <Wrapper>
        <SideBarFiltersList
          filters={genres}
          handleFilter={handleFilter}
          activeFilters={genreFilters}
          heading={"Genres"}
          filterType="genreFilters"
        />
        <SideBarFiltersList
          filters={languages}
          handleFilter={handleFilter}
          activeFilters={languageFilters}
          heading={"Languages"}
          filterType="languageFilters"
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  background-color: black;
  width: 20rem;
  position: fixed;
  top: 10rem;
  bottom: 0;
  left: 0;
`;
