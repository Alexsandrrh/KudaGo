import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventPreview.scss';

class EventPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { images, children, style } = this.props;

    if (images) {
      const styleImage = {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url("${images[0].image}")`,
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
    } else {
      return null;
    }
  }
}

EventPreview.defaultProps = {
  style: {}
};

EventPreview.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  images: PropTypes.array.isRequired
};

export default EventPreview;
