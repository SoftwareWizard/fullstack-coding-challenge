import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './containers/app/app.component';
import { ShellComponent } from './containers/shell/shell.component';

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [AppComponent, ShellComponent]
})
export class CoreModule {}
