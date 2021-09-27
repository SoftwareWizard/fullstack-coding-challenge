import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';

import { Block, Status } from '../models';
import { API_SEGMENT, NodeService } from './node.service';

describe('NodeService', function () {
  let spectator: SpectatorHttp<NodeService>;
  let nodeService: NodeService;

  let testStatus: Status;
  let testBlocks: Block[];
  let responseStatus: Status;

  const createHttp = createHttpFactory(NodeService);

  beforeEach(() => {
    spectator = createHttp();
    nodeService = spectator.service;
  });

  it('should return node', () => {
    // arrange
    const TEST_URL = 'http://testurl.com';
    testStatus = {
      node_name: 'TEST NODE NAME'
    };

    // act
    nodeService.getStatus(TEST_URL).subscribe((response: Status) => responseStatus = response);

    // assert
    spectator.expectOne(`${TEST_URL}/${API_SEGMENT}/status`, HttpMethod.GET).flush(testStatus);
    expect(responseStatus.node_name).toBe(testStatus.node_name);
  });

  it('should return blocks', () => {});
});
