import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({ children, className, onChange }) => {
  return (
    <select className={`select ${className}`} onChange={onChange}>
      {children}
    </select>
  );
};

Select.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Select;
