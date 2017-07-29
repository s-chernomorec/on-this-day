import React, {Component} from "react";
import PropTypes from "prop-types";

const DayContent = ({date, shouldDisplayDescription, description}) => {
    return (
      <div className="day-content">
        <div className="day-header-wrapper">
          <h2 className="day-header">{date}</h2>
        </div>
        <div className="day-description" style={{display: shouldDisplayDescription === true ? 'block' : 'none'}}>
          <p>{description}</p>
        </div>
      </div>
    );
}
DayContent.propTypes = {
  date: PropTypes.string.isRequired,
  shouldDisplayDescription: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
};

export default DayContent;
