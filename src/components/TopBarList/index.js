import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const menuItems = [
  { btnText: "Movies", to: "/movies" },
  { btnText: "TV Shows", to: "/tvshows" },
  { btnText: "WatchList", to: "/watchlists" }
];

const TopBarList = () => {
  return (
    <Menu>
      {menuItems.map(menuItem => (
        <Link to={menuItem.to} key={menuItem.to}>
          <MenuItem>
            <MenuItemValue href={menuItem.to}>{menuItem.btnText}</MenuItemValue>
          </MenuItem>
        </Link>
      ))}
      <MenuItem>
        <Picture></Picture>
      </MenuItem>
    </Menu>
  );
};

export default TopBarList;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const MenuItem = styled.li``;

const MenuItemValue = styled.a`
  color: grey;

  &:hover {
    color: white;
  }
`;

const Picture = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 50px;
`;
