import React from 'react';
import PropTypes from 'prop-types';

const FilterSection = ({ children, title }) => {
  return (
    <div className="filter-section">
      <h4 className="filter-section__title">{title}</h4>
      <div className="filter-section__body">{children}</div>
    </div>
  );
};

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FilterSection;
