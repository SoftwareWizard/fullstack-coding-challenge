import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BlockDetailComponent, NodeDetailComponent, NodeStatusComponent } from './components';
import { BlockListComponent, NodeListComponent } from './containers';
import { StatusRoutingModule } from './status.routing.module';

const COMPONENTS = [
  NodeListComponent,
  NodeDetailComponent,
  BlockListComponent,
  BlockDetailComponent,
  NodeStatusComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, StatusRoutingModule]
})
export class StatusModule {}
