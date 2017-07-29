import React from "react";
import PropTypes from "prop-types";

import EventsSection from "./EventsSection";
import helpers from "../../helpers";

const {capitalizeFirstLetter} = helpers;

const EventsBlock = ({data, activeEventTypes, pageIsLoading, activeDate}) => {
  return (
    <div className="events-block-wrapper">
      {activeEventTypes.map((item, i) => (
        <EventsSection
          title={capitalizeFirstLetter(item)}
          eventType={item}
          sectionData={data[item]}
          pageIsLoading={pageIsLoading}
          activeDate={activeDate}
          key={i}
        />
      ))}
    </div>
  );
};

EventsBlock.defaultProps = {
  data: {}
};

EventsBlock.propTypes = {
  data: PropTypes.object,
  activeEventTypes: PropTypes.array.isRequired,
  pageIsLoading: PropTypes.bool.isRequired,
  activeDate: PropTypes.instanceOf(Date)
};

export default EventsBlock;
