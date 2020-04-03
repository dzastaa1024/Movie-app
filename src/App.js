import React from "react";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import MovieList from "./components/MovieList";
import SidebarFilters from "./components/SidebarFilters";
import SidebarNews from "./components/SidebarNews";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <Container>
          <SidebarFilters />
          <MovieList />
          <SidebarNews />
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  display: flex;
`;
