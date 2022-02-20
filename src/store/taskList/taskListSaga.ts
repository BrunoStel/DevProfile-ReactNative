import { all, takeLatest, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { TaskListActionTypes } from './taskListTypes';

interface IData {
  email: string;
  password: string;
}

export function* signIn({ data: IData }) {
  try {
    const response = yield axios.post(
      'https://clean-node-api-teste.herokuapp.com/api/login',
      data,
    );
    yield put(loadProductsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(TaskListActionTypes.ASYNC_UPDATE_TASK_LIST, signIn),
]);
