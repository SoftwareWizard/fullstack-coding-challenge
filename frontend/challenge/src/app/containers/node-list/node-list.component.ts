import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { Node } from '../../models';
import { NodesStore } from '../../store/nodes.store';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  public nodes$: Observable<Node[]> = new Observable<Node[]>();

  constructor(private nodeStore: NodesStore) {}

  ngOnInit(): void {
    this.nodeStore.getStatus();
    this.nodes$ = this.nodeStore.state$;
  }
}
