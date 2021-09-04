import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { BlockDetailComponent } from './block-detail.component';

export default {
  component: BlockDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [BlockDetailComponent],
      imports: [CommonModule]
    })
  ],
  title: 'Status/Blocks/Block Detail Component'
} as Meta;

const Template: Story<BlockDetailComponent> = args => ({
  props: {
    ...args,
  }
});

export const Default = Template.bind({});
Default.args = {
  block: {
    id: '1',
    type: 'test-type',
    attributes: {
      index: 321,
      data:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, doloribus. Consequuntur natus libero saepe! Excepturi voluptatibus voluptatem quidem dolore odio?',
      'previous-hash': 'test-previous-hash',
      hash: 'test-hash',
      timestamp: 47
    }
  }
};
