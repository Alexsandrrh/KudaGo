import events from '../json/events';
export const SET_EVENTS_DATA = 'SET_EVENTS_DATA';

export const getEvents = () => dispatch => {
  dispatch({ type: SET_EVENTS_DATA, payload: events });
};
