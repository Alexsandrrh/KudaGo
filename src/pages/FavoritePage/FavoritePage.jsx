import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import EventsList from '../../containers/EventsList/EventsList';
import MessageBlock from '../../components/MessageBlock/MessageBlock';

const FavoritePage = ({ events }) => {
  return (
    <Layout>
      {events.length !== 0 ? (
        <EventsList events={events} />
      ) : (
        <MessageBlock title="У вас нет никаких событий в избранном :-)">
          <p>
            {`Чтобы добавить событие в избранное перейдите в список с `}
            <Link to="/">событиями</Link>
          </p>
        </MessageBlock>
      )}
    </Layout>
  );
};

FavoritePage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(
  state => {
    return {
      events: state.favorite
    };
  },
  null
)(FavoritePage);
