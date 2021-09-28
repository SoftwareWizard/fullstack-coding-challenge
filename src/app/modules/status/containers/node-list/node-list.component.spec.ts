import { MockComponent, MockService } from 'ng-mocks';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { NodeDetailComponent } from '../../components/node-detail/node-detail.component';
import { StatusFacade } from '../../store/status.facade';
import { NodeListComponent } from './node-list.component';

describe('NodeList Component', () => {
  let spectator: Spectator<NodeListComponent>;
  let component: NodeListComponent;
  let statusFacadeSpy: StatusFacade;

  const createComponent = createComponentFactory({
    component: NodeListComponent,
    providers: [MockService(StatusFacade)],
    declarations: [MockComponent(NodeDetailComponent)]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the component', async () => {
    expect(component).toBeTruthy();
  });

  it('should display spinner when loading', async () => {
    // isSomeLoading$ = true;
    // nodes = []
    // find loading spinner
  });

  it('should display nodes when loaded', async () => {
    // isSomeLoading$ = false;
    // nodes = [...]
    // find app-node-details
  });

  it('should dispatch toggleNode when expand', async () => {
    // isSomeLoading$ = false;
    // nodes = [...]
    // find app-node-details
    // click expand
    // expect dispatch event
  });
});
