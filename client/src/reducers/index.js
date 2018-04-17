import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import character from './character';

export default combineReducers({
  routing: routeReducer,
  character
});
