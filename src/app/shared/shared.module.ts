import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const TOASTR_CONFIG = {
  timeOut: 2000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(TOASTR_CONFIG)
  ],
  exports: [CommonModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, ToastrModule]
})
export class SharedModule {}
