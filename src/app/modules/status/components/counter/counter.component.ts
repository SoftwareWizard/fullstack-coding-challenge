import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { decrement, increment, reset } from '../../store/status.actions';
import { StatusState } from '../../store/status.reducer';
import { counter } from '../../store/status.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public count$: Observable<number>;

  constructor(private store: Store<StatusState>) {
    this.count$ = this.store.pipe(select(counter));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
