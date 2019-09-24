import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/events';
import PropTypes from 'prop-types';
import Event from '../../components/Event/Event';
import { clearReducerEvent } from '../../actions/event';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    this.props.getEvents(this.state.page);
  }

  render() {
    const { events } = this.props;

    const EVENTS = events.map(event => {
      return <Event data={event} key={`event-${event.id}`} />;
    });

    return (
      <div className="events-list" data-length-event={events.length}>
        <div className="event-list__container">{EVENTS}</div>
      </div>
    );
  }
}

EventsList.propTypes = {
  events: PropTypes.any.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearReducerEvent: () => dispatch(clearReducerEvent()),
    getEvents: page => dispatch(getEvents(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
