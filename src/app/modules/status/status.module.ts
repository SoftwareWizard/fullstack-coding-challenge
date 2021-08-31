import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { BlockDetailComponent, NodeDetailComponent, NodeStatusComponent } from './components';
import { BlockListComponent, NodeListComponent } from './containers';
import { StatusRoutingModule } from './status.routing.module';
import { StatusEffects } from './store/status.effects';
import * as fromStatus from './store/status.reducer';
import { CounterComponent } from './components/counter/counter.component';

const COMPONENTS = [
  NodeListComponent,
  NodeDetailComponent,
  BlockListComponent,
  BlockDetailComponent,
  NodeStatusComponent
];

@NgModule({
  declarations: [...COMPONENTS, CounterComponent],
  imports: [
    CommonModule,
    SharedModule,
    StatusRoutingModule,
    StoreModule.forFeature(fromStatus.statusFeatureKey, fromStatus.reducer),
    EffectsModule.forFeature([StatusEffects])
  ]
})
export class StatusModule {}
