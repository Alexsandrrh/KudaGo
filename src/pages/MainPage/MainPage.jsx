import React, { Component } from 'react';
import EventsList from '../../containers/EventsList/EventsList';
import Layout from '../../components/Layout/Layout';
import PropTypes from 'prop-types';
import { getEvents } from '../../actions/events';
import { connect } from 'react-redux';
import Filter from '../../components/Filter/Filter';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <Layout sidebar={<Filter />}>
        <EventsList events={this.props.events} />
      </Layout>
    );
  }
}

MainPage.propTypes = {
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
    getEvents: () => dispatch(getEvents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
