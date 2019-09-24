import { combineReducers } from 'redux';
import { events } from './reducers/events';
import { event } from './reducers/event';
import { user } from './reducers/user';

export default combineReducers({
  events,
  event,
  user
});
