import { combineReducers } from 'redux';
import taskList from './taskList/taskListReducers';
import signIn from './signIn/signInReducers';

export const Reducers = combineReducers({
  taskList,
  signIn,
});
