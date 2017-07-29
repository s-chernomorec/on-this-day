import React from "react";
import PropTypes from "prop-types";

import helpers from "../../helpers";

const {monthAsString, LS} = helpers;

const Bookmark = ({item, removeBookmark}) => {
  const date = new Date(item.date);
  const formatedDate = `${date.getDate()} ${monthAsString(date.getMonth())}, ${item.year}`;

  const remove = () => {
    removeBookmark(item.text);
  }

  return (
    <div className="bookmark">
      <div className="bookmark-head">
        <span className="bookmark-date">{formatedDate}</span>
        <span className="bookmark-type">{item.type}</span>
        <div className="bookmark-remove-button">
          <span className="fa fa-bookmark" onClick={remove}></span>
        </div>
      </div>
      <div className="bookmark-content">{item.text}</div>
    </div>
  );
};

Bookmark.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  removeBookmark: PropTypes.func.isRequired
}

export default Bookmark;
