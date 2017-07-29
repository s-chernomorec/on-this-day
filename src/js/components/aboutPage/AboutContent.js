import React from 'react';

import Frame from '../common/Frame';

const AboutContent = () => {
  return (
    <Frame frameWrapperClass="about-content-wrapper" customClass="about-content">
      <p className="about-paragraph">This small app uses Wikipedia API to fetch data about historical events that happened on this day. Built with mobile-First approach.</p>

      <a href="https://github.com/s-chernomorec/on-this-day" className="about-link">Sorce Code</a>

      <p className="about-paragraph">Technologies and frameworks used</p>

      <ul className="about-list">
        <li>React</li>
        <li>React Router</li>
        <li>SASS</li>
        <li>Webpack</li>
        <li>Babel</li>
      </ul>
    </Frame>
  );
};

export default AboutContent;
