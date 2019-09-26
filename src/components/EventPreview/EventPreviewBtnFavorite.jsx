import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../Common/Icon/Icon';
import Heart from '../../assets/icons/heart.svg';
import { handleEventToFavorite } from '../../actions/favorite';

const EventPreviewBtnFavorite = ({ isAdded, object, handleEventToFavorite }) => {
  const customClass = isAdded ? ' -added' : '';

  return (
    <button
      title="Добавить в избранное"
      type="submit"
      className={`event-preview__btn-favorite  ${customClass}`}
      onClick={event => {
        event.preventDefault();
        handleEventToFavorite(object);
        return false;
      }}
    >
      <span className="event-preview__text">Добавить в избранное</span>
      <Icon className="event-preview__icon" icon={Heart} />
    </button>
  );
};

EventPreviewBtnFavorite.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  eventID: PropTypes.number.isRequired,
  isAdded: PropTypes.bool.isRequired,
  object: PropTypes.objectOf(PropTypes.any).isRequired,
  handleEventToFavorite: PropTypes.func.isRequired
};

export default connect(
  (state, props) => {
    return {
      isAdded: !!state.favorite.find(item => item.id === props.eventID)
    };
  },
  dispatch => {
    return {
      handleEventToFavorite: object => dispatch(handleEventToFavorite(object))
    };
  }
)(EventPreviewBtnFavorite);
