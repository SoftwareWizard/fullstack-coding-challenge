import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { SharedModule } from '../../../../shared/shared.module';
import { BlockListComponent } from '../../containers/block-list/block-list.component';
import { BlockDetailComponent } from '../block-detail/block-detail.component';
import { NodeStatusComponent } from '../node-status/node-status.component';
import { NodeDetailComponent } from './node-detail.component';

export default {
  component: NodeDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        NodeDetailComponent,
        NodeStatusComponent,
        BlockListComponent,
        BlockDetailComponent
      ],
      imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule
      ]
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
  url: 'https://thawing-springs-53971.herokuapp.com',
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
    isOnline: false
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
