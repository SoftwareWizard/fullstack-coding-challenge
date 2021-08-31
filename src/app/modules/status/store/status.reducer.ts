import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';

import * as StatusActions from './status.actions';

export const statusFeatureKey = 'status';

export interface StatusState {
  counter: number;
  isLoading: boolean;
}

export const initialState: StatusState = {
  counter: 0,
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(StatusActions.increment, (state: StatusState) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(StatusActions.decrement, state => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(StatusActions.reset, state => {
    return { ...state, counter: 0 };
  })
);
