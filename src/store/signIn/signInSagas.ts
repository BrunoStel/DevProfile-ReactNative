import axios, { AxiosResponse } from 'axios';
import { all, takeLatest, put, call } from 'redux-saga/effects';
import { loadUserSucess, setIsError, setIsLoading } from './signInAction';
import { AcessToken, IUserPayload, SignInTypes } from './signInTypes';

const getUserToken = async (
  data: IUserPayload,
): Promise<AcessToken | undefined> => {
  try {
    const response = await axios.post(
      'https://clean-node-api-teste.herokuapp.com/api/login',
      data.payload,
    );
    return response.data.acessToken;
  } catch (error) {
    alert('Usuário ou senha incorreto');
  }
};

export function* loadUser(data: IUserPayload) {
  try {
    yield put(setIsError(false));
    yield put(setIsLoading(true));

    const acessToken: AxiosResponse<AcessToken> = yield call(
      getUserToken,
      data,
    );
    yield put(loadUserSucess(acessToken));
    yield put(setIsLoading(false));
  } catch (error) {
    yield put(setIsError(true));
    yield put(setIsLoading(false));
  }
}

export default all([takeLatest(SignInTypes.LOAD_REQUEST, loadUser)]);
