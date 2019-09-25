import { combineReducers } from 'redux';
import { events } from './reducers/events';
import { favorite } from './reducers/favorite';
import { categories } from './reducers/categories';

export default combineReducers({
  events,
  favorite,
  categories
});
