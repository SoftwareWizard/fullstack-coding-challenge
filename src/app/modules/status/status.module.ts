import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { BlockDetailComponent, NodeDetailComponent, NodeStatusComponent } from './components';
import { BlockListComponent, NodeListComponent } from './containers';
import { StatusRoutingModule } from './status.routing.module';
import { StatusEffects } from './store/status.effects';
import * as statusFacade from './store/status.facade';

const COMPONENTS = [
  NodeListComponent,
  NodeDetailComponent,
  BlockListComponent,
  BlockDetailComponent,
  NodeStatusComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    StatusRoutingModule,
    StoreModule.forFeature(statusFacade.featureKey, statusFacade.statusReducer, {
      metaReducers: statusFacade.metaReducers
    }),
    EffectsModule.forFeature([StatusEffects])
  ]
})
export class StatusModule {}
