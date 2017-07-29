import React, {Component} from "react";
import PropTypes from "prop-types";

const MenuButton = ({toggleMenu, menuIsActive}) => {
  return (
    <div className="menu-button" onClick={toggleMenu}>
      <div className="menu-stripes-section">
        <span className={`menu-stripe menu-stripe-top ${menuIsActive ? 'menu-stripe-top-active' : ''}`}></span>
        <span className={`menu-stripe menu-stripe-bottom ${menuIsActive ? 'menu-stripe-bottom-active' : ''}`}></span>
      </div>
    </div>
  );
};

export default MenuButton;
