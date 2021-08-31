import { Action, createReducer, on } from '@ngrx/store';
import * as StatusActions from './status.actions';

export const statusFeatureKey = 'status';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(StatusActions.loadStatuss, state => state),

);

