import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import EventsList from '../../containers/EventsList/EventsList';

const FavoritePage = ({ events }) => {
  return (
    <Layout>
      <EventsList events={events} />
    </Layout>
  );
};

FavoritePage.propTypes = {
  events: PropTypes.array
};

export default connect(
  state => {
    return {
      events: state.favorite
    };
  },
  null
)(FavoritePage);
