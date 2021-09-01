import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Node } from '../../models';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent {
  @Input() node: Node = {} as Node;
  @Output() toggleExpand = new EventEmitter<boolean>();

  constructor() {}

  public onToggle(isExpanded: boolean): void {
    this.toggleExpand.emit(isExpanded);
  }
}
