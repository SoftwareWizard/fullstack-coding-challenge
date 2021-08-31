import { EMPTY, Observable } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as StatusActions from './status.actions';

@Injectable()
export class StatusEffects {
  loadStatuss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StatusActions.increment),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  constructor(private actions$: Actions) {}
}
