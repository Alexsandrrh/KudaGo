import axios from 'axios';
import { stringify } from 'query-string';
import coco from '../utils/cocoURL';
import { GET_EVENTS_SUCCESS, GET_EVENTS_FAILED } from '../constants';

export function getEventsSuccess(payload) {
  return {
    type: GET_EVENTS_SUCCESS,
    payload
  };
}

export function getEventsFailed(payload) {
  return {
    type: GET_EVENTS_FAILED,
    payload
  };
}

export function getEvents(page = 1) {
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
          page,
          page_size: 20
        },
        { arrayFormat: 'comma' }
      );

      const response = await axios.get(
        coco(`https://kudago.com/public-api/v1.2/events/?${query}`)
      );
      const data = await response.data;

      dispatch(getEventsSuccess(data.results));
    } catch (e) {
      dispatch(getEventsFailed(e));
    }
  };
}

