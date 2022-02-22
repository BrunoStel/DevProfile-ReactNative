import { AxiosResponse } from 'axios';
import { AcessToken, IUser, SignInTypes } from './signInTypes';

export const loadUserRequest = (data: IUser) => {
  return {
    type: SignInTypes.LOAD_REQUEST,
    payload: data,
  };
};

export const loadUserSucess = (acessToken: AxiosResponse<AcessToken>) => {
  return {
    type: SignInTypes.LOAD_SUCESS,
    payload: acessToken,
  };
};

export const setIsError = (isLoading: boolean) => {
  return {
    type: SignInTypes.SET_IS_ERROR,
    payload: isLoading,
  };
};

export const setIsLoading = (isLoading: boolean) => {
  return {
    type: SignInTypes.SET_IS_LOADING,
    payload: isLoading,
  };
};

export const clearToken = () => {
  return {
    type: SignInTypes.CLEAR_TOKEN,
  };
};
