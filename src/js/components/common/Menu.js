import React from "react";
import PropTypes from "prop-types";

const Menu = ({children, customClass, customStyle}) => {
  return (
    <div className={`menu ${customClass}`} style={customStyle}>
      {children}
    </div>
  );
};

Menu.defaultProps = {
  customClass: '',
  customStyle: {}
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
  customStyle: PropTypes.object
};

export default Menu;
