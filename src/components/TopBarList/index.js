import React, { Component } from "react";
import UserModal from "../Modal/UserModal";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { User } from "@styled-icons/boxicons-regular/User";

const menuItems = [
  { btnText: "Movies", to: "/movies" },
  { btnText: "TV Shows", to: "/tvshows" },
  { btnText: "WatchList", to: "/watchlists" },
];

export default class TopBarList extends Component {
  state = {
    isModal: false,
  };

  closeModal = () => {
    this.setState({
      isModal: false,
    });
  };

  handleClick = () => {
    this.setState({
      isModal: true,
    });
  };

  render() {
    return (
      <>
        <Menu>
          {menuItems.map((menuItem) => (
            <MenuItemNavLink
              to={menuItem.to}
              key={menuItem.to}
              activeStyle={{ color: "#ecff34" }}
            >
              <MenuItem>
                <MenuItemValue>{menuItem.btnText}</MenuItemValue>
              </MenuItem>
            </MenuItemNavLink>
          ))}
          <MenuItem>
            <Picture>
              <UserIcon onClick={this.handleClick} />
            </Picture>
          </MenuItem>
        </Menu>
        {this.state.isModal && <UserModal close={this.closeModal} />}
      </>
    );
  }
}

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const MenuItem = styled.li``;

const MenuItemNavLink = styled(NavLink)`
  color: grey;
`;

const MenuItemValue = styled.span`
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

const UserIcon = styled(User)`
  color: lightgray;
  cursor: pointer;
`;
