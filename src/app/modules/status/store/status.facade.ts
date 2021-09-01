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
    (state: StatusState, payload: number) => {
      const node = state.nodes.find(item => item.id == payload);

      if (node) {
        node.isLoading = true;
      }

      return { ...state };
    }
  );

  loadNodeStatusSuccess = createDuck(
    '[Effect] Load Node Success',
    (state: StatusState, payload: { status: Status; nodeId: number }) => {
      const node = state.nodes.find(item => item.id == payload.nodeId);

      if (node) {
        node.isLoading = false;
        node.name = payload.status?.node_name ? payload.status.node_name : node.name;
        node.isOnline = !!payload.status;
      }

      return { ...state };
    }
  );

  loadNodeStatusFailure = createDuck(
    '[Effect] Load Node Failure',
    (state: StatusState, payload: { nodeId: number }) => {
      const node = state.nodes.find(item => item.id == payload.nodeId);

      if (node) {
        node.isLoading = false;
        node.isOnline = false;
        node.isExpanded = false;
      }

      return { ...state };
    }
  );

  toggleNode = createDuck(
    '[Node List Component] Toggle Block Information',
    (state: StatusState, payload: number) => {
      const node = state.nodes.find(item => item.id == payload);

      if (node) {
        node.isExpanded = !node.isExpanded;
      }

      return { ...state };
    }
  );
}

export const featureKey = statusFeatureKey;
export const metaReducers: MetaReducer<StatusState>[] = !environment.production ? [] : [];
export const statusReducer = getReducer(initialStatusState, StatusFacade);
