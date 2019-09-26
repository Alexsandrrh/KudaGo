import React from 'react';
import PropTypes from 'prop-types';
import getCategory from '../../utils/getCategory';

const EventPreviewCategory = ({ category }) => {
  if (category) {
    return (
      <div className="event-preview__category">
        <span className="event-preview__category-name">{getCategory(category)}</span>
      </div>
    );
  }
  return null;
};

EventPreviewCategory.propTypes = {
  category: PropTypes.string.isRequired
};

export default EventPreviewCategory;
