import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Node } from '../../models';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent {
  @Input() node: Node = {} as Node;
  @Output() toggleExpand = new EventEmitter<number>();

  constructor() {}

  public onToggle(): void {
    this.toggleExpand.emit(this.node.id);
  }

  public get isDisabled(): boolean {
    return !this.node.isOnline && !this.node.isExpanded;
  }
}
