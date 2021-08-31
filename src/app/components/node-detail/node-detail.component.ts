import { Component, Input } from '@angular/core';

import { Node } from '../../models';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent {
  @Input() node: Node = {} as Node;
  @Input() isExpanded: boolean = false;

  constructor() {}

  public onToggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
