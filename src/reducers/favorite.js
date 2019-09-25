import {
  ADD_EVENT_TO_FAVORITE,
  DELETE_EVENT_FROM_FAVORITE
} from '../actions/favorite';

export function favorite(
  state = JSON.parse(localStorage.getItem('favorite') || '[]'),
  { type, payload }
) {
  switch (type) {
    case ADD_EVENT_TO_FAVORITE:
      return [...state, payload];
    case DELETE_EVENT_FROM_FAVORITE:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
}
