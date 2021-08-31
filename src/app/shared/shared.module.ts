import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const TOASTR_CONFIG = {
  timeOut: 2000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(TOASTR_CONFIG)
  ],
  exports: [ToastrModule]
})
export class SharedModule {}
