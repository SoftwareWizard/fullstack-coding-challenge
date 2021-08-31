import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStatus from './status.reducer';

const selectStatusState = createFeatureSelector<fromStatus.StatusState>(
  fromStatus.statusFeatureKey
);

export const counter = createSelector(selectStatusState, state => state.counter);
