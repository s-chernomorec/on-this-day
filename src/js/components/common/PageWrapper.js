import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({children, customClass, customStyle}) => {
  return (
    <div className={`wrapper ${customClass}`} style={customStyle}>
      {children}
    </div>
  );
};

PageWrapper.defaultProps = {
  customClass: '',
  customStyle: {}
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
  customStyle: PropTypes.object
};

export default PageWrapper;
