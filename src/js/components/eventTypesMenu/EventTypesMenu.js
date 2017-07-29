import React from "react";
import PropTypes from "prop-types";

import Menu from "../common/Menu";
import EventTypesMenuItem from "./EventTypesMenuItem";

const EventTypesMenu = ({activeEventTypes, toggleEventType}) => {
  const menuItems = ['events', 'births', 'deaths'];
  const menuItemsStyle = {width: 100 / menuItems.length + '%'};

  return (
    <Menu customClass="event-types-menu">
      {
        menuItems.map((item, i) => (
          <EventTypesMenuItem
            key={i}
            item={item}
            customStyle={menuItemsStyle}
            itemIsActive={activeEventTypes.some(active => active === item)}
            toggleEventType={() => toggleEventType(item)}
          />
        ))
      }
    </Menu>
  );
};

EventTypesMenu.propTypes = {
  activeEventTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleEventType: PropTypes.func.isRequired,
}

export default EventTypesMenu;
