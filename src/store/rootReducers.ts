import { combineReducers } from 'redux';
import taskList from './taskList/taskListReducers';
import signIn from './signIn/signInReducers';
import user from './user/userReducers';

export const Reducers = combineReducers({
  taskList,
  signIn,
  user,
});
