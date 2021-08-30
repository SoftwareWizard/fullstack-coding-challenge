import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { createServiceFactory, SpectatorService, SpyObject } from '@ngneat/spectator';

import { INode } from '../models';
import { IBlock } from '../models/block';
import { Status } from '../models/status';
import { NodeService } from './node.service';

const TEST_NODES = [
  { id: 'test_id', name: 'test_name', url: 'test_url', state: Status.success },
  { id: 'test_id2', name: 'test_name2', url: 'test_url2', state: Status.failure }
] as INode[];

const TEST_BLOCKS = [
  { id: 'test_id', blockNumber: 1, nodeId: 'test_nodeId', description: 'test_description' }
] as IBlock[];

describe('NodeService', () => {
  let spectator: SpectatorService<NodeService>;
  let httpSpy: SpyObject<HttpClient>;

  const createService = createServiceFactory({
    service: NodeService,
    mocks: [HttpClient]
  });

  beforeEach(() => {
    spectator = createService();
    httpSpy = spectator.inject(HttpClient);
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('getNodes should work', async () => {
    httpSpy.get.and.returnValue(of(TEST_NODES));
    const result = await spectator.service.getNodes();

    expect(result).toEqual(TEST_NODES);
  });

  it('getBlocksByNodeId should work', async () => {
    const testId = '1';
    httpSpy.get.and.returnValue(of(TEST_BLOCKS));
    const result = await spectator.service.getBlocksByNodeId(testId);

    expect(result).toEqual(TEST_BLOCKS);
  });
});
