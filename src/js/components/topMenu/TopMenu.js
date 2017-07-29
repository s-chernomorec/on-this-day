import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

import Menu from "../common/Menu";
import TopMenuItem from "./TopMenuItem";

const TopMenu = ({menuIsActive}) => {
  const menuItems = ['bookmarks', 'about'];
  const menuItemsStyle = {width: 100 / menuItems.length + '%'}

  const displayStyle = {
    display: menuIsActive ? 'block' : 'none'
  }

  return (
    <Menu customClass="top-menu" customStyle={displayStyle}>
      {
        menuItems.map((item, i) => (
          <TopMenuItem key={i} item={item} customStyle={menuItemsStyle} />
        ))
      }
    </Menu>
  );
};

export default TopMenu;
