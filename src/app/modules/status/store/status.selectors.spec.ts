import { Node } from '../models/node';
import * as statusSelectors from './status.selectors';

const TEST_NODE = {
  id: 47,
  url: 'http://testurl.com',
  name: 'testNode'
} as Node;

describe('Selectors', function () {
  it('should return nodes', () => {
    expect(statusSelectors.nodes.projector({ nodes: [TEST_NODE] })).toEqual([TEST_NODE]);
  });

  it('should return isSomeLoading', () => {
    expect(statusSelectors.isSomeLoading.projector([{ ...TEST_NODE, isLoading: true }])).toBe(true);
    expect(statusSelectors.isSomeLoading.projector([{ ...TEST_NODE, isLoading: false }])).toBe(false);
  });
});
