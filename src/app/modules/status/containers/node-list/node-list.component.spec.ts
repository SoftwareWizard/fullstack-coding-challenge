import { MockComponent, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { getFacadeMock } from '../../../../../../test/helper/facade-helper';
import { IFacadeMock } from '../../../../../../test/helper/facade-mock.type';
import { NodeDetailComponent } from '../../components/node-detail/node-detail.component';
import { StatusFacade } from '../../store/status.facade';
import * as statusSelectors from '../../store/status.selectors';
import { NodeListComponent } from './node-list.component';

const TEST_NODES = [] as Node[];

describe('NodeList Component', () => {
  let spectator: Spectator<NodeListComponent>;
  let component: NodeListComponent;
  let statusFacadeMock: IFacadeMock<StatusFacade>;
  let nodeDetailComponentMocks: NodeDetailComponent[];

  const createComponent = createComponentFactory({
    component: NodeListComponent,
    mocks: [StatusFacade],
    declarations: [MockComponent(NodeDetailComponent)]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    nodeDetailComponentMocks = ngMocks
      .findAll<NodeDetailComponent>(spectator.fixture, 'app-node-detail')
      .map(item => item.componentInstance);

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

    spectator.component.ngOnInit();
    spectator.detectComponentChanges();

    // find loading spinner
  });

  xit('should display nodes when loaded', async () => {
    statusFacadeMock.select.isSomeLoading = of(false);
    statusFacadeMock.select.nodes = of(TEST_NODES);

    // find app-node-details
  });

  xit('should dispatch toggleNode when expand', async () => {
    statusFacadeMock.select.isSomeLoading = of(false);
    statusFacadeMock.select.nodes = of(TEST_NODES);

    // find app-node-details
    // click expand

    expect(statusFacadeMock.toggleNode.dispatch).toHaveBeenCalled();
  });
});
