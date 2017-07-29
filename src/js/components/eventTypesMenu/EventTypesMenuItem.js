import React from "react";
import PropTypes from "prop-types";

const EventTypesMenuItem = ({item, itemIsActive, customStyle, toggleEventType}) => {
  const activeClass = 'event-types-menu-item-is-active';
  
  return (
    <div className={`event-types-menu-item ${itemIsActive ? activeClass : ''}`} style={customStyle} onClick={() => toggleEventType(item)}>
      <span>{item.toUpperCase()}</span>
    </div>
  );
};

EventTypesMenuItem.defaultProps = {
  itemIsActive: false,
  customStyle: {}
}

EventTypesMenuItem.propTypes = {
  item: PropTypes.string.isRequired,
  itemIsActive: PropTypes.bool,
  customStyle: PropTypes.object,
  toggleEventType: PropTypes.func.isRequired
}

export default EventTypesMenuItem;
