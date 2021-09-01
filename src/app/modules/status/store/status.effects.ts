import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { getActions } from '@ngrx-ducks/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { NodeService } from '../services/node.service';
import { StatusFacade } from './status.facade';

const statusActions = getActions(StatusFacade);
@Injectable()
export class StatusEffects {
  constructor(
    private actions$: Actions,
    private statusFacade: StatusFacade,
    private nodeService: NodeService
  ) {}

  loadNodes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(statusActions.loadNodes),
      withLatestFrom(this.statusFacade.select.nodes),
      mergeMap(([action, nodes]) =>
        nodes.map(node => statusActions.loadNodeStatus({ nodeId: node.id, url: node.url }))
      )
    );
  });

  loadNodeStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(statusActions.loadNodeStatus),
      mergeMap(action =>
        this.nodeService.getStatus(action.payload.url).pipe(
          map(status =>
            statusActions.loadNodeStatusSuccess({ status, nodeId: action.payload.nodeId })
          ),
          catchError(error =>
            of(statusActions.loadNodeStatusFailure({ nodeId: action.payload.nodeId }))
          )
        )
      )
    );
  });
}
