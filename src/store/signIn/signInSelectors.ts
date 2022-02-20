import { AcessToken } from './signInTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signInSelector = (state: any): AcessToken =>
  state.signIn.data.acessToken;
