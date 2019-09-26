import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, className }) => {
  return (
    <svg className={`icon ${className}`}>
      <use xlinkHref={icon} />
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

export default Icon;
