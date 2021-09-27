import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';

import { Block } from '../models';
import { BlockAttributes } from '../models/block-attributes';
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
    const testBlock: Block = {
      id: 'testId',
      type: 'block',
      attributes: {} as BlockAttributes
    };

    const testBlockData = {
      data: [testBlock]
    };

    // act
    const promise = nodeService.getBlocks(TEST_URL);

    // assert
    spectator.expectOne(`${TEST_URL}/${API_SEGMENT}/blocks`, HttpMethod.GET).flush(testBlockData);

    const result = await promise;
    expect(result).toEqual(testBlockData.data);
  });
});
