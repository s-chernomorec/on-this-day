import React from "react";
import PropTypes from "prop-types";

import helpers from "../../helpers";

const {parseEvent, LS} = helpers;

const Event = ({content, eventType, activeDate}) => {
  const event = parseEvent(content);

  const addToBookmarks = () => {
    const newBookmark = {
      date: activeDate,
      year: event.year,
      type: eventType,
      text: event.text
    };
    const bookmarks = LS.get('bookmarks') || [];
    const alreadyAdded = bookmarks.some(b => b.text === event.text);

    if (alreadyAdded === false) {
      LS.set('bookmarks', [...bookmarks, newBookmark])
    }
  }

  return ( event !== null
    ? <div className="event">
        <div className="event-head">
          <span className="event-date">{event.year}</span>
          <span className="fa fa-bookmark-o event-button-bookmark" onClick={addToBookmarks}></span>
        </div>
        <div className="event-content">{event.text}</div>
      </div>

    : null
  );
};

Event.propTypes = {
  content: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
  activeDate: PropTypes.instanceOf(Date)
};

export default Event;
