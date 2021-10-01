import { noopAction } from '../../../../../test';
import { Status } from '../models';
import { StatusFacade, statusReducer } from './status.facade';
import { StatusState } from './status.state';

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

const TEST_INITIAL_STATE = {
  nodes: [
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
  ]
} as StatusState;

describe('Reducer', () => {
  const facade: StatusFacade = new StatusFacade();

  xit('should return initial State', () => {
    const state = statusReducer(TEST_INITIAL_STATE, noopAction);
    expect(state).toMatchSnapshot('initalState');
  });

  it('should work for loadNodes', () => {
    const action = facade.loadNodes();
    const state = statusReducer(TEST_INITIAL_STATE, action);
    expect(state).toMatchSnapshot('loadNodes');
  });

  it('should work for loadNodeStatus', () => {
    const action = facade.loadNodeStatus({ nodeId: TEST_NODE_ID, url: TEST_URL });
    const state = statusReducer(TEST_INITIAL_STATE, action);
    expect(state).toMatchSnapshot('loadNodeStatus');
  });

  it('should work for loadNodeStatusSuccess', () => {
    const action = facade.loadNodeStatusSuccess({ status: TEST_STATUS, nodeId: TEST_NODE_ID });
    const state = statusReducer(TEST_INITIAL_STATE, action);
    expect(state).toMatchSnapshot('loadNodeStatusSuccess');
  });

  it('should work for loadNodeStatusFailure', () => {
    const action = facade.loadNodeStatusFailure({ nodeId: TEST_NODE_ID });
    const state = statusReducer(TEST_INITIAL_STATE, action);
    expect(state).toMatchSnapshot('loadNodeStatusFailure');
  });

  it('should work for toggleNode', () => {
    const action = facade.toggleNode({ nodeId: TEST_NODE_ID });
    const state = statusReducer(TEST_INITIAL_STATE, action);
    expect(state).toMatchSnapshot('toggleNode');
  });
});
