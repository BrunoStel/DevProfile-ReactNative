import { AxiosResponse } from 'axios';

export enum SignInTypes {
  LOAD_SUCESS = 'LOAD_SUCESS',
  LOAD_REQUEST = 'LOAD_REQUEST',
  CLEAR_TOKEN = 'CLEAR_TOKEN',
  SET_IS_ERROR = 'SET_IS_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface AcessToken {
  acessToken: string;
}

export type SignInState = {
  readonly data: AcessToken;
  readonly loading: boolean;
  readonly error: boolean;
};

export interface IUser {
  email: string;
  password: string;
}

export interface IUserPayload {
  payload: { email: string; password: string };
}

export type UserPayload = {
  payload?: IUser | undefined;
  data?: IUser | undefined;
  acessToken?: AxiosResponse<AcessToken>;
  isLoading?: boolean;
};

export type SignInActionTypes = {
  type: SignInTypes;
  payload?: UserPayload;
};
