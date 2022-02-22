/* eslint-disable @typescript-eslint/no-explicit-any */
import { AcessToken } from './signInTypes';

export const tokenSelector = (state: any): AcessToken => state.signIn.data;
export const loadingSelector = (state: any): AcessToken =>
  state.signIn.isLoading;
