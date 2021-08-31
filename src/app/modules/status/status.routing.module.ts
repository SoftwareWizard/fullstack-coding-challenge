import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NodeListComponent } from './containers';

const routes: Routes = [
  {path: '', component: NodeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
