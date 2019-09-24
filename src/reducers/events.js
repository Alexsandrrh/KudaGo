import { GET_EVENTS_SUCCESS, GET_EVENTS_FAILED } from '../constants';

export function events(state = [{}, {}, {}, {}], { type, payload }) {
  switch (type) {
    case GET_EVENTS_SUCCESS:
      return payload;
    case GET_EVENTS_FAILED:
      return false;
    default:
      return state;
  }
}
