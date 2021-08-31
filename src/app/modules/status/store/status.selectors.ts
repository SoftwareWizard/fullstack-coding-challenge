import { createFeatureSelector, createSelector } from '@ngrx/store';

import { statusFeatureKey, StatusState } from './status.state';

const selectStatus = createFeatureSelector<StatusState>(statusFeatureKey);
export const counter = createSelector(selectStatus, state => state.counter);
