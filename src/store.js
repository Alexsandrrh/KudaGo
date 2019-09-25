import { combineReducers } from 'redux';
import { events } from './reducers/events';
import { favorite } from './reducers/favorite';

export default combineReducers({
  events,
  favorite
});
