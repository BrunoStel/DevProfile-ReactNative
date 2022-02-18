import { Task, TaskListActionTypes } from './taskListTypes';

export const addTaskList = (taskList: Task[]) => {
  return {
    type: TaskListActionTypes.UPDATE_TASK_LIST,
    payload: taskList,
  };
};
