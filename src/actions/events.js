import events from '../json/events';
import { FROM_LOW_TO_HIGH, NOT_STATED, FROM_HIGH_TO_LOW } from '../contants';

export const SET_EVENTS_DATA = 'SET_EVENTS_DATA';

export const getEvents = () => dispatch => {
  dispatch({ type: SET_EVENTS_DATA, payload: events });
};

function getEventsForCategories(categories) {
  if (categories.length !== 0) {
    const result = [];

    for (let i = 0; i < categories.length; i += 1) {
      const category = categories[i];

      for (let j = 0; j < events.length; j += 1) {
        const event = events[j];

        if (event.category === category) {
          result.push(event);
        }
      }
    }
    return result;
  }
  return events;
}

function sortByPriceToHigh(categories) {
  return categories.sort((a, b) => {
    const aPrice = a.price;
    const bPrice = b.price;

    if (aPrice > bPrice) {
      return 1;
    }
    if (aPrice < bPrice) {
      return -1;
    }
    return 0;
  });
}

function sortEventsBySortType(categories, type) {
  switch (type) {
    case NOT_STATED:
      return categories;
    case FROM_HIGH_TO_LOW:
      return sortByPriceToHigh(categories).reverse();
    case FROM_LOW_TO_HIGH:
      return sortByPriceToHigh(categories);
    default:
      return [];
  }
}

export const getFilterEvents = ({ categories, sortType }) => dispatch => {
  dispatch({
    type: SET_EVENTS_DATA,
    payload: sortEventsBySortType(getEventsForCategories(categories), sortType)
  });
};
