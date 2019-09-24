import React from 'react';
import PropTypes from 'prop-types';
import getCategory from '../../utils/getCategory';

const EventPreviewCategory = ({ categories }) => {
  if (categories) {
    return (
      <div className="event-preview__category">
        <span className="event-preview__category-name">
          {getCategory(categories[0])}
        </span>
      </div>
    );
  } else {
    return null;
  }
};

EventPreviewCategory.propTypes = {
  categories: PropTypes.array.isRequired
};

export default EventPreviewCategory;
