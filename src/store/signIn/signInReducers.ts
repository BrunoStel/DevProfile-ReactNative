/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignInActionTypes, SignInTypes } from './signInTypes';

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  isError: false,
};

export default function reducer(
  state = INITIAL_STATE,
  action: SignInActionTypes,
): any {
  switch (action.type) {
    case SignInTypes.LOAD_REQUEST:
      return state;
    case SignInTypes.LOAD_SUCESS:
      return {
        ...state,
        data: action.payload,
      };
    case SignInTypes.CLEAR_TOKEN:
      return {
        ...state,
        data: '',
      };
    case SignInTypes.SET_IS_ERROR:
      return {
        ...state,
        data: '',
        isError: true,
      };
    case SignInTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
