import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
import Heart from '../../assets/icons/heart.svg';
import { handleEventToFavorite } from '../../actions/favorite';

const EventPreviewBtnFavorite = ({
  isAdded,
  object,
  handleEventToFavorite
}) => {
  const customClass = isAdded ? ' -added' : '';

  return (
    <button
      title="Добавить в избранное"
      type="submit"
      className={'event-preview__btn-favorite' + customClass}
      onClick={event => {
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
  eventID: PropTypes.number,
  isAdded: PropTypes.bool,
  object: PropTypes.object,
  handleEventToFavorite: PropTypes.func
};

export default connect(
  (state, props) => {
    return {
      isAdded: state.favorite.find(item => item.id === props.eventID)
        ? true
        : false
    };
  },
  dispatch => {
    return {
      handleEventToFavorite: object => dispatch(handleEventToFavorite(object))
    };
  }
)(EventPreviewBtnFavorite);
