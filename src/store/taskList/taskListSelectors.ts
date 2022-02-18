import { Task } from './taskListTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const taskListSelector = (state: any): Task[] => state.taskList.data;
