import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { Node } from '../models';
import { NodeService } from '../services/node.service';
import { State, Store } from './';

@Injectable({
  providedIn: 'root'
})
export class NodesStore extends Store<Node[]> {
  constructor(private nodeService: NodeService) {
    super(new State().list);
  }

  public getStatus(): void {
    this._getStatus().subscribe((value: any) => {
      this.setState([...value]);
    });
  }

  private _getStatus(): Observable<Node[]> {
    const status = this.state.map(node => {
      return this.nodeService.getNodes(node.url).pipe(
        catchError(error => {
          console.log(error);
          return of(null);
        }),
        map(status => {
          return {
            ...node,
            name: status?.node_name ?? '',
            online: !!status,
            loading: false
          };
        })
      );
    });

    return forkJoin(status);
  }
}
