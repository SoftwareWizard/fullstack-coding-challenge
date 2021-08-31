import { environment } from 'src/environments/environment';

import { bindSelectors, getReducer, StoreFacade } from '@ngrx-ducks/core';
import { MetaReducer } from '@ngrx/store';

import * as selectors from './status.selectors';
import { initialStatusState, statusFeatureKey, StatusState } from './status.state';

@StoreFacade()
export class StatusFacade {
  select = bindSelectors(selectors);
}

export const featureKey = statusFeatureKey;
export const metaReducers: MetaReducer<StatusState>[] = !environment.production ? [] : [];
export const statusReducer = getReducer(initialStatusState, StatusFacade);
