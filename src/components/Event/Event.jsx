import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Event.scss';
import upperCaseTitle from '../../utils/upperCaseTitle';
import EventPreview from '../EventPreview/EventPreview';
import EventPreviewCategory from '../EventPreview/EventPreviewCategory';
import Skeleton from "react-loading-skeleton";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      images,
      id,
      title,
      description,
      categories,
      publication_date
    } = this.props.data;
    const link = `/event/${id}`;

    return (
      <div className="event">
        <div className="event-head">
          <Link to={link} className="event-head__link">
            <EventPreview images={images}>
              <EventPreviewCategory categories={categories} />
            </EventPreview>
          </Link>
        </div>
        <div className="event-content">
          <Link className="event-content__link" to={link}>
            <span className="event-content__title">
              {upperCaseTitle(title) || <Skeleton/>}
            </span>
          </Link>
          <div
            className="event-content__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    );
  }
}

Event.propTypes = {};

export default Event;
