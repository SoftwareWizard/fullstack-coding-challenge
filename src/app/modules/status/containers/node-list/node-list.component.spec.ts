import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { getFacadeSpy } from '../../../../../../test/helper/facade-helper';
import { IFacadeSpy } from '../../../../../../test/helper/facade-spy.type';
import { NodeDetailComponent } from '../../components/node-detail/node-detail.component';
import { StatusFacade } from '../../store/status.facade';
import * as statusSelectors from '../../store/status.selectors';
import { NodeListComponent } from './node-list.component';

const TEST_NODES = [] as Node[];

describe('NodeList Component', () => {
  let spectator: Spectator<NodeListComponent>;
  let component: NodeListComponent;
  let statusFacadeSpy: IFacadeSpy<StatusFacade>;
  let nodeDetailComponentMock: NodeDetailComponent;

  const createComponent = createComponentFactory({
    component: NodeListComponent,
    mocks: [StatusFacade],
    declarations: [MockComponent(NodeDetailComponent)]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    // nodeDetailComponentMock = ngMocks.find<NodeDetailComponent>(
    //   spectator.fixture,
    //   'app-node-detail'
    // ).componentInstance;

    statusFacadeSpy = getFacadeSpy(spectator, StatusFacade, statusSelectors);
  });

  it('should create the component', async () => {
    expect(component).toBeTruthy();

    statusFacadeSpy.select.isSomeLoading = of(true);
    statusFacadeSpy.select.nodes = of([]);

    component.ngOnInit();

    expect(statusFacadeSpy.loadNodes.dispatch).toHaveBeenCalled();
  });

  it('should display spinner when loading', async () => {
    statusFacadeSpy.select.isSomeLoading = of(true);
    statusFacadeSpy.select.nodes = of([]);

    component.ngOnInit();
    spectator.detectComponentChanges();

    // find loading spinner
  });

  xit('should display nodes when loaded', async () => {
    statusFacadeSpy.select.isSomeLoading = of(false);
    statusFacadeSpy.select.nodes = of(TEST_NODES);

    // find app-node-details
  });

  xit('should dispatch toggleNode when expand', async () => {
    statusFacadeSpy.select.isSomeLoading = of(false);
    statusFacadeSpy.select.nodes = of(TEST_NODES);

    // find app-node-details
    // click expand

    expect(statusFacadeSpy.toggleNode.dispatch).toHaveBeenCalled();
  });
});
