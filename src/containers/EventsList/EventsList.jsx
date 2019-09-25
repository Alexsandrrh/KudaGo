import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Event from '../../components/Event/Event';

const EventsList = ({ events }) => {
  const EVENTS = events.map(event => {
    return <Event data={event} key={`event-${event.id}`} />;
  });

  return (
    <div className="events-list" data-length-event={events.length}>
      {EVENTS}
    </div>
  );
};

EventsList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventsList;
