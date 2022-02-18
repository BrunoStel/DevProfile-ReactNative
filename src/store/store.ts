import { createStore } from 'redux';
import { Reducers } from './rootReducers';

export const store = createStore(Reducers);
