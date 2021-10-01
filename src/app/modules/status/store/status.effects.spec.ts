import { Observable, of, throwError } from 'rxjs';

import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator/jest';
import { getActions } from '@ngrx-ducks/core';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';

import { Status } from '../models';
import { Node } from '../models/node';
import { NodeService } from '../services/node.service';
import { StatusEffects } from './status.effects';
import { StatusFacade } from './status.facade';

const TEST_NODE_ID = 2;
const TEST_URL = 'http://testurl.com';
const TEST_STATUS = { node_name: 'testNodeName' } as Status;

const TEST_NODE = {
  url: TEST_URL,
  isOnline: undefined,
  isLoading: false,
  isExpanded: false,
  status: undefined
};

const TEST_NODES = [
  {
    id: 1,
    name: `Node 1`,
    ...TEST_NODE
  },
  {
    id: 2,
    name: `Node 2`,
    ...TEST_NODE
  }
] as Node[];

const actions = getActions(StatusFacade);

describe('Effects', function () {
  let spectator: SpectatorService<StatusEffects>;
  let actions$ = new Observable<Action>();
  let nodeServiceSpy: SpyObject<NodeService>;

  const createService = createServiceFactory({
    service: StatusEffects,
    mocks: [StatusFacade, NodeService],
    providers: [provideMockActions(() => actions$)]
  });

  beforeEach(() => {
    spectator = createService();
    nodeServiceSpy = spectator.inject(NodeService);
  });

  // xdescribe('loadNodes', () => {
  //   beforeEach(() => {
  //     const action = actions.loadNodes();
  //     actions$ = of(action);
  //   });

  //   it('should work', () => {
  //     const statusFacadeMock = getFacadeMockFromService(spectator, StatusFacade, statusSelectors);
  //     statusFacadeMock.select.nodes = TEST_NODES;
  //   });
  // });

  describe('loadNodeStatus', () => {
    beforeEach(() => {
      const action = actions.loadNodeStatus({ nodeId: TEST_NODE_ID, url: TEST_URL });
      actions$ = of(action);
    });

    it('should work for success', async () => {
      nodeServiceSpy.getStatus.mockReturnValue(of(TEST_STATUS));
      const expectedResult = actions.loadNodeStatusSuccess({ status: TEST_STATUS, nodeId: TEST_NODE_ID });

      const result = await spectator.service.loadNodeStatus$.toPromise();

      expect(nodeServiceSpy.getStatus).toHaveBeenCalledWith(TEST_URL);
      expect(result).toEqual(expectedResult);
    });

    it('should work for failure', async () => {
      nodeServiceSpy.getStatus.mockReturnValue(throwError('testError'));
      const expectedResult = actions.loadNodeStatusFailure({ nodeId: TEST_NODE_ID });

      const result = await spectator.service.loadNodeStatus$.toPromise();

      expect(nodeServiceSpy.getStatus).toHaveBeenCalledWith(TEST_URL);
      expect(result).toEqual(expectedResult);
    });
  });
});
