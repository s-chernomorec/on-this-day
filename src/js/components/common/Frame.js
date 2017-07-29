import React from 'react';
import PropTypes from 'prop-types';

const Frame = ({children, customClass, customStyle, frameWrapperClass}) => {
  return (
    <div className={frameWrapperClass}>
      <div className={`frame ${customClass}`} style={customStyle}>
        {children}
      </div>
    </div>
  );
};

Frame.defaultProps = {
  customClass: '',
  customStyle: {},
  frameWrapperClass: ''
};

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
  customStyle: PropTypes.object,
  frameWrapperClass: PropTypes.string
};

export default Frame;
