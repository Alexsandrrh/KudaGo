import React from 'react';
import PropTypes from 'prop-types';

const EventPreviewAge = ({ age }) => {
  if (age) {
    return <span className="event-preview__age">{age}</span>;
  }
  return null;
};

EventPreviewAge.propTypes = {
  age: PropTypes.string.isRequired
};

export default EventPreviewAge;
