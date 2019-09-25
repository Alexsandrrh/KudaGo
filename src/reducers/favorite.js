import {
  ADD_EVENT_TO_FAVORITE,
  DELETE_EVENT_FROM_FAVORITE
} from '../actions/favorite';

export function favorite(state = {}, { type, payload }) {
  switch (type) {
    case 'SET_DATA_FAVORITE':
      return payload;
    case ADD_EVENT_TO_FAVORITE:
      const addedData = { ...state };
      addedData[payload.id] = payload;
      return addedData;
    case DELETE_EVENT_FROM_FAVORITE:
      const deletedData = { ...state };
      delete deletedData[payload];
      return deletedData;
    default:
      return state;
  }
}
