import { Observable } from 'rxjs';

import { Component } from '@angular/core';

import { StatusFacade } from '../../store/status.facade';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public count$: Observable<number>;

  constructor(private statusFacade: StatusFacade) {
    this.count$ = this.statusFacade.select.counter;
  }

  increment() {
    this.statusFacade.increment.dispatch();
  }

  decrement() {
    this.statusFacade.decrement.dispatch();
  }

  reset() {
    this.statusFacade.reset.dispatch();
  }
}
