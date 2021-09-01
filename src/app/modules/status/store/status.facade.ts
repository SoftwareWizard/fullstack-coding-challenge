import produce from 'immer';
import { environment } from 'src/environments/environment';

import { bindSelectors, createDuck, getReducer, StoreFacade } from '@ngrx-ducks/core';
import { MetaReducer } from '@ngrx/store';

import { Status } from '../models';
import * as selectors from './status.selectors';
import { initialStatusState, statusFeatureKey, StatusState } from './status.state';

@StoreFacade()
export class StatusFacade {
  select = bindSelectors(selectors);

  loadNodes = createDuck('[NodeList] Load Nodes');

  loadNodeStatus = createDuck(
    '[Effect] Load Node Status',
    (state: StatusState, payload: { nodeId: number; url: string }) =>
      produce(state, draft => {
        const index = payload.nodeId - 1;
        draft.nodes[index].isLoading = true;
      })
  );

  loadNodeStatusSuccess = createDuck(
    '[Effect] Load Node Success',
    (state: StatusState, payload: { status: Status; nodeId: number }) =>
      produce(state, draft => {
        const index = payload.nodeId - 1;
        draft.nodes[index].isLoading = false;
        draft.nodes[index].name = payload.status?.node_name
          ? payload.status.node_name
          : state.nodes[index].name;

        draft.nodes[index].isOnline = !!payload.status;
      })
  );

  loadNodeStatusFailure = createDuck(
    '[Effect] Load Node Failure',
    (state: StatusState, payload: { nodeId: number }) =>
      produce(state, draft => {
        const index = payload.nodeId - 1;
        draft.nodes[index].isLoading = false;
        draft.nodes[index].isOnline = false;
        draft.nodes[index].isExpanded = false;
      })
  );

  toggleNode = createDuck(
    '[Node List Component] Toggle Block Information',
    (state: StatusState, payload: { nodeId: number }) =>
      produce(state, draft => {
        const index = payload.nodeId - 1;
        draft.nodes[index].isExpanded = !state.nodes[index].isExpanded;
      })
  );
}

export const featureKey = statusFeatureKey;
export const metaReducers: MetaReducer<StatusState>[] = !environment.production ? [] : [];
export const statusReducer = getReducer(initialStatusState, StatusFacade);
