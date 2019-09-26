import { SET_EVENTS_DATA } from '../actions/events';

export function events(state = [], { type, payload }) {
  switch (type) {
    case SET_EVENTS_DATA:
      return [...payload];
    default:
      return state;
  }
}
