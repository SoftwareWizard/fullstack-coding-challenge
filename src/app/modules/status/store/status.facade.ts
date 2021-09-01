import { environment } from 'src/environments/environment';

import { bindSelectors, createDuck, getReducer, StoreFacade } from '@ngrx-ducks/core';
import { MetaReducer } from '@ngrx/store';

import { Status } from '../models';
import * as selectors from './status.selectors';
import { initialStatusState, statusFeatureKey, StatusState } from './status.state';

@StoreFacade()
export class StatusFacade {
  select = bindSelectors(selectors);

  loadNodes = createDuck('[NodeList] Load Node Status');

  loadNodeStatus = createDuck(
    '[Effect] Load Node Status',
    (state: StatusState, payload: { nodeId: number }) => {
      state.nodes[payload.nodeId - 1].isLoading = true;
      return { ...state };
    }
  );

  loadNodeStatusSuccess = createDuck(
    '[Effect] Load Node Success',
    (state: StatusState, payload: { status: Status; nodeId: number }) => {
      state.nodes[payload.nodeId - 1].isLoading = false;
      state.nodes[payload.nodeId - 1].name = payload.status?.node_name
        ? payload.status.node_name
        : state.nodes[payload.nodeId - 1].name;

      state.nodes[payload.nodeId - 1].isOnline = !!payload.status;

      return { ...state };
    }
  );

  loadNodeStatusFailure = createDuck(
    '[Effect] Load Node Failure',
    (state: StatusState, payload: { nodeId: number }) => {
      state.nodes[payload.nodeId - 1].isLoading = false;
      state.nodes[payload.nodeId - 1].isOnline = false;
      state.nodes[payload.nodeId - 1].isExpanded = false;

      return { ...state };
    }
  );

  toggleNode = createDuck(
    '[Node List Component] Toggle Block Information',
    (state: StatusState, payload: { nodeId: number }) => {
      state.nodes[payload.nodeId - 1].isExpanded = !state.nodes[payload.nodeId - 1].isExpanded;

      return { ...state };
    }
  );
}

export const featureKey = statusFeatureKey;
export const metaReducers: MetaReducer<StatusState>[] = !environment.production ? [] : [];
export const statusReducer = getReducer(initialStatusState, StatusFacade);
