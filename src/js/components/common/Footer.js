import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  return (
    <div className="footer">
      <div className="footer-text">Data taken from Wikipedia API</div>
      <div className="footer-github">
        <a href="https://github.com">
          <span className="fa fa-github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
