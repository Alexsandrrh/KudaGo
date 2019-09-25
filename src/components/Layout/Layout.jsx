import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

const Layout = ({ children, sidebar }) => {
  return (
    <div className="layout container">
      <div className="layout__body">{children}</div>
      <div className="layout__sidebar">{sidebar}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.node
};

export default Layout;
