import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = ({ children, id, onChange }) => {
  return (
    <label className="checkbox-label" htmlFor={id}>
      <input className="checkbox-label__input" id={id} type="checkbox" onChange={onChange} />
      <span className="checkbox-label__text">{children}</span>
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
