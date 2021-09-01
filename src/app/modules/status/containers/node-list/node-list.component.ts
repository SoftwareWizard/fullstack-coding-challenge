import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { Node } from '../../models';
import { StatusFacade } from '../../store/status.facade';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  public nodes$: Observable<Node[]> = new Observable<Node[]>();
  public isSomeLoading$: Observable<boolean> = new Observable<boolean>();

  constructor(private statusFacade: StatusFacade) {}

  async ngOnInit(): Promise<void> {
    this.nodes$ = this.statusFacade.select.nodes;
    this.isSomeLoading$ = this.statusFacade.select.isSomeLoading;
    this.statusFacade.loadNodes.dispatch();
  }

  public onToggleExpand(nodeId: number) {
    this.statusFacade.toggleNode.dispatch({ nodeId });
  }
}
