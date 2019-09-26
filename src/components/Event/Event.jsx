import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Event.scss';
import EventPreview from '../EventPreview/EventPreview';
import EventPreviewCategory from '../EventPreview/EventPreviewCategory';
import EventPreviewAge from '../EventPreview/EventPreviewAge';
import EventPreviewBtnFavorite from '../EventPreview/EventPreviewBtnFavorite';

const Event = ({ event }) => {
  const { image, id, title, price, description, ageRestriction, category, publishedDate } = event;
  const link = `/event/${id}`;
  const correctDate = new Date(publishedDate * 1000).toISOString();

  return (
    <div className="event">
      <div className="event-head">
        <p className="event-head__publish-time">
          {moment(correctDate)
            .locale('ru')
            .fromNow()}
        </p>
        <p className="event-head__price">{price} руб.</p>
      </div>
      <div className="event-content">
        <Link to={link} className="event-content__link">
          <h3 className="event-content__title">{title}</h3>
          <EventPreview image={image}>
            <EventPreviewCategory category={category} />
            <EventPreviewAge age={ageRestriction} />
            <EventPreviewBtnFavorite object={event} eventID={id} />
          </EventPreview>
          <div
            className="event-content__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </Link>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Event;
