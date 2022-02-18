import { combineReducers } from 'redux';
import taskList from './taskList/taskListReducers';

export const Reducers = combineReducers({
  taskList,
});
