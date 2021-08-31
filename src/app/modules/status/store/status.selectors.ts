import { createFeatureSelector } from '@ngrx/store';

import * as fromStatus from './status.reducer';

export const selectStatusState = createFeatureSelector<fromStatus.State>(
  fromStatus.statusFeatureKey
);
