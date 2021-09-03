import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { NodeStatusComponent } from './node-status.component';

export default {
  component: NodeStatusComponent,
  decorators: [
    moduleMetadata({
      declarations: [NodeStatusComponent],
      imports: [CommonModule]
    })
  ],
  title: 'Status/Node Status Component'
} as Meta;

const Template: Story<NodeStatusComponent> = args => ({
  props: {
    ...args
  }
});

export const Online = Template.bind({});
Online.args = {
  isLoading: false,
  isOnline: true
};

export const Offline = Template.bind({});
Offline.args = {
  isLoading: false,
  isOnline: false
};

export const Unknown = Template.bind({});
Unknown.args = {
  isLoading: false,
  isOnline: undefined
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
