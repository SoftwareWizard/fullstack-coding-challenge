import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { NodeStatusComponent } from '../node-status/node-status.component';
import { NodeDetailComponent } from './node-detail.component';

export default {
  component: NodeDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [NodeDetailComponent, NodeStatusComponent],
      imports: [CommonModule]
    })
  ],
  title: 'Status/Node Detail Component'
} as Meta;

const Template: Story<NodeDetailComponent> = args => ({
  props: {
    ...args
  }
});

const defaultNode = {
  id: 1,
  name: 'Test-name',
  url: 'Test-url',
  isLoading: false,
  isOnline: false,
  isExpanded: false
};

export const Online = Template.bind({});
Online.args = {
  node: {
    ...defaultNode,
    isOnline: true
  }
};

export const OnlineAndExpanded = Template.bind({});
OnlineAndExpanded.args = {
  node: {
    ...defaultNode,
    isOnline: true,
    isExpanded: true
  }
};

export const Offline = Template.bind({});
Offline.args = {
  node: {
    ...defaultNode,
    isOnline: false,
  }
};

export const OfflineAndExpanded = Template.bind({});
OfflineAndExpanded.args = {
  node: {
    ...defaultNode,
    isOnline: false,
    isExpanded: true
  }
};

export const Loading = Template.bind({});
Loading.args = {
  node: {
    ...defaultNode,
    isLoading: true
  }
};


