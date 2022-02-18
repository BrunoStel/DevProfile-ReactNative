/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskListAction, TaskListState } from './taskListTypes';

const INITIAL_STATE = {
  data: [],
};

export default function reducer(
  state = INITIAL_STATE,
  action: TaskListAction<any>,
): TaskListState {
  switch (action.type) {
    case 'UPDATE_TASK_LIST':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
