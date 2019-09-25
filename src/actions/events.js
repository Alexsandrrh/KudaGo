import events from '../json/events';
export const SET_EVENTS_DATA = 'SET_EVENTS_DATA';
export const SET_FILTER_EVENT_DATA = 'SET_EVENTS_DATA';

export const getEvents = () => dispatch => {
  dispatch({ type: SET_EVENTS_DATA, payload: events });
};

export const getFilterEvents = categories => dispatch => {
  if (categories.length !== 0) {
    let result = [];

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];

      for (let j = 0; j < events.length; j++) {
        const event = events[j];

        if (event.category === category) {
          result.push(event);
        }
      }
    }
    dispatch({ type: SET_FILTER_EVENT_DATA, payload: result });
  } else {
    dispatch({ type: SET_FILTER_EVENT_DATA, payload: events });
  }
};
