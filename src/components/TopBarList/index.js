import React from "react";
import styled from "styled-components";

const TopBarList = ({ movie }) => {
  return (
    <List>
      <Item>
        <Movies>Movies</Movies>
      </Item>
      <Item>
        <TVShows>TV Shows</TVShows>
      </Item>
      <Item>
        <WatchList>WatchList</WatchList>
      </Item>
      <Item>
        <Picture></Picture>
      </Item>
    </List>
  );
};

export default TopBarList;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Item = styled.li``;

const Movies = styled.a``;

const TVShows = styled.a``;

const WatchList = styled.a``;

const Picture = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 50px;
`;
