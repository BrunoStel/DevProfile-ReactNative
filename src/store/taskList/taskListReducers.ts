import {
  TaskListAction,
  TaskListActionTypes,
  TaskListState,
} from './taskListTypes';

const INITIAL_STATE = {
  data: [],
};

export default function reducer(
  state = INITIAL_STATE,
  action: TaskListAction,
): TaskListState {
  switch (action.type) {
    case TaskListActionTypes.UPDATE_TASK_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
