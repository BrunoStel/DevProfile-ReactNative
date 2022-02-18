import { Task } from './taskListTypes';

export const addTaskList = (taskList: Task[]) => {
  return {
    type: 'UPDATE_TASK_LIST',
    payload: taskList,
  };
};
