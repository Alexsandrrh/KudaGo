import { SET_EVENTS_DATA } from '../actions/events';

export default function(state = [], { type, payload }) {
  switch (type) {
    case SET_EVENTS_DATA:
      return [...payload];
    default:
      return state;
  }
}
