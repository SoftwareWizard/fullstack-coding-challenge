import { Status } from 'src/app/models/status';

import { Component, Input, OnInit } from '@angular/core';

import { INode } from '../../models/node';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent implements OnInit {
  @Input() node: INode = {} as INode;
  @Input() isExpanded: boolean = false;

  public statusText = new Map([
    [Status.success, 'online'],
    [Status.failure, 'offline'],
    [Status.start, 'starting']
  ]);

  constructor() {}

  ngOnInit(): void {}

  public onToggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
