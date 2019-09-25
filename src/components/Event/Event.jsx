import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Event.scss';
import EventPreview from '../EventPreview/EventPreview';
import EventPreviewCategory from '../EventPreview/EventPreviewCategory';
import EventPreviewAge from '../EventPreview/EventPreviewAge';
import EventPreviewBtnFavorite from '../EventPreview/EventPreviewBtnFavorite';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      image,
      id,
      title,
      description,
      ageRestriction,
      category
    } = this.props.data;
    const link = `/event/${id}`;

    console.log();

    return (
      <div className="event">
        <div className="event-head">
          <p className="event-head__publish-time">
            {moment()
              .locale('ru')
              .fromNow()}
          </p>
        </div>
        <div className="event-content">
          <Link to={link} className="event-content__link">
            <h3 className="event-content__title">{title}</h3>
            <EventPreview image={image}>
              <EventPreviewCategory category={category} />
              <EventPreviewAge age={ageRestriction} />
              <EventPreviewBtnFavorite object={this.props.data} eventID={id} />
            </EventPreview>
            <div
              className="event-content__description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Link>
        </div>
      </div>
    );
  }
}

Event.propTypes = {};

export default Event;
