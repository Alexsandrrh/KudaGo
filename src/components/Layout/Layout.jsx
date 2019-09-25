import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

const Layout = ({ children, sidebar }) => {
  return (
    <div className="layout container">
      <div className="layout__body" onScroll={event => console.log(event)}>
        {children}
      </div>
      <div className="layout__sidebar" onClick={e => console.log(e)}>
        {sidebar}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired
};

export default Layout;
