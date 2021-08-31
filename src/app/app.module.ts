import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BlockDetailComponent, NodeDetailComponent, NodeStatusComponent } from './components';
import { BlockListComponent, NodeListComponent, ShellComponent } from './containers';

const TOASTR_CONFIG = {
  timeOut: 2000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true
};

const COMPONENTS = [
  NodeListComponent,
  NodeDetailComponent,
  BlockListComponent,
  BlockDetailComponent,
  NodeStatusComponent
];

@NgModule({
  declarations: [AppComponent, ShellComponent, ...COMPONENTS],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(TOASTR_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
