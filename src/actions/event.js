import axios from 'axios';
import { stringify } from 'query-string';
import coco from '../utils/cocoURL';
import {
  GET_EVENT_FAILED,
  GET_EVENT_SUCCESS,
  CLEAR_REDUCER_EVENT
} from '../constants';

export function getEventSuccess(payload) {
  return {
    type: GET_EVENT_SUCCESS,
    payload
  };
}

export function getEventFailed(payload) {
  return {
    type: GET_EVENT_FAILED,
    payload
  };
}

export function getEvent(id) {
  return async dispatch => {
    try {
      const query = stringify(
        {
          fields: [
            'id',
            'title',
            'description',
            'images',
            'price',
            'location',
            'dates',
            'publication_date',
            'categories',
            'place'
          ],
          expand: ['images', 'place', 'location', 'dates']
        },
        { arrayFormat: 'comma' }
      );

      const response = await axios.get(
        coco(`https://kudago.com/public-api/v1.4/events/${id}/?${query}`)
      );
      const data = await response.data;

      dispatch(getEventSuccess(data));
    } catch (e) {
      dispatch(getEventFailed(e));
    }
  };
}

export function clearReducerEvent() {
  return dispatch =>
    dispatch({
      type: CLEAR_REDUCER_EVENT,
      payload: { images: [] }
    });
}
