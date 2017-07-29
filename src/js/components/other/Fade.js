import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const Fade = ({ children, inProp }) => (
 <CSSTransition
   in={inProp}
   timeout={5000}
   classNames="fade"
 >
  {children}
 </CSSTransition>
);

export default Fade;
