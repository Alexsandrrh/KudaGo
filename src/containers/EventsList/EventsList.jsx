import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Event from '../../components/Event/Event';

const EventsList = ({ events }) => {
  const EVENTS = events.map(event => {
    return <Event event={event} key={`event-key-${event.id}`} />;
  });

  return (
    <div className="events-list" data-length-event={events.length}>
      {EVENTS}
    </div>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EventsList;
