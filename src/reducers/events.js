import { SET_EVENTS_DATA, SET_FILTER_EVENT_DATA } from '../actions/events';

export function events(state = [], { type, payload }) {
  switch (type) {
    case SET_EVENTS_DATA:
      return payload;
    case SET_FILTER_EVENT_DATA:
      return payload;
    default:
      return state;
  }
}
