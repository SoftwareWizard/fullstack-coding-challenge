import { createFeatureSelector, createSelector } from '@ngrx/store';

import { statusFeatureKey, StatusState } from './status.state';

const selectStatus = createFeatureSelector<StatusState>(statusFeatureKey);
export const nodes = createSelector(selectStatus, state => state.nodes);
export const isSomeLoading = createSelector(nodes, state => state.some(item => item.isLoading));
