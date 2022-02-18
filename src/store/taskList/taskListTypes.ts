export enum TaskListActionTypes {
  UPDATE_TASK_LIST = 'UPDATE_TASK_LIST',
}

export interface Task {
  name: string;
  deadline: string;
  done: boolean;
  id: string;
}

export type TaskListState = {
  data: Task[];
};

export type TaskListAction<T> = {
  type: TaskListActionTypes;
  payload?: T;
};
