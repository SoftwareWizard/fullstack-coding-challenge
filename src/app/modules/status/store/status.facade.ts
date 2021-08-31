import { environment } from 'src/environments/environment';

import { bindSelectors, createDuck, getReducer, StoreFacade } from '@ngrx-ducks/core';
import { MetaReducer } from '@ngrx/store';

import * as selectors from './status.selectors';
import { initialStatusState, statusFeatureKey, StatusState } from './status.state';

@StoreFacade()
export class StatusFacade {
  select = bindSelectors(selectors);

  increment = createDuck('[Counter Component] Increment', (state: StatusState) => ({
    ...state,
    counter: state.counter + 1
  }));

  decrement = createDuck('[Counter Component] Decrement', (state: StatusState) => ({
    ...state,
    counter: state.counter - 1
  }));

  reset = createDuck('[Counter Component] Reset', (state: StatusState) => ({
    ...state,
    counter: 0
  }));
}

export const featureKey = statusFeatureKey;
export const metaReducers: MetaReducer<StatusState>[] = !environment.production ? [] : [];
export const statusReducer = getReducer(initialStatusState, StatusFacade);
