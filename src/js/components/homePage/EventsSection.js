import React from "react";
import PropTypes from "prop-types";

import Frame from "../common/Frame";
import Fade from "../other/Fade";
import Event from "./Event";

const EventsSection = ({ title, sectionData, pageIsLoading, eventType, activeDate }) => {
  return (
    <Frame customClass="events-section" frameWrapperClass="events-section-wrapper">
      <div className="events-section-title-block">
        <h2 className="events-section-title">
          {title}
        </h2>
      </div>
      <Fade inProp={!pageIsLoading}>
        <div className="events-section-content">
          {sectionData.map((event, i) => (
            <Event key={i} content={event} eventType={eventType} activeDate={activeDate} />
          ))}
        </div>
      </Fade>
    </Frame>
  );
};

EventsSection.defaultProps = {
  sectionData: []
};

EventsSection.propTypes = {
  title: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
  pageIsLoading: PropTypes.bool.isRequired,
  sectionData: PropTypes.array,
  activeDate: PropTypes.instanceOf(Date)
};

export default EventsSection;
