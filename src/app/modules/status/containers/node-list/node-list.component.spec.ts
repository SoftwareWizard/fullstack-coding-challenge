import { MockComponent, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { getFacadeMock } from '../../../../../../test/helper/facade-helper';
import { IFacadeMock } from '../../../../../../test/helper/facade-mock.type';
import { NodeDetailComponent } from '../../components/node-detail/node-detail.component';
import { Node } from '../../models/node';
import { StatusFacade } from '../../store/status.facade';
import * as statusSelectors from '../../store/status.selectors';
import { NodeListComponent } from './node-list.component';

const TEST_NODES = [
  {
    id: 1,
    isExpanded: false,
    isLoading: false,
    name: 'Test-Node',
    isOnline: true,
    url: 'http://www.testurl.com',
    status: 'Pending'
  }
] as Node[];

describe('NodeList Component', () => {
  let spectator: Spectator<NodeListComponent>;
  let component: NodeListComponent;
  let statusFacadeMock: IFacadeMock<StatusFacade>;

  const createComponent = createComponentFactory({
    component: NodeListComponent,
    mocks: [StatusFacade],
    declarations: [MockComponent(NodeDetailComponent)]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;

    statusFacadeMock = getFacadeMock(spectator, StatusFacade, statusSelectors);
  });

  it('should create the component', async () => {
    expect(component).toBeTruthy();

    statusFacadeMock.select.isSomeLoading = of(true);
    statusFacadeMock.select.nodes = of([]);

    spectator.component.ngOnInit();
    expect(statusFacadeMock.loadNodes.dispatch).toHaveBeenCalled();
  });

  it('should display spinner when loading', async () => {
    statusFacadeMock.select.isSomeLoading = of(true);
    statusFacadeMock.select.nodes = of([]);

    await spectator.fixture.whenStable();
    spectator.component.ngOnInit();
    spectator.detectComponentChanges();

    // find loading spinner
    const titleElement = spectator.query('h2');
    const spinnerElement = spectator.query('i');

    expect(titleElement).toHaveText('Nodes');
    expect(spinnerElement).toBeTruthy();
  });

  it('should display nodes when loaded', async () => {
    statusFacadeMock.select.isSomeLoading = of(false);
    statusFacadeMock.select.nodes = of(TEST_NODES);

    spectator.component.ngOnInit();
    spectator.detectComponentChanges();

    const nodeDetailComponentMocks = ngMocks
      .findAll<NodeDetailComponent>(spectator.fixture, 'app-node-detail')
      .map(item => item.componentInstance);

    expect(nodeDetailComponentMocks.length).toBe(TEST_NODES.length);
    expect(nodeDetailComponentMocks[0].node).toEqual(TEST_NODES[0]);
  });

  it('should dispatch toggleNode when expand', async () => {
    statusFacadeMock.select.isSomeLoading = of(false);
    statusFacadeMock.select.nodes = of(TEST_NODES);

    spectator.component.ngOnInit();
    spectator.detectComponentChanges();

    const nodeDetailComponentMocks = ngMocks
      .findAll<NodeDetailComponent>(spectator.fixture, 'app-node-detail')
      .map(item => item.componentInstance);

    const nodeDetailComponentMock = nodeDetailComponentMocks[0];

    nodeDetailComponentMock.toggleExpand.emit();
    await spectator.fixture.whenStable();
    spectator.detectComponentChanges();

    expect(statusFacadeMock.toggleNode.dispatch).toHaveBeenCalled();
  });
});
