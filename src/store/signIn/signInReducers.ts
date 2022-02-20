import { SignInAction, SignInState, SignInTypes } from './signInTypes';

const INITIAL_STATE = {
  data: { acessToken: 'AcesstOKEN' },
};

export default function reducer(
  state = INITIAL_STATE,
  action: SignInAction,
): SignInState {
  switch (action.type) {
    case SignInTypes.ASYNC_SIGNIN:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
