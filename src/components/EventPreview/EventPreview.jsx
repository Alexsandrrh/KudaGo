import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventPreview.scss';

class EventPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { image, children, style } = this.props;

    if (image) {
      const styleImage = {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url("${image}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        ...style
      };
      return (
        <div className="event-preview">
          <figure className="event-preview__image" style={styleImage}>
            {children}
          </figure>
        </div>
      );
    }
    return null;
  }
}

EventPreview.defaultProps = {
  style: {},
  children: undefined,
  image: undefined
};

EventPreview.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  image: PropTypes.string
};

export default EventPreview;
