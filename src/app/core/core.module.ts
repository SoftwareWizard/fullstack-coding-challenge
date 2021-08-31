import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './containers/shell/shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [ShellComponent]
})
export class CoreModule {}
