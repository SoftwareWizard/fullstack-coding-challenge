import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BlockDetailComponent, NodeDetailComponent } from './components';
import { BlockListComponent, NodeListComponent, ShellComponent } from './containers';
import { NodeStatusComponent } from './components/node-status/node-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    NodeListComponent,
    NodeDetailComponent,
    BlockListComponent,
    BlockDetailComponent,
    NodeStatusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
