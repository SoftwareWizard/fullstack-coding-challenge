import { Injectable } from '@angular/core';
import { getActions } from '@ngrx-ducks/core';
import { Actions } from '@ngrx/effects';

import { StatusFacade } from './status.facade';

const statusActions = getActions(StatusFacade);
@Injectable()
export class StatusEffects {
  constructor(private actions$: Actions) {}

  // loadStatuss$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(statusActions.increment),
  //     /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //     concatMap(() => EMPTY as Observable<{ type: string }>)
  //   );
  // });
}
