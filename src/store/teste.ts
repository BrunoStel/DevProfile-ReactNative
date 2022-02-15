import { createStore } from 'redux';

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function counterReducer(state = { name: 'square' }, action: any) {
  switch (action.type) {
    case false:
      return { name: 'square' };
    case true:
      return { name: 'check-square' };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.
