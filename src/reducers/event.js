import {
  GET_EVENT_SUCCESS,
  GET_EVENT_FAILED,
  CLEAR_REDUCER_EVENT
} from '../constants';

export function event(state = {}, { type, payload }) {
  switch (type) {
    case CLEAR_REDUCER_EVENT:
      return payload;
    case GET_EVENT_SUCCESS:
      return payload;
    case GET_EVENT_FAILED:
      return false;
    default:
      return state;
  }
}
