import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Block } from '../../models';
import { BlockDetailComponent } from './block-detail.component';

const TEST_BLOCK = {
  id: '1',
  type: 'Block',
  attributes: {
    data: 'testData',
    index: 12,
  }
} as Block;

describe('BlockDetail Component', () => {
  let spectator: Spectator<BlockDetailComponent>;
  let component: BlockDetailComponent;

  const createComponent = createComponentFactory({
    component: BlockDetailComponent
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the component', async () => {
    expect(component).toBeTruthy();
  });

  it('should show header and data', async () => {
    component.block = TEST_BLOCK;

    spectator.detectChanges();

    const headerElement = spectator.query('.block-detail-header');
    const descriptionElement = spectator.query('.block-detail-description');

    expect(headerElement?.textContent).toBe('012');
    expect(descriptionElement?.textContent).toBe(TEST_BLOCK.attributes.data);
  });
});
