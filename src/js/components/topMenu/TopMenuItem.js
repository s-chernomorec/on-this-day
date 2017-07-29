import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

import Menu from "../common/Menu";

const TopMenuItem = ({item, customStyle}) => {
  return (
    <div className="top-menu-item" style={customStyle}>
      <NavLink to={`/${item}`}>{item}</NavLink>
    </div>
  );
};

TopMenuItem.propTypes = {
  item: PropTypes.string.isRequired,
  customStyle: PropTypes.object.isRequired
}

export default TopMenuItem;
