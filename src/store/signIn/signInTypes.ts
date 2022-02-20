export enum SignInTypes {
  ASYNC_SIGNIN = 'ASYNC_SIGNIN',
}

export interface AcessToken {
  acessToken: string;
}

export type SignInState = {
  data: AcessToken;
};
export type SignInAction = {
  type: SignInTypes;
  payload: AcessToken;
};
