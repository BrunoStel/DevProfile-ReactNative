import { AcessToken, SignInTypes } from './signInTypes';

export const updateToken = (acessToken: AcessToken) => {
  return {
    type: SignInTypes.ASYNC_SIGNIN,
    payload: acessToken,
  };
};
