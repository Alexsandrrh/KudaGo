import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <div className="header-container container">
          <div className="header-container__menu">
            <NavLink className="header-container__nav" exact to="/">
              <span className="header-container__nav-text">События</span>
            </NavLink>
            <NavLink className="header-container__nav" to="/favorite">
              <span className="header-container__nav-text">Избранное</span>
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
