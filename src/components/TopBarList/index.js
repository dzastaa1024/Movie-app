import React from "react";
import styled from "styled-components";

const menuItems = [
  { btnText: "Movies", to: "/" },
  { btnText: "TV Shows", to: "/" },
  { btnText: "WatchList", to: "/" }
];

const TopBarList = ({ movie }) => {
  return (
    <Menu>
      {menuItems.map(menuItem => (
        <MenuItem>
          <MenuItemValue href={menuItem.to}>{menuItem.btnText}</MenuItemValue>
        </MenuItem>
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
