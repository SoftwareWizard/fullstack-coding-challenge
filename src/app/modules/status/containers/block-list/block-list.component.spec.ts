import { MockComponent, ngMocks } from 'ng-mocks';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

import { byText, createComponentFactory, Spectator, SpyObject } from '@ngneat/spectator/jest';

import { BlockDetailComponent } from '../../components/block-detail/block-detail.component';
import { Block } from '../../models';
import { NodeService } from '../../services/node.service';
import { BlockListComponent } from './block-list.component';

const TEST_URL = 'http://testurl.com';
const TEST_BLOCK = {
  id: '1',
  type: 'testType',
  attributes: {}
} as Block;

describe('BlockList Component', () => {
  let spectator: Spectator<BlockListComponent>;
  let component: BlockListComponent;
  let nodeServiceSpy: SpyObject<NodeService>;
  let toastrSpy: SpyObject<ToastrService>;

  const createComponent = createComponentFactory({
    component: BlockListComponent,
    declarations: [MockComponent(BlockDetailComponent)],
    mocks: [NodeService, ToastrService],
    detectChanges: false
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;

    nodeServiceSpy = spectator.inject(NodeService);
    toastrSpy = spectator.inject(ToastrService);
  });

  // app-block-detail

  it('should create the component', async () => {
    expect(component).toBeTruthy();
  });

  it('should load the blocks on Init', async () => {
    component.url = TEST_URL;
    nodeServiceSpy.getBlocks.mockReturnValue(of([TEST_BLOCK]).toPromise());

    await component.ngOnInit();
    spectator.detectChanges();
    spectator.fixture.whenStable();

    const blockDetailComponentMock = ngMocks
      .findAll<BlockDetailComponent>(spectator.fixture, 'app-block-detail')
      .map(item => item.componentInstance)[0];

    expect(nodeServiceSpy.getBlocks).toBeCalledWith(TEST_URL);
    expect(toastrSpy.success).toBeCalled();
    expect(blockDetailComponentMock.block).toEqual(TEST_BLOCK);
  });

  it('should show error toastr for failure', async () => {
    nodeServiceSpy.getBlocks.mockRejectedValue(new Error());

    await component.ngOnInit();
    spectator.detectChanges();
    spectator.fixture.whenStable();

    const blockDetailComponentMocks = ngMocks
      .findAll<BlockDetailComponent>(spectator.fixture, 'app-block-detail')
      .map(item => item.componentInstance)[0];

    expect(nodeServiceSpy.getBlocks).toBeCalled();
    expect(toastrSpy.success).not.toBeCalled();
    expect(toastrSpy.error).toBeCalled();
    expect(blockDetailComponentMocks).toBeUndefined();

    expect(spectator.query(byText('Loading blocks...'))).toBeTruthy();
  });
});
