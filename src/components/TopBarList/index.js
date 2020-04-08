import React, { Component } from "react";
import UserModal from "../Modal/UserModal";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { User } from "@styled-icons/boxicons-regular/User";

const menuItems = [
  { btnText: "Movies", to: "/movies" },
  { btnText: "TV Shows", to: "/tvshows" },
  { btnText: "WatchList", to: "/watchlists" }
];

export default class TopBarList extends Component {
  state = {
    isModal: false
  };

  closeModal = () => {
    this.setState({
      isModal: false
    });
  };

  handleClick = () => {
    this.setState({
      isModal: true
    });
  };

  render() {
    return (
      <>
        <Menu>
          {menuItems.map(menuItem => (
            <Link to={menuItem.to} key={menuItem.to}>
              <MenuItem>
                <MenuItemValue href={menuItem.to}>
                  {menuItem.btnText}
                </MenuItemValue>
              </MenuItem>
            </Link>
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

const UserIcon = styled(User)`
  color: lightgray;
  cursor: pointer;
`;
