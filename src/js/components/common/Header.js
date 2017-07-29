import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

import MenuButton from './MenuButton';
import TopMenu from '../topMenu/TopMenu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsActive: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.displayMenuIfDesktop = this.displayMenuIfDesktop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.displayMenuIfDesktop);
    this.displayMenuIfDesktop();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.displayMenuIfDesktop);
  }

  displayMenuIfDesktop() {
    if (document.documentElement.clientWidth >= 1008) {
      this.state.menuIsActive === false ? this.setState({ menuIsActive: true }) : null;
    } else {
      this.state.menuIsActive === true ? this.setState({ menuIsActive: false }) : null;
    }
  }

  toggleMenu() {
    this.setState(prev => ({menuIsActive: !prev.menuIsActive}));
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="header">
          <div className="title-block">
            <NavLink to="/" exact><h1 className="title-header">On This Day</h1></NavLink>
          </div>
          <MenuButton toggleMenu={this.toggleMenu} menuIsActive={this.state.menuIsActive} />
        </div>
        <TopMenu menuIsActive={this.state.menuIsActive} />
      </div>
    );
  }
};

export default Header;
