import { createFeatureSelector } from '@ngrx/store';

import { statusFeatureKey, StatusState } from './status.state';

const selectStatus = createFeatureSelector<StatusState>(statusFeatureKey);
