import React, {Component} from "react";
import PropTypes from "prop-types";

const DayNavigationButton = ({navigate, customClass, faClass}) => {
    return (
      <div className={`day-navigation-button ${customClass}`} onClick={navigate}>
        <span className={`fa ${faClass}`} />
      </div>
    );
}

DayNavigationButton.defaultProps = {
  customClass: ''
}

DayNavigationButton.propTypes = {
  navigate: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  faClass: PropTypes.string.isRequired
};

export default DayNavigationButton;
