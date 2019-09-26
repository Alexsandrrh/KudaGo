import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventsList from '../../containers/EventsList/EventsList';
import Layout from '../../components/Layout/Layout';
import { getEvents } from '../../actions/events';
import Filter from '../../components/Filter/Filter';

class MainPage extends Component {
  componentDidMount() {
    const { getEvents } = this.props;
    getEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <Layout sidebar={<Filter />}>
        <EventsList events={events} />
      </Layout>
    );
  }
}

MainPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
