import { MockComponent, ngMocks } from 'ng-mocks';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { BlockListComponent } from '../../containers/block-list/block-list.component';
import { Node } from '../../models/node';
import { NodeStatusComponent } from '../node-status/node-status.component';
import { NodeDetailComponent } from './node-detail.component';

const TEST_NODE = {
  id: 1,
  name: 'testName',
  url: 'http://testUrl.com'
} as Node;

describe('NodeDetail Component', () => {
  let spectator: Spectator<NodeDetailComponent>;
  let component: NodeDetailComponent;

  const createComponent = createComponentFactory({
    component: NodeDetailComponent,
    declarations: [MockComponent(NodeStatusComponent), MockComponent(BlockListComponent)]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the component', async () => {
    expect(component).toBeTruthy();
  });

  it.each([true, false])('should show header and status', async (value: boolean) => {
    const testNode = { ...TEST_NODE, isLoading: value, isOnline: value };
    component.node = testNode;

    spectator.detectChanges();

    const nameElement = spectator.query('.name');
    const urlElement = spectator.query('.url');
    const nodeStatusComponentMock = ngMocks.find<NodeStatusComponent>(spectator.fixture, 'app-node-status')
      .componentInstance;

    expect(nameElement?.textContent).toBe(testNode.name);
    expect(urlElement?.textContent).toBe(testNode.url);

    expect(nodeStatusComponentMock.isOnline).toBe(value);
    expect(nodeStatusComponentMock.isLoading).toBe(value);
  });

  it('should emit node id event when toggle clicked', async () => {
    let output: number = 0;

    component.node = { ...TEST_NODE, isOnline: true, isLoading: false };
    spectator.output<number>('toggleExpand').subscribe(result => (output = result));

    spectator.detectChanges();

    const buttonElement = spectator.query('.expand-button') as Element;

    spectator.click(buttonElement);
    expect(component.isDisabled).toBeFalsy();
    expect(output).toBe(TEST_NODE.id);
  });

  it.each([
    [true, true, false],
    [true, false, false],
    [false, true, false],
    [false, false, true],
  ])(
    'should show disable button correct',
    async (isOnline: boolean, isExpanded: boolean, expectedIsDisabled: boolean) => {
      component.node = { ...TEST_NODE, isOnline, isExpanded };

      spectator.detectChanges();
      spectator.detectComponentChanges();

      const buttonElement = spectator.query('.expand-button') as HTMLButtonElement;
      expect(buttonElement.disabled).toBe(expectedIsDisabled);
    }
  );

  it('should show block list correct', async () => {
    component.node = { ...TEST_NODE, isOnline: true, isLoading: false, isExpanded: true };

    spectator.detectChanges();
    const blockListComponentMock = ngMocks.find<BlockListComponent>(spectator.fixture, 'app-block-list')
      .componentInstance;

    expect(blockListComponentMock).toBeTruthy();
    expect(blockListComponentMock.url).toBe(TEST_NODE.url);
  });
});
