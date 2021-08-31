import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StatusModule } from './modules/status/status.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, CoreModule, StatusModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
