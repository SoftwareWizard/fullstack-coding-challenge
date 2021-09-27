import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';

import { Block } from '../models';
import { API_SEGMENT, NodeService } from './node.service';

describe('NodeService', () => {
  let spectator: SpectatorHttp<NodeService>;
  let nodeService: NodeService;

  const TEST_URL = 'http://testurl.com';

  const createHttp = createHttpFactory(NodeService);

  beforeEach(() => {
    spectator = createHttp();
    nodeService = spectator.service;
  });

  it('should return node', () => {
    // act
    nodeService.getStatus(TEST_URL).subscribe();

    // assert
    spectator.expectOne(`${TEST_URL}/${API_SEGMENT}/status`, HttpMethod.GET);
  });

  it('should return blocks', async () => {
    // arrange
    let testBlocks: Block[];

    // act
    await nodeService.getBlocks(TEST_URL);

    // assert
    spectator.expectOne(`${TEST_URL}/${API_SEGMENT}/blocks`, HttpMethod.GET).request
  });
});
